import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { selectIsChiVeTkb } from 'redux/xepTkb/selectors';
import { setIsChiVeTkb } from 'redux/xepTkb/slice';
// mui
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import TopInputs from './TopInputs';
import ChiVeTkbInput from './ChiVeTkbInput';
import ThoiKhoaBieuTable from './ThoiKhoaBieuTable';

function Index() {
  const dispatch = useDispatch();
  const isChiVeTkb = useSelector(selectIsChiVeTkb);

  return (
    <div style={{ height: '100%', minWidth: '90%' }}>
      <FormGroup row style={{ marginBottom: 5 }}>
        <Tooltip title="Tick chọn khi bạn không dùng chức năng Xếp Lớp ở Bước 2">
          <FormControlLabel
            control={
              <Checkbox
                checked={isChiVeTkb}
                onChange={(e) => dispatch(setIsChiVeTkb(e.target.checked))}
                name="checkedA"
                color="primary"
                size="small"
              />
            }
            style={
              !isChiVeTkb
                ? {
                    opacity: 0.5,
                    transform: 'scale(0.8)',
                    transformOrigin: 'left center',
                    fontStyle: 'italic',
                  }
                : null
            }
            label={'Chỉ vẽ TKB, không dùng tool Xếp Lớp' + (isChiVeTkb ? '' : '?')}
          />
        </Tooltip>
      </FormGroup>
      <Collapse in={!isChiVeTkb}>
        <TopInputs />
      </Collapse>
      <Collapse in={isChiVeTkb}>
        <ChiVeTkbInput />
      </Collapse>
      <ThoiKhoaBieuTable />
    </div>
  );
}

export default Index;
