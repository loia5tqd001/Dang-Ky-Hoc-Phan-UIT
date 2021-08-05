import Collapse from '@material-ui/core/Collapse';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDataDkhpPage, selectLoaiTkb } from 'redux/xepTkb/selectors';
import { setLoaiTkb } from 'redux/xepTkb/slice';

import RadioOptions from './RadioOptions';
import DkhpOptionPage from './TabsPanel/DkhpOptionPage';
import SelectExcelButton from './TabsPanel/SelectExcelButton';
import VideoInstruction from './VideoInstruction';

function Index(props) {
  const dispatch = useDispatch();
  const loaiTkb = useSelector(selectLoaiTkb);
  const dataDkhpPage = useSelector(selectDataDkhpPage);

  // for better UX: Chuyển radio về "Up file excel"
  // nếu người dùng đã chọn vô radio "lấy từ trang đkhp" nhưng lại chưa lấy được data
  React.useEffect(() => {
    if (loaiTkb === 'su-dung-dkhp-uit' && dataDkhpPage.lopThuong + dataDkhpPage.lopAnhVan === '') {
      dispatch(setLoaiTkb('up-tu-file-excel'));
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
