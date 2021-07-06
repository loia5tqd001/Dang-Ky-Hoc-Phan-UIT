import React from 'react';
import { timeLookup } from './utils';
import ClassCell from './ClassCell';

const GetCell = ({ data }) => {
  if (data === null) return <td />;
  if (data === 'xx') return null;
  return (
    <td rowSpan={data.Tiet.length} className="cell-class">
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
