import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ClassModel } from '../../../models';
import { useTkbStore } from '../../../zus';

function ClassCell(classModel: ClassModel) {
  const { MaLop, NgonNgu, TenMH, TenGV, PhongHoc, NBD, NKT } = classModel;
  const removeClass = useTkbStore((s) => s.removeClass);

  // TODO: display warning cho cac truong hop:
  // - chon 2 slot chung lop
  // - chon 2 slot chung mon khac lop, i.e: Nhap Mon Lap Trinh LT cua 1 nguoi, TH cua 1 nguoi khac
  return (
    <div>
      <Tooltip title="Xoá lớp này">
        <IconButton
          style={{ position: 'absolute', top: 0, right: 0 }}
          color="inherit"
          size="small"
          onClick={() => removeClass(classModel)}
          className="remove-class-btn"
          // TODO: CMD+Click to remove all
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
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
    </div>
  );
}

export default ClassCell;
