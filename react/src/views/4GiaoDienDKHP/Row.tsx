import { ClassModel } from 'models';
import React from 'react';

type Props = {
  lop: ClassModel;
};

export const Row: React.FC<Props> = (props) => {
  const { lop } = props;

  return (
    <>
      <td>
        <div className={`form-item form-type-checkbox form-item-table-lophoc-${lop.MaLop}`}>
          <input type="checkbox" value={lop.MaLop} className="form-checkbox" />
        </div>
      </td>
      <td>{lop.MaMH}</td>
      <td style={{ color: lop.ThucHanh ? '#ff8040' : undefined }}>{lop.MaLop}</td>
      <td>
        {lop.TenMH}
        {(() => {
          if (lop.HTGD === 'HT1')
            return (
              <>
                {' '}
                (HT1 - Học cách <strong>2</strong> tuần)
              </>
            );
          if (lop.HTGD === 'HT2') return <> (HT2)</>;
          return '';
        })()}
      </td>
      {!lop.MaMH.startsWith('EN') && <td>{lop.KhoaQL}</td>}
      <td>{lop.SoTc}</td>
      <td>
        Thứ {lop.Thu}, Tiết {lop.Tiet}, {lop.PhongHoc || ''}
        <br />
      </td>
      <td>
        {lop.TenGV || ''} - {lop.MaGV || ''}
      </td>
      <td>{lop.SiSo}</td>
      <td>0</td>
      <td>{lop.NgonNgu}</td>
    </>
  );
};
