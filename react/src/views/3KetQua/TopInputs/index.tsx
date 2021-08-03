import React from 'react';
import { useSelector } from 'react-redux';
import { selectPhanLoaiMaLopAV, selectTongSoTC } from 'redux/xepTkb/selectors';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import ScriptDangKyInput from './ScriptDangKyInput';
import { makeStyles } from '@material-ui/core/styles';

function TopInputs() {
  const { maLopAV, maLopThuong } = useSelector(selectPhanLoaiMaLopAV);
  const tongSoTC = useSelector(selectTongSoTC);
  const classes = useStyles({ tongSoTCWaring: tongSoTC < 14 || tongSoTC > 24 });

  return (
    <Grid container spacing={2} style={{ marginBottom: 10, maxWidth: 1510 }}>
      <Grid item xs={2} style={{ marginRight: 'auto' }}>
        <Tooltip
          title={
            tongSoTC < 14
              ? 'Chưa đạt số TC quy định (14)'
              : tongSoTC > 24
              ? 'Vượt quá số TC quy định (24)'
              : 'Thỏa mãn số TC quy định (14-24)'
          }
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
      </Grid>
      <ScriptDangKyInput listMaLop={maLopAV} loaiMaLop={'anh văn'} />
      <ScriptDangKyInput listMaLop={maLopThuong} loaiMaLop={'thường'} />
    </Grid>
  );
}

export default TopInputs;

// styles below:

const useStyles = makeStyles((theme) => ({
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
