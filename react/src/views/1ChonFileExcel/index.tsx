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
      <MyAlert className="animated flash">
        Câu hỏi thường gặp:{' '}
        <a
          href="https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT/issues/21"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            tracker.track('[page1] link_faq_clicked');
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
