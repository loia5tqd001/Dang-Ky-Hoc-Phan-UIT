import ClassCell from './ClassCell';
import RowHocTrenTruong from './RowHocTrenTruong';
import TableHead from './TableHead';
import { usePhanLoaiHocTrenTruong } from './hooks';
import './styles.css';

function Index() {
  const { rowDataHocTrenTruong, khongHocTrenTruong } = usePhanLoaiHocTrenTruong();

  return (
    <div id="thoi-khoa-bieu">
      <table>
        <TableHead />
        <tbody>
          {rowDataHocTrenTruong.map((row, index) => (
            <RowHocTrenTruong key={index} row={row} index={index} />
          ))}
          {khongHocTrenTruong.map((lop, index) => (
            <tr key={index}>
              <td colSpan={7} className="cell-class">
                <ClassCell {...lop} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
