import { Alert, AlertProps } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { tracker } from '../..';
import { selectDataExcel, useTkbStore } from '../../zus';
import SelectExcelButton from './SelectExcelButton';
import VluConnectPanel from 'vlu/VluConnectPanel';
import { getLastUpdateString } from './utils';

function MyAlert({ children, color, ...otherProps }: AlertProps) {
  const dataExcel = useTkbStore(selectDataExcel);
  const lastUpdateString = getLastUpdateString(dataExcel);
  const finalColor = color ?? (lastUpdateString ? 'success' : 'info');
  return (
    <Alert
      severity="info"
      color={finalColor}
      style={{ fontWeight: 'bold', padding: '5px 10px', marginBottom: 12 }}
      variant="outlined"
      {...otherProps}
    >
      {children}
    </Alert>
  );
}

function Index() {
  return (
    <div style={{ maxWidth: 1500 }}>
      <VluConnectPanel />
      <SelectExcelButton />
      <MyAlert className="animated flash">
        Hướng dẫn sử dụng:{' '}
        <a
          href="https://regist.vlu.edu.vn/"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            tracker.track('[page1] link_usage_guide_clicked');
          }}
        >
          Mở cổng đăng ký VLU
        </a>
      </MyAlert>
      <MyAlert>
        Cách lấy token: Đăng nhập{' '}
        <a href="https://regist.vlu.edu.vn/" target="_blank" rel="noreferrer">
          regist.vlu.edu.vn
        </a>{' '}
        → Bấm F12 (Console) → dán{' '}
        <code style={{ background: '#eee', padding: '2px 6px', borderRadius: 4 }}>
          JSON.parse(localStorage.getItem('authorizationData')).Token
        </code>{' '}
        → copy chuỗi token và dán vào ô bên trên.
      </MyAlert>
      <MyAlert>
        Nếu API không có dữ liệu (đợt chưa mở), bạn vẫn có thể dùng tính năng upload Excel để xem TKB thử nghiệm.{' '}
        <a
          href="https://daa.uit.edu.vn/thong-bao-lich-dkhp-va-tkb-du-kien-hk2-nam-hoc-2023-2024"
          target="_blank"
          rel="noreferrer"
        >
          Xem mẫu
        </a>
      </MyAlert>
    </div>
  );
}

export default Index;
