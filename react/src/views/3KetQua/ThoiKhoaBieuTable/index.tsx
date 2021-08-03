import React from 'react';
import { usePhanLoaiHocTrenTruong, useProcessImageTkb } from './hooks';
// components
import ClassCell from './ClassCell';
import TableHead from './TableHead';
import RowHocTrenTruong from './RowHocTrenTruong';
// mui
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

function Index() {
  const { rowDataHocTrenTruong, khongHocTrenTruong } = usePhanLoaiHocTrenTruong();
  const {
    tkbTableRef,
    isCopyingToClipboard,
    onHandleCopyToClipboard,
    isSavingToComputer,
    onHandleSavingToComputer,
  } = useProcessImageTkb();

  return (
    <div id="thoi-khoa-bieu">
      <Button
        size="small"
        variant="outlined"
        style={{ marginRight: 4 }}
        children={
          isCopyingToClipboard ? <CircularProgress size={20} /> : 'Sao chép hình ảnh TKB vào clipboard'
        }
        onClick={onHandleCopyToClipboard}
      />
      <Button
        size="small"
        variant="outlined"
        color="primary"
        children={isSavingToComputer ? <CircularProgress size={20} /> : 'Tải hình ảnh TKB về máy'}
        onClick={onHandleSavingToComputer}
      />
      <table ref={tkbTableRef}>
        <TableHead />
        <tbody>
          {rowDataHocTrenTruong.map((row, index) => (
            <RowHocTrenTruong key={index} row={row} index={index} />
          ))}
          {khongHocTrenTruong.map((lop, index) => (
            <tr key={index}>
              <td colSpan="7" className="cell-class">
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
