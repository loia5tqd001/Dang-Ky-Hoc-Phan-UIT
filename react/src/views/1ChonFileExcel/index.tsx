import Collapse from '@material-ui/core/Collapse';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectLoaiTkb } from 'redux/xepTkb/selectors';

import RadioOptions from './RadioOptions';
import DkhpOptionPage from './TabsPanel/DkhpOptionPage';
import SelectExcelButton from './TabsPanel/SelectExcelButton';
import VideoInstruction from './VideoInstruction';

function Index(props) {
  const loaiTkb = useSelector(selectLoaiTkb);

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
