import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import clsx from 'clsx';
import constate from 'constate';
import { useMemo, useState } from 'react';
import { ClassModel } from '../../../types';
import { selectIsChiVeTkb, selectSelectedClasses, useTkbStore } from '../../../zus';
import './styles.css';
import { isSameAgGridRowId } from '../../../utils';
import { usePhanLoaiHocTrenTruongContext } from './hooks';

type Props = {
  data: ClassModel;
  isOutsideTable?: boolean;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

export const [ClassCellContext, useClassCellContext] = constate(() => {
  const [cellDataHovering, setCellDataHovering] = useState<ClassModel | null>(null);
  return { cellDataHovering, setCellDataHovering };
});

function getCtrlKeyString() {
  const isMac = navigator.userAgent.toUpperCase().includes('MAC');
  return isMac ? 'Cmd' : 'Ctrl';
}

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
] as const;

function ClassCell({ data, isOutsideTable = false, ...restProps }: Props) {
  const { MaLop, NgonNgu, TenMH, TenGV, PhongHoc, NBD, NKT, Thu, Tiet } = data;
  const removeClasses = useTkbStore((s) => s.removeClasses);
  const selectedClasses = useTkbStore(selectSelectedClasses);
  const isChiVeTkb = useTkbStore(selectIsChiVeTkb);
  const { cellDataHovering, setCellDataHovering } = useClassCellContext();

  const { redundant } = usePhanLoaiHocTrenTruongContext();

  // TODO: display warning cho cac truong hop:
  // - chon 2 slot chung lop
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
          'cell-class-hovering': cellDataHovering?.MaMH === data.MaMH,
        })}
        style={{
          boxShadow: isRedundantRelated ? `inset 0 0 0 3px ${randomColors[redundantIndex]}` : undefined,
        }}
        onMouseEnter={() => setCellDataHovering(data)}
        onMouseLeave={() => setCellDataHovering(null)}
      >
        {!isChiVeTkb && (
          <Tooltip
            title={
              <>
                Xoá lớp này
                {cacLopChungMonDangChon.length > 1 && (
                  <>
                    <br />
                    {getCtrlKeyString()}+Click để xoá môn
                  </>
                )}
                {/* Easter Eggs: */}
                {/* <>
                  <br />
                  {getCtrlKeyString()}+Shift+Click để xoá toàn bộ
                </> */}
              </>
            }
          >
            <IconButton
              style={{ position: 'absolute', top: 0, right: 0 }}
              color="inherit"
              size="small"
              onClick={(e) => {
                const classesToRemove = (() => {
                  const isCtrlKeyPressed = e.ctrlKey || e.metaKey;
                  if (isCtrlKeyPressed && e.shiftKey) return selectedClasses; // easter eggs
                  if (isCtrlKeyPressed) return cacLopChungMonDangChon;
                  return [data];
                })();
                removeClasses(classesToRemove);
              }}
              className="remove-class-btn"
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        )}
        <strong>
          {MaLop} - {NgonNgu}
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
