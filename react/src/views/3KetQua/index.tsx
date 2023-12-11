import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import SoTinChi from '../../components/SoTinChi';
import { selectIsChiVeTkb, selectTextareaChiVeTkb, selectTongSoTcBuoc3, useTkbStore } from '../../zus';
import ScriptDangKyInput from './ScriptDangKyInput';
import ThoiKhoaBieuTable from './ThoiKhoaBieuTable';

function Index() {
  const setIsChiVeTkb = useTkbStore((s) => s.setIsChiVeTkb);
  const setTextareChiVeTkb = useTkbStore((s) => s.setTextareChiVeTkb);
  const khongXepLop = useTkbStore(selectIsChiVeTkb);
  const textareaChiVeTkb = useTkbStore(selectTextareaChiVeTkb);
  const tongSoTC = useTkbStore(selectTongSoTcBuoc3);

  return (
    <div style={{ marginTop: -15, maxWidth: 1500 }}>
      <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip title="Tick chọn khi bạn không dùng chức năng Xếp Lớp ở Bước 2">
          <FormControlLabel
            control={
              <Checkbox
                checked={khongXepLop}
                onChange={(e) => setIsChiVeTkb(e.target.checked)}
                name="checkedA"
                color="primary"
                size="small"
              />
            }
            style={!khongXepLop ? { opacity: 0.5 } : undefined}
            label={'Không dùng tool Xếp Lớp'}
          />
        </Tooltip>
        <SoTinChi tongSoTcSelected={tongSoTC} />
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: 10 }}>
        <Grid item xs={6}>
          <Tooltip title={khongXepLop ? 'Mỗi lớp một hàng' : ''}>
            <TextField
              label={khongXepLop ? 'Tự nhập danh sách lớp (mỗi mã lớp một hàng)' : 'Đang dùng dữ liệu từ bước xếp lớp'}
              fullWidth
              size="small"
              multiline
              inputProps={{ style: { resize: 'vertical' } }}
              rows={2}
              variant="outlined"
              onChange={(e) => {
                setTextareChiVeTkb(e.target.value);
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
