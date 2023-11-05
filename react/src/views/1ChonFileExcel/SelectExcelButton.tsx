import React, { ChangeEventHandler } from 'react';
import XLSX from 'xlsx';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectDataExcel } from 'redux/xepTkb/selectors';
import { setDataExcel } from 'redux/xepTkb/slice';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { enqueueSnackbar } from 'notistack';
import { arrayToTkbObject, sheetJSFT, toDateTimeString } from './utils';

const Bold = ({ children }) => <b style={{ marginLeft: 5 }}>{children}</b>;

function SelectExcelButton() {
  const dispatch = useDispatch();
  const dataExcel = useSelector(selectDataExcel);
  const classes = useStyles();

  const handleUploadFileExcel = React.useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      reader.onload = (e) => {
        const bstr = e?.target?.result;
        const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
        const wsLyThuyet = wb.Sheets[wb.SheetNames[0]];
        const wsThucHanh = wb.Sheets[wb.SheetNames[1]];
        const dataLyThuyet = XLSX.utils.sheet_to_json<any[][]>(wsLyThuyet, { header: 1 });
        const dataThucHanh = XLSX.utils.sheet_to_json<any[][]>(wsThucHanh, { header: 1 });
        const dataInArray = [...dataLyThuyet, ...dataThucHanh].filter(
          (row) => typeof row[0] === 'number', // những row có cột 0 là STT (STT là number) thì mới là data ta cần
        );
        if (dataInArray.length) {
          dispatch(
            setDataExcel({
              data: dataInArray.map((array) => arrayToTkbObject(array)),
              fileName: file.name,
              lastUpdate: toDateTimeString(new Date()),
            }),
          );
          enqueueSnackbar(
            <>
              Upload file thành công <Bold>{file.name}</Bold>
            </>,
            {
              variant: 'success',
            },
          );
        } else {
          enqueueSnackbar('Không đúng định dạng file của trường', {
            variant: 'error',
          });
        }
      };
      if (rABS) reader.readAsBinaryString(file);
      else reader.readAsArrayBuffer(file);
    },
    [dispatch],
  );

  return (
    <Box mt={1} mb={2}>
      {/* File uploader with material-ui: https://stackoverflow.com/a/54043619/9787887*/}
      <Tooltip title={dataExcel?.fileName || 'Chưa upload file'}>
        <Button
          variant="outlined"
          color="primary"
          className={dataExcel?.lastUpdate ? classes.button : undefined}
          component="label"
        >
          {dataExcel?.lastUpdate ? (
            <>
              <span>Đã upload file vào: </span> <Bold>{dataExcel.lastUpdate}</Bold>
            </>
          ) : (
            'Tải file excel lên'
          )}
          <input type="file" style={{ display: 'none' }} accept={sheetJSFT} onChange={handleUploadFileExcel} />
        </Button>
      </Tooltip>
      <span style={{ marginLeft: '10px' }}>
        Ví dụ file excel:{' '}
        <a href="https://daa.uit.edu.vn/thongbao/thong-bao-ke-hoach-dkhp-va-tkb-du-kien-hk1-nh2023-2024">
          https://daa.uit.edu.vn/thongbao/thong-bao-ke-hoach-dkhp-va-tkb-du-kien-hk1-nh2023-2024
        </a>
      </span>
    </Box>
  );
}

export default SelectExcelButton;

// styles below:

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.success.main,
    borderColor: theme.palette.success.light,
    '&:hover': {
      borderColor: theme.palette.success.main,
    },
  },
}));
