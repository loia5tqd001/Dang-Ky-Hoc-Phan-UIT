import { getDanhSachTiet } from '../../../utils';
import ClassCell, { ClassCellContext } from './ClassCell';
import TableHead from './TableHead';
import { CELL, usePhanLoaiHocTrenTruong } from './hooks';
import './styles.css';
import { timeLookup } from './utils';

const GetCell = ({ data }) => {
  if (data === CELL.NO_CLASS) return <td />;
  if (data === CELL.OCCUPIED) return null;
  return <ClassCell data={data} rowSpan={getDanhSachTiet(data.Tiet).length} />;
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

function Index() {
  const { rowDataHocTrenTruong, khongHocTrenTruong } = usePhanLoaiHocTrenTruong();

  return (
    <div id="thoi-khoa-bieu">
      <table>
        <TableHead />
        <tbody>
          <ClassCellContext>
            {rowDataHocTrenTruong.map((row, index) => (
              <RowHocTrenTruong key={index} row={row} index={index} />
            ))}
            {khongHocTrenTruong.map((lop, index) => (
              <tr key={index}>
                <ClassCell colSpan={7} data={lop} />
              </tr>
            ))}
          </ClassCellContext>
        </tbody>
      </table>
    </div>
  );
}

export default Index;
