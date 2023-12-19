import { Alert, AlertProps, Button } from '@mui/material';
import { tracker } from '../..';
import { selectDataExcel, useTkbStore, useUtilsStore } from '../../zus';
import SelectExcelButton from './SelectExcelButton';

function MyAlert({ children, color, ...otherProps }: AlertProps) {
  const dataExcel = useTkbStore(selectDataExcel);
  const finalColor = color ?? (dataExcel?.lastUpdate ? 'success' : 'info');
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
  const hasAdBlocker = useUtilsStore((s) => s.hasAdBlocker);

  return (
    <div style={{ maxWidth: 1500 }}>
      <SelectExcelButton />
      {hasAdBlocker && (
        <MyAlert
          severity="warning"
          color="warning"
          variant="standard"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => {
                tracker.track('[page1] btn_confirm_close_adblock_clicked');
                window.location.reload();
              }}
              style={{ fontWeight: 'bold' }}
            >
              Đã tắt
            </Button>
          }
        >
          Tool ĐKHP UIT vẫn sẽ sử dụng được nhưng nó sẽ hoạt động mượt mà hơn nếu bạn tạm thời tắt AdBlocker!
        </MyAlert>
      )}
      <MyAlert>
        Update 2024:{' '}
        <a
          href="https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT?tab=readme-ov-file#c%C3%A1c-update-%E1%BB%9F-phi%C3%AAn-b%E1%BA%A3n-2024"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            tracker.track('[page1] link_2024_update_clicked');
          }}
        >
          Xem ngay
        </a>
      </MyAlert>
      <MyAlert>
        Video cách dùng script đăng ký nhanh:{' '}
        <a
          href="https://www.youtube.com/watch?v=DsLUHgX_xzs"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            tracker.track('[page1] link_script_instruction_video_clicked');
          }}
        >
          Xem ngay
        </a>
      </MyAlert>
    </div>
  );
}

export default Index;
