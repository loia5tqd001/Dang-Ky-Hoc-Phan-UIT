import { getDanhSachTiet } from '../../../utils';
import ClassCell, { ClassCellContext } from './ClassCell';
import TableHead from './TableHead';
import { CELL, PhanLoaiHocTrenTruongContext, usePhanLoaiHocTrenTruongContext } from './hooks';
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

function Render() {
  const { rowDataHocTrenTruong, khongHocTrenTruong, redundant } = usePhanLoaiHocTrenTruongContext();

  return (
    <ClassCellContext>
      <div id="thoi-khoa-bieu">
        <div style={{ display: 'flex' }}>
          {redundant
            .flatMap((it) => it.new)
            .map((lop, index) => (
              <tr key={index}>
                <ClassCell data={lop} isOutsideTable />
              </tr>
            ))}
        </div>
        <table>
          <TableHead />
          <tbody>
            {rowDataHocTrenTruong.map((row, index) => (
              <RowHocTrenTruong key={index} row={row} index={index} />
            ))}
            {khongHocTrenTruong.map((lop, index) => (
              <tr key={index}>
                <ClassCell colSpan={7} data={lop} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ClassCellContext>
  );
}

function Index() {
  return (
    <ClassCellContext>
      <PhanLoaiHocTrenTruongContext>
        <Render />
      </PhanLoaiHocTrenTruongContext>
    </ClassCellContext>
  );
}

export default Index;
