import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectDataExcel, selectLoaiTkb } from 'redux/xepTkb/selectors';
import { setLoaiTkb } from 'redux/xepTkb/reducer';
// components
import RadioOptions from './RadioOptions';
import SelectExcelButton from './TabsPanel/SelectExcelButton';
import DkhpOptionPage from './TabsPanel/DkhpOptionPage';
import VideoInstruction from './VideoInstruction';
import Collapse from '@material-ui/core/Collapse';

function Index(props) {
  const dispatch = useDispatch();
  const loaiTkb = useSelector(selectLoaiTkb);
  const dataExcel = useSelector(selectDataExcel);

  // for better UX: Chuyển radio về "mặc định"
  // nếu người dùng đã chọn vô radio "tự upload" nhưng lại chưa upload
  React.useEffect(() => {
    if (loaiTkb === 'up-tu-file-excel' && dataExcel.data === null) {
      dispatch(setLoaiTkb('mac-dinh'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div style={{ maxWidth: 1500 }}>
      <RadioOptions />
      <Collapse in={loaiTkb === 'up-tu-file-excel'}>
        <SelectExcelButton />
      </Collapse>
      <Collapse in={loaiTkb === 'su-dung-dkhp-uit'}>
        <DkhpOptionPage />
      </Collapse>
      <VideoInstruction />
    </div>
  );
}

export default Index;
