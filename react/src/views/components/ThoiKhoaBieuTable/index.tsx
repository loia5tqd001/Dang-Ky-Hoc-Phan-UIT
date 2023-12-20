import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { IconButton, Tooltip } from '@mui/material';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import { getDanhSachTiet } from '../../../utils';
import { selectIsChiVeTkb, useTkbStore } from '../../../zus';
import ClassCell, { ClassCellContext } from './ClassCell';
import TableHead from './TableHead';
import { CELL, PhanLoaiHocTrenTruongContext, usePhanLoaiHocTrenTruongContext, useProcessImageTkb } from './hooks';
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

  const location = useLocation();
  const isChiVeTkb = useTkbStore(selectIsChiVeTkb);
  const { tkbTableRef, saveTkbImageToComputer } = useProcessImageTkb();

  const isInStep2 = location.pathname === ROUTES._2XepLop.path;

  // TODO: refactor the messy flow after writing tests
  if (isInStep2 && isChiVeTkb) {
    return (
      <h3 style={{ textAlign: 'center', padding: 20 }}>
        {location.search.includes('self_selected') ? (
          <>
            Preview bị disable ở chế độ chia sẻ TKB <code style={{ whiteSpace: 'nowrap' }}>?self_selected=</code>, sang
            tab Bước 3 để xem TKB
          </>
        ) : (
          `Bạn đang chọn "Tự chuẩn bị danh sách mã lớp" ở tab Bước 3`
        )}
      </h3>
    );
  }

  return (
    <ClassCellContext>
      <div id="thoi-khoa-bieu" className={clsx({ compact: isInStep2 })}>
        <Tooltip title="Tải hình ảnh TKB về máy">
          <IconButton onClick={saveTkbImageToComputer} className="download-image-btn" color="primary">
            <FileDownloadIcon />
          </IconButton>
        </Tooltip>
        <div style={{ display: 'flex' }}>
          {redundant
            .flatMap((it) => it.new)
            .map((lop, index) => (
              <tr key={index}>
                <ClassCell data={lop} isOutsideTable />
              </tr>
            ))}
        </div>
        <table ref={tkbTableRef}>
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
