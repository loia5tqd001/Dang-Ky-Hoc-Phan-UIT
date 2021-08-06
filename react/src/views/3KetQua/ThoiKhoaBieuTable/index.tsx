import React from 'react';
// components
// mui
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from 'react-redux';
import { selectPhanLoaiHocTrenTruong } from 'redux/xepTkb/selectors';
import { makeStyles, Theme } from '@material-ui/core';
import { calcTongSoTC } from 'utils';
import ClassCell from './ClassCell';
import TableHead from './TableHead';
import RowHocTrenTruong from './RowHocTrenTruong';
import { usePhanLoaiHocTrenTruong, useProcessImageTkb } from './hooks';

function Index() {
  const { rowDataHocTrenTruong, khongHocTrenTruong } = usePhanLoaiHocTrenTruong();
  const { tkbTableRef, isCopyingToClipboard, onHandleCopyToClipboard, isSavingToComputer, onHandleSavingToComputer } =
    useProcessImageTkb();
  const cacLop = useSelector(selectPhanLoaiHocTrenTruong);
  const tongSoTC = calcTongSoTC(cacLop.flat());
  const classes = useStyles({ tongSoTCWaring: tongSoTC < 14 || tongSoTC > 24 });

  return (
    <div id="thoi-khoa-bieu">
      <div style={{ display: 'flex', maxWidth: 1500 }}>
        <Button
          size="small"
          variant="outlined"
          style={{ marginRight: 4 }}
          children={isCopyingToClipboard ? <CircularProgress size={20} /> : 'Sao chép hình ảnh TKB vào clipboard'}
          onClick={onHandleCopyToClipboard}
        />
        <Button
          size="small"
          variant="outlined"
          color="primary"
          children={isSavingToComputer ? <CircularProgress size={20} /> : 'Tải hình ảnh TKB về máy'}
          onClick={onHandleSavingToComputer}
        />
        <Tooltip
          title={
            tongSoTC < 14
              ? 'Chưa đạt số TC quy định (14)'
              : tongSoTC > 24
              ? 'Vượt quá số TC quy định (24)'
              : 'Thỏa mãn số TC quy định (14-24)'
          }
          style={{ marginLeft: 'auto' }}
        >
          <TextField
            className={classes.soTCInput}
            size="small"
            variant="outlined"
            label={'Số tín chỉ'}
            value={tongSoTC}
            inputProps={{ readOnly: true }}
          />
        </Tooltip>
      </div>
      <table ref={tkbTableRef}>
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

const useStyles = makeStyles<Theme, { tongSoTCWaring: boolean }>((theme) => ({
  soTCInput: {
    // '& label': {
    //   color: (p) =>
    //     `${p.tongSoTCWaring ? theme.palette.error.main : theme.palette.success.main} !important`,
    // },
    // '& fieldset': {
    //   border: (p) =>
    //     `1px solid ${
    //       p.tongSoTCWaring ? theme.palette.error.main : theme.palette.success.main
    //     } !important`,
    // },
    '& input': {
      color: (p) => `${p.tongSoTCWaring ? theme.palette.error.main : theme.palette.success.main} !important`,
      fontWeight: '500',
    },
  },
}));
