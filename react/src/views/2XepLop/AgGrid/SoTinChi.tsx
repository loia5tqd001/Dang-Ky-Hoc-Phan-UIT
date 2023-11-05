import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedClasses } from 'redux/xepTkb/selectors';
import { calcTongSoTC } from 'utils';

function SoTinChi() {
  const cacLop = useSelector(selectSelectedClasses);
  const tongSoTC = calcTongSoTC(cacLop);

  return (
    <Tooltip
      title={
        tongSoTC < 14
          ? 'Chưa đạt số TC quy định: 14'
          : tongSoTC > 24
          ? 'Vượt quá số TC quy định: 24'
          : 'Số TC quy định là 14-24'
      }
    >
      <p style={{ color: `${tongSoTC < 14 || tongSoTC > 24 ? 'red' : 'green'}`, margin: 0, padding: 6 }}>
        Số tín chỉ: <b>{tongSoTC}</b>
      </p>
    </Tooltip>
  );
}

export default SoTinChi;
