import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import SoTinChi from '../../components/SoTinChi';
import { selectIsChiVeTkb, selectTongSoTcBuoc3, useTkbStore } from '../../zus';
import ScriptDangKyInput, { DanhSachLopInput } from './ScriptDangKyInput';
import ThoiKhoaBieuTable from './ThoiKhoaBieuTable';

function Index() {
  const setIsChiVeTkb = useTkbStore((s) => s.setIsChiVeTkb);
  const khongXepLop = useTkbStore(selectIsChiVeTkb);
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
      <Grid container spacing={2} style={{ marginBottom: 10, marginTop: -10 }}>
        <DanhSachLopInput />
        <ScriptDangKyInput />
      </Grid>
      <ThoiKhoaBieuTable />
    </div>
  );
}

export default Index;
