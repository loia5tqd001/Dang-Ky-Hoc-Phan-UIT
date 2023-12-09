import React from 'react';
import { getDanhSachTiet } from '../../../utils';
import { timeLookup } from './utils';
import ClassCell from './ClassCell';
import { CELL } from './hooks';

const GetCell = ({ data }) => {
  if (data === CELL.ABSENT) return <td />;
  if (data === CELL.OCCUPIED) return null;
  return (
    <td rowSpan={getDanhSachTiet(data.Tiet).length} className="cell-class">
      <ClassCell {...data} />
    </td>
  );
};

function RowHocTrenTruong({ row, index }) {
  return (
    <tr>
      <td className="cell-tiet">
        Tiết {index + 1} <br />
        {timeLookup[index]}
      </td>
      {[2, 3, 4, 5, 6, 7].map((t) => (
        <GetCell key={t} data={row['Thu' + t]} />
      ))}
    </tr>
  );
}

export default RowHocTrenTruong;
