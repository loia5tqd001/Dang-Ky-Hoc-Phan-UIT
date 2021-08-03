import React from 'react';

function ClassCell({ MaLop, NgonNgu, TenMH, TenGV, PhongHoc, NBD, NKT }) {
  return (
    <>
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
    </>
  );
}

export default ClassCell;
