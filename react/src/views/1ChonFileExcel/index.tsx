import { Alert } from '@mui/material';
import { selectDataExcel, useTkbStore } from '../../zus';
import { trackEvent } from '../../tracking';
import SelectExcelButton from './SelectExcelButton';

function Index() {
  const dataExcel = useTkbStore(selectDataExcel);

  return (
    <div style={{ maxWidth: 1500 }}>
      <SelectExcelButton />
      <Alert
        severity="info"
        color={dataExcel?.lastUpdate ? 'success' : 'info'}
        style={{ fontWeight: 'bold', padding: '5px 10px', marginBottom: 12 }}
        variant="outlined"
      >
        Update 2024:{' '}
        <a
          href="https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT?tab=readme-ov-file#c%C3%A1c-update-%E1%BB%9F-phi%C3%AAn-b%E1%BA%A3n-2024"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            trackEvent.page1({
              action: '2024_update_link_click',
            });
          }}
        >
          Xem ngay
        </a>
      </Alert>
      <Alert
        severity="info"
        color={dataExcel?.lastUpdate ? 'success' : 'info'}
        style={{ fontWeight: 'bold', padding: '5px 10px', marginBottom: 12 }}
        variant="outlined"
      >
        Video cách dùng script đăng ký nhanh:{' '}
        <a
          href="https://www.youtube.com/watch?v=DsLUHgX_xzs"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            trackEvent.page1({
              action: 'script_instruction_video_link_click',
            });
          }}
        >
          Xem ngay
        </a>
      </Alert>
    </div>
  );
}

export default Index;
