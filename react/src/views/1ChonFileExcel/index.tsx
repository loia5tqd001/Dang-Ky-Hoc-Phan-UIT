import { Alert } from '@mui/material';
import { selectDataExcel, useTkbStore } from '../../zus';
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
        Xem update 2024 tại{' '}
        <a
          href="https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT?tab=readme-ov-file#c%C3%A1c-update-%E1%BB%9F-phi%C3%AAn-b%E1%BA%A3n-2024"
          target="_blank"
          rel="noreferrer"
        >
          đây
        </a>
      </Alert>
      <Alert
        severity="info"
        color={dataExcel?.lastUpdate ? 'success' : 'info'}
        style={{ fontWeight: 'bold', padding: '5px 10px', marginBottom: 12 }}
        variant="outlined"
      >
        Video hướng dẫn sử dụng script đăng ký nhanh:{' '}
        <a href="https://www.youtube.com/watch?v=DsLUHgX_xzs" target="_blank" rel="noreferrer">
          Xem ngay
        </a>
      </Alert>
    </div>
  );
}

export default Index;
