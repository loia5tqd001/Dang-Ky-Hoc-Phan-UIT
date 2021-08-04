import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// mui
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectIsChiVeTkb, selectPhanLoaiHocTrenTruong, selectTextareaChiVeTkb } from 'redux/xepTkb/selectors';
import { setIsChiVeTkb, setTextareChiVeTkb } from 'redux/xepTkb/slice';
import { extractListMaLop } from 'utils';
import ScriptDangKyInput from './ScriptDangKyInput';
import ThoiKhoaBieuTable from './ThoiKhoaBieuTable';

function Index() {
  const dispatch = useDispatch();
  const khongXepLop = useSelector(selectIsChiVeTkb);
  const textareaChiVeTkb = useSelector(selectTextareaChiVeTkb);
  const cacLop = useSelector(selectPhanLoaiHocTrenTruong);

  return (
    <div style={{ height: '100%', minWidth: '90%' }}>
      <FormGroup row style={{ marginBottom: 5 }}>
        <Tooltip title="Tick chọn khi bạn không dùng chức năng Xếp Lớp ở Bước 2">
          <FormControlLabel
            control={
              <Checkbox
                checked={khongXepLop}
                onChange={(e) => dispatch(setIsChiVeTkb(e.target.checked))}
                name="checkedA"
                color="primary"
                size="small"
              />
            }
            style={
              !khongXepLop
                ? {
                    opacity: 0.5,
                    transform: 'scale(0.8)',
                    transformOrigin: 'left center',
                    fontStyle: 'italic',
                  }
                : undefined
            }
            label={'Không dùng tool Xếp Lớp' + (khongXepLop ? '' : '?')}
          />
        </Tooltip>
      </FormGroup>
      <Grid container spacing={2} style={{ marginBottom: 10, maxWidth: 1510 }}>
        <Grid item xs={6}>
          <Tooltip title="Bạn chỉ chọn data nguồn ở B1 và nhập danh sách lớp ở đây, không dùng B2">
            <TextField
              label={
                khongXepLop
                  ? 'Tự nhập danh sách lớp (LƯU Ý COPY PASTE KHÔNG GÕ TỪNG CHỮ)'
                  : 'Đang dùng dữ liệu từ bước xếp lớp'
              }
              fullWidth
              size="small"
              multiline
              rows={2}
              variant="outlined"
              onChange={(e) => {
                dispatch(setTextareChiVeTkb(e.target.value));
              }}
              disabled={!khongXepLop}
              value={khongXepLop ? textareaChiVeTkb : ''}
            />
          </Tooltip>
        </Grid>
        <ScriptDangKyInput listMaLop={extractListMaLop(cacLop.flat())} />
      </Grid>

      <ThoiKhoaBieuTable />
    </div>
  );
}

export default Index;

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
