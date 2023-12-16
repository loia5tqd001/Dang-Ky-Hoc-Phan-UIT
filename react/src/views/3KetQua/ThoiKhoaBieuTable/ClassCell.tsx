import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { IconButton, Tooltip } from '@mui/material';
import clsx from 'clsx';
import constate from 'constate';
import groupBy from 'lodash/groupBy';
import reverse from 'lodash/reverse';
import { useMemo, useState } from 'react';
import { ClassModel } from '../../../types';
import { isSameAgGridRowId, uniqMaLop } from '../../../utils';
import { selectIsChiVeTkb, selectSelectedClasses, selectSelectedClassesBuoc3, useTkbStore } from '../../../zus';
import { usePhanLoaiHocTrenTruongContext } from './hooks';
import './styles.css';

const randomColors = [
  '#FF5733',
  '#3498DB',
  '#1ABC9C',
  '#9B59B6',
  '#E74C3C',
  '#2ECC71',
  '#F39C12',
  '#7F8C8D',
  '#D35400',
  '#2980B9',
  '#27AE60',
  '#8E44AD',
  '#C0392B',
  '#16A085',
  '#F1C40F',
  '#34495E',
  '#E67E22',
  '#3498DB',
  '#2C3E50',
  '#E74C3C',
  '#1B1464',
  '#6C3483',
  '#2E4053',
  '#FF4500',
  '#008080',
  '#800000',
  '#8B4513',
  '#FF6347',
  '#4B0082',
  '#7CFC00',
  '#8A2BE2',
  '#00FA9A',
  '#DC143C',
  '#20B2AA',
  '#FFFF00',
  '#191970',
  '#A52A2A',
  '#808080',
  '#8B008B',
  '#008B8B',
  '#00CED1',
  '#BC8F8F',
  '#4169E1',
  '#00FF7F',
  '#FF1493',
] as const;

type Props = {
  data: ClassModel;
  isOutsideTable?: boolean;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

const getMonChonRoiKey = (data: ClassModel) => `${data.MaMH}-${data.ThucHanh}`;
const useMonChonRoi = () => {
  const newRandomColors = useMemo(() => reverse([...randomColors]), []);
  const selectedClasses = useTkbStore(selectSelectedClassesBuoc3);
  const map = groupBy(selectedClasses, getMonChonRoiKey);
  const mapColor: Record<keyof typeof map, (typeof newRandomColors)[number]> = {};
  let index = 0;
  Object.entries(map).forEach(([key, value]) => {
    const hasDuplication = uniqMaLop(value).length > 1;
    if (hasDuplication) mapColor[key] = newRandomColors[index++];
  });
  const getWarningColor = (data: ClassModel) => mapColor[getMonChonRoiKey(data)];
  const isWarning = (data: ClassModel) => !!getWarningColor(data);
  return { isWarning, getWarningColor };
};
export const [ClassCellContext, useClassCellContext] = constate(() => {
  const [cellHovering, setCellHovering] = useState<ClassModel | null>(null);
  const [isHoveringOnRemoveIcon, setIsHoveringOnRemoveIcon] = useState(false);
  const [isHoveringOnWarningIcon, setIsHoveringOnWarningIcon] = useState(false);
  const { isWarning, getWarningColor } = useMonChonRoi();
  const isHoveringOnThisCell = (data: ClassModel, fieldCompare: keyof ClassModel) => {
    return cellHovering?.[fieldCompare] === data?.[fieldCompare];
  };
  const isHoveringOnThisCellRemoveIcon = (data: ClassModel) =>
    isHoveringOnThisCell(data, 'MaMH') && isHoveringOnRemoveIcon;
  const isHoveringOnThisCellWarningIcon = (data: ClassModel) => {
    return !!cellHovering && getMonChonRoiKey(data) === getMonChonRoiKey(cellHovering) && isHoveringOnWarningIcon;
  };
  return {
    isHoveringOnThisCell,
    isHoveringOnThisCellRemoveIcon,
    isHoveringOnThisCellWarningIcon,
    setCellHovering,
    setIsHoveringOnRemoveIcon,
    setIsHoveringOnWarningIcon,
    isWarning,
    getWarningColor,
  };
});

function ClassCell({ data, isOutsideTable = false, ...restProps }: Props) {
  const { MaLop, NgonNgu, TenMH, TenGV, PhongHoc, NBD, NKT, Thu, Tiet } = data;
  const removeClasses = useTkbStore((s) => s.removeClasses);
  const selectedClasses = useTkbStore(selectSelectedClasses);
  const isChiVeTkb = useTkbStore(selectIsChiVeTkb);
  const {
    isHoveringOnThisCell,
    isHoveringOnThisCellRemoveIcon,
    isHoveringOnThisCellWarningIcon,
    setIsHoveringOnWarningIcon,
    setCellHovering,
    setIsHoveringOnRemoveIcon,
    isWarning,
    getWarningColor,
  } = useClassCellContext();

  const { redundant } = usePhanLoaiHocTrenTruongContext();

  // TODO: display warning cho cac truong hop:
  // - chon 2 slot chung mon khac lop, i.e: Nhap Mon Lap Trinh LT cua 1 nguoi, TH cua 1 nguoi khac
  const cacLopChungMonDangChon = useMemo(() => {
    return selectedClasses.filter((selectedClass) => selectedClass.MaMH === data.MaMH);
  }, [data.MaMH, selectedClasses]);

  const redundantIndex = redundant.findIndex((info) => {
    return (
      isSameAgGridRowId(info.existing, data) || info.new.some((addingClass) => isSameAgGridRowId(addingClass, data))
    );
  });
  const isRedundantRelated = redundantIndex > -1;

  return (
    <Tooltip title={isRedundantRelated ? 'Bị trùng TKB' : null}>
      <td
        {...restProps}
        className={clsx('cell-class', {
          'cell-class-hovering': isHoveringOnThisCell(data, 'MaMH'),
        })}
        style={{
          boxShadow: isRedundantRelated ? `inset 0 0 0 3px ${randomColors[redundantIndex]}` : undefined,
        }}
        onMouseEnter={() => setCellHovering(data)}
        onMouseLeave={() => setCellHovering(null)}
      >
        {!isChiVeTkb && (
          <Tooltip
            title={
              <>
                Xoá môn này
                {isWarning(data) && isHoveringOnThisCell(data, 'MaLop') && (
                  <>
                    <br />
                    hoặc Shift+Click để chỉ xoá slot này
                  </>
                )}
              </>
            }
            open={isHoveringOnThisCellRemoveIcon(data)}
          >
            <IconButton
              onMouseEnter={() => setIsHoveringOnRemoveIcon(true)}
              onMouseLeave={() => setIsHoveringOnRemoveIcon(false)}
              style={{ position: 'absolute', top: 0, right: 0 }}
              color="inherit"
              size="small"
              onClick={(e) => {
                const classesToRemove = (() => {
                  if (isWarning(data) && e.shiftKey) return [data];
                  if ((e.ctrlKey || e.metaKey) && e.shiftKey) return selectedClasses; // easter eggs: Cmd + Shift + Click to remove all selected classes
                  return cacLopChungMonDangChon;
                })();
                removeClasses(classesToRemove);
                setCellHovering(null);
              }}
              className="remove-class-btn"
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        )}
        <strong>
          {MaLop}
          {isWarning(data) && (
            <Tooltip open={isHoveringOnThisCellWarningIcon(data)} title="Có vẻ như bạn đang chọn thừa cho môn này">
              <WarningAmberIcon
                onMouseEnter={() => setIsHoveringOnWarningIcon(true)}
                onMouseLeave={() => setIsHoveringOnWarningIcon(false)}
                style={{ color: getWarningColor(data) }}
              />
            </Tooltip>
          )}{' '}
          - {NgonNgu}
        </strong>
        <br />
        {TenMH}
        <br />
        <strong>{TenGV}</strong>
        <br />
        {PhongHoc}
        <br />
        BĐ: {NBD}
        <br />
        KT: {NKT}
        <br />
        {isOutsideTable && (
          <>
            <br />
            <strong>
              Thứ {Thu} Tiết {Tiet}
            </strong>
            <br />
          </>
        )}
      </td>
    </Tooltip>
  );
}

export default ClassCell;
