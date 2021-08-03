import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { selectTextareaChiVeTkb } from 'redux/xepTkb/selectors';
import { setTextareChiVeTkb } from 'redux/xepTkb/slice';
// mui
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

function ChiVeTkbInput(props) {
  const dispatch = useDispatch();
  const textareaChiVeTkb = useSelector(selectTextareaChiVeTkb);

  return (
    <Tooltip title="Bạn chỉ chọn data nguồn ở B1 và nhập danh sách lớp ở đây, không dùng B2">
      <TextField
        label={'Nhập danh sách lớp học phần'}
        fullWidth
        size="small"
        multiline
        rows={2}
        variant="outlined"
        onChange={(e) => {
          dispatch(setTextareChiVeTkb(e.target.value));
        }}
        value={textareaChiVeTkb}
        style={{ marginBottom: 10, paddingRight: 10, maxWidth: 1510 }}
      />
    </Tooltip>
  );
}

export default ChiVeTkbInput;
