import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useSnackbar } from 'notistack';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import DataInput from './DataInput';
import { getDataDkhpScript } from './utils';

function Index(props) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend">
        Hướng dẫn cách lấy dữ liệu từ trang dkhp.uit.edu.vn{' '}
        <i>
          <b>(mỗi bạn sẽ có dữ liệu khác nhau)</b>
        </i>
        :
      </FormLabel>
      <li>
        B1:
        <Tooltip title={'Bấm đi'}>
          <CopyToClipboard text={getDataDkhpScript} onCopy={() => enqueueSnackbar('Đã copy script vào clipboard')}>
            <Button color="primary" style={{ padding: '0 5px', margin: '0 5px' }} variant="outlined">
              copy script
            </Button>
          </CopyToClipboard>
        </Tooltip>
      </li>
      <li>
        B2: Vào trang{' '}
        <Tooltip title={'Tới luôn'}>
          <Link href="https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky" target="_blank" rel="noopener noreferrer">
            https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky
          </Link>
        </Tooltip>
        , <b>sau khi đăng nhập </b> thành công thì mở cửa sổ console lên{' '}
        <i>
          (bằng cách <b>bấm F12 chọn tab Console</b>)
        </i>
        . Bấm <b>Ctrl+V</b> + <b>Enter</b> để dán và thực thi script.
        <i>
          {' '}
          Nếu trên cửa sổ console xuất ra <b>"Copy to clipboard successfully, good luck"</b> có nghĩa là đã lấy dữ liệu
          thành công, còn nếu không có dòng chữ các bạn có thể liên hệ{' '}
          <Tooltip title="Nhờ Lợi giúp">
            <Link href="https://www.messenger.com/t/loia5tqd001" target="_blank" rel="noopener noreferrer">
              messenger.com/t/loia5tqd001
            </Link>
          </Tooltip>{' '}
          để mình support cho nhé.
        </i>
      </li>
      <li>
        B3: Quay lại đây, bấm vào nút <i>PASTE</i> ngay trên ô <b>"Dữ liệu lớp thường"</b>
      </li>
      <li>
        B4: Nếu các bạn có đăng ký môn Anh văn, <b>lặp lại B123</b> với trang{' '}
        <Link href="https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky-anhvan" target="_blank" rel="noopener noreferrer">
          https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky-anhvan
        </Link>{' '}
        và ô <b>"Dữ liệu lớp Anh văn"</b>
      </li>
      <Grid container spacing={2} style={{ margin: '10px 0' }}>
        <DataInput isAnhVan={false} />
        <DataInput isAnhVan={true} />
      </Grid>
      <p>Các bạn có thể xem video hướng dẫn bên dưới để dễ hiểu hơn</p>
    </FormControl>
  );
}

export default Index;

// styles below:

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px 0',
    marginTop: 20,
    '& > *': {
      lineHeight: 2,
    },
  },
}));
