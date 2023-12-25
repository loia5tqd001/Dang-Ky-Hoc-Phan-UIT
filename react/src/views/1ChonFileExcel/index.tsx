import { Alert, AlertProps } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { tracker } from '../..';
import { selectDataExcel, useTkbStore } from '../../zus';
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
  return (
    <div style={{ maxWidth: 1500 }}>
      <SelectExcelButton />
      {/* {hasAdBlocker && (
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
      )} */}
      {/* 
      https://daa.uit.edu.vn/thong-bao-lich-dkhp-va-tkb-du-kien-hk2-nam-hoc-2023-2024
      https://stackoverflow.com/a/46493867 
      */}
      {/* <MyAlert>
        File Excel HK2 2023-2024:{' '}
        <a
          href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyf8-kMRTo4CllfPA4sjbjxkhGhR1tT7yD1HASjmClqTwwkJBgWRvuxJPIAK8Wdw/pub?output=xlsx"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            tracker.track('[page1] link_excel_hk2_2023_2024_clicked');
          }}
        >
          Tải ngay
        </a>
      </MyAlert> */}
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
      <MyAlert>
        Cảm thấy phần mềm hữu ích?{' '}
        <a
          href="https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            tracker.track('[page1] link_tha_star_ngay_clicked');
          }}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          Thả <StarOutlineIcon style={{ fontSize: 16 }} />
          star
        </a>
      </MyAlert>
    </div>
  );
}

export default Index;
