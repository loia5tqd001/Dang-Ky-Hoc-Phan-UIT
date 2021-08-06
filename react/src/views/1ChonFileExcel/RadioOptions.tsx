import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setLoaiTkb } from 'redux/xepTkb/slice';
import { selectLoaiTkb } from 'redux/xepTkb/selectors';
// mui
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function RadioOptions() {
  const dispatch = useDispatch();
  const loaiTkb = useSelector(selectLoaiTkb);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Nguồn dữ liệu:</FormLabel>
      <RadioGroup
        row
        aria-label="options"
        name="options"
        value={loaiTkb}
        onChange={(e) => dispatch(setLoaiTkb(e.target.value as any))}
      >
        <FormControlLabel
          value="up-tu-file-excel"
          control={<Radio />}
          label="Upload file excel"
          style={{ marginRight: 50, userSelect: 'none' }}
        />
        {/* <FormControlLabel
          value="su-dung-dkhp-uit"
          control={<Radio />}
          label="Sử dụng trang dkhp.uit.edu.vn"
          style={{ marginRight: 50, userSelect: 'none' }}
        /> */}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioOptions;
