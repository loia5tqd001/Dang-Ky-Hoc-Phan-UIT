import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsChiVeTkb, selectTextareaChiVeTkb } from 'redux/xepTkb/selectors';
import { setIsChiVeTkb, setTextareChiVeTkb } from 'redux/xepTkb/slice';
import ScriptDangKyInput from './ScriptDangKyInput';
import ThoiKhoaBieuTable from './ThoiKhoaBieuTable';

function Index() {
  const dispatch = useDispatch();
  const khongXepLop = useSelector(selectIsChiVeTkb);
  const textareaChiVeTkb = useSelector(selectTextareaChiVeTkb);

  return (
    <div style={{ height: '100%', minWidth: '90%', display: 'grid', placeContent: 'center' }}>
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
      <Grid container spacing={2} style={{ marginBottom: 5, maxWidth: 1510 }}>
        <Grid item xs={6}>
          <Tooltip title={khongXepLop ? 'Mỗi lớp một hàng' : ''}>
            <TextField
              label={khongXepLop ? 'Tự nhập danh sách lớp (mỗi mã lớp một hàng)' : 'Đang dùng dữ liệu từ bước xếp lớp'}
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
        <ScriptDangKyInput />
      </Grid>
      <ThoiKhoaBieuTable />
    </div>
  );
}

export default Index;
