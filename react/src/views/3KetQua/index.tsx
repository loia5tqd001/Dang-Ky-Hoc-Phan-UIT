import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import SoTinChi from '../../components/SoTinChi';
import { selectIsChiVeTkb, selectTongSoTcBuoc3, useTkbStore } from '../../zus';
import ThoiKhoaBieuTable from '../../components/ThoiKhoaBieuTable';
import { sendTrackingEvent } from '../../tracking';
import ScriptDangKyInput, { DanhSachLopInput } from './ScriptDangKyInput';

function Index() {
  const setIsChiVeTkb = useTkbStore((s) => s.setIsChiVeTkb);
  const khongXepLop = useTkbStore(selectIsChiVeTkb);
  const tongSoTC = useTkbStore(selectTongSoTcBuoc3);

  return (
    <div style={{ marginTop: -10, maxWidth: 1500 }}>
      <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip
          title={
            window.location.search.includes('self_selected')
              ? 'Đang dùng tính năng chia sẻ TKB ?self_selected='
              : 'Tick chọn khi bạn không dùng chức năng Xếp Lớp ở Bước 2 và nhập danh sách lớp tự chuẩn bị'
          }
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={khongXepLop}
                onChange={(e) => {
                  setIsChiVeTkb(e.target.checked);
                  sendTrackingEvent.page3({
                    action: 'chi_ve_tkb_toggle',
                    value: e.target.checked ? 1 : 0,
                  });
                }}
                name="chiVeTkb"
                color="primary"
                size="small"
              />
            }
            style={!khongXepLop ? { opacity: 0.5 } : undefined}
            label={'Tự chuẩn bị danh sách mã lớp'}
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
