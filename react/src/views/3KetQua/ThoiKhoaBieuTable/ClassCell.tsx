import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import { ClassModel } from '../../../types';
import { selectIsChiVeTkb, selectSelectedClasses, useTkbStore } from '../../../zus';
import './styles.css';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import constate from 'constate';

type Props = {
  data: ClassModel;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

export const [ClassCellContext, useClassCellContext] = constate(() => {
  const [cellDataHovering, setCellDataHovering] = useState<ClassModel | null>(null);
  return { cellDataHovering, setCellDataHovering };
});

// https://github.com/TanStack/router/blob/99e725bdc7090970234d752528e4b36d58a9be28/packages/react-router/src/router.ts#L1712-L1714
function isCtrlEvent(e: React.MouseEvent) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function getCtrlKeyString() {
  const isMac = navigator.userAgent.toUpperCase().includes('MAC');
  return isMac ? 'Cmd' : 'Ctrl';
}

function ClassCell({ data, ...restProps }: Props) {
  const { MaLop, NgonNgu, TenMH, TenGV, PhongHoc, NBD, NKT } = data;
  const removeClasses = useTkbStore((s) => s.removeClasses);
  const selectedClasses = useTkbStore(selectSelectedClasses);
  const isChiVeTkb = useTkbStore(selectIsChiVeTkb);
  const { cellDataHovering, setCellDataHovering } = useClassCellContext();

  // TODO: display warning cho cac truong hop:
  // - chon 2 slot chung lop
  // - chon 2 slot chung mon khac lop, i.e: Nhap Mon Lap Trinh LT cua 1 nguoi, TH cua 1 nguoi khac
  const cacLopChungMonDangChon = useMemo(() => {
    return selectedClasses.filter((selectedClass) => selectedClass.MaMH === data.MaMH);
  }, [selectedClasses]);

  return (
    <td
      {...restProps}
      className={clsx('cell-class', {
        'cell-class-hovering': cellDataHovering?.MaMH === data.MaMH,
      })}
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
            </>
          }
        >
          <IconButton
            style={{ position: 'absolute', top: 0, right: 0 }}
            color="inherit"
            size="small"
            onClick={(e) => {
              const classesToRemove = isCtrlEvent(e) ? cacLopChungMonDangChon : [data];
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
    </td>
  );
}

export default ClassCell;
