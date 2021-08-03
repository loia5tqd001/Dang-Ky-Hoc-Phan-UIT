import React from 'react';
import { arrayToTkbObject, sheetJSFT, toDateTimeString } from '../utils';
import XLSX from 'xlsx';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setDataExcel } from 'redux/xepTkb/reducer';
import { selectLoaiTkb, selectDataExcel } from 'redux/xepTkb/selectors';
// mui
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

function SelectExcelButton() {
  const dispatch = useDispatch();
  const loaiTkb = useSelector(selectLoaiTkb);
  const dataExcel = useSelector(selectDataExcel);

  const handleUploadFileExcel = React.useCallback(
    (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      reader.onload = (e) => {
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
        const wsLyThuyet = wb.Sheets[wb.SheetNames[0]];
        const wsThucHanh = wb.Sheets[wb.SheetNames[1]];
        const dataLyThuyet = XLSX.utils.sheet_to_json(wsLyThuyet, { header: 1 });
        const dataThucHanh = XLSX.utils.sheet_to_json(wsThucHanh, { header: 1 });
        const dataInArray = [...dataLyThuyet, ...dataThucHanh].filter(
          (row) => typeof row[0] === 'number', // những row có cột 0 là STT (STT là number) thì mới là data ta cần
        );
        dispatch(
          setDataExcel({
            data: dataInArray.map((array) => arrayToTkbObject(array)),
            fileName: file.name,
            lastUpdate: toDateTimeString(new Date()),
          }),
        );
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
          component="label"
          disabled={loaiTkb === 'mac-dinh'}
        >
          {dataExcel?.lastUpdate
            ? 'Đã upload file. Update: ' + dataExcel.lastUpdate
            : 'Tải file excel lên'}
          <input
            type="file"
            style={{ display: 'none' }}
            accept={sheetJSFT}
            onChange={handleUploadFileExcel}
          />
        </Button>
      </Tooltip>
    </Box>
  );
}

export default SelectExcelButton;
