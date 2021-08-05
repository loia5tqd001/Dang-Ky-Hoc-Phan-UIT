import React from 'react';
import { useSelector } from 'react-redux';
import { selectFinalDataTkb } from 'redux/xepTkb/selectors';
import sortBy from 'lodash/sortBy';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { setIsChiVeTkb } from 'redux/xepTkb/slice';
import Tooltip from '@material-ui/core/Tooltip';
import { ClassModel } from 'models';
import { calcTongSoTC } from 'utils';
import TrungTkbDialog from './TrungTkbDialog';
import AgGrid from './AgGrid';
import TopInputs from './TopInputs';
import BottomInfo from './BottomInfo';

const actionOptions = {
  normal: 'Hiển thị bình thường',
  onlyOnFilter: 'Chỉ hiển thị môn học trong bộ lọc',
  onlyPicked: 'Chỉ hiển thị những lớp đã pick',
  hidePicked: 'Ẩn những môn học đã pick',
};

function Index(props) {
  const dataTkb = useSelector(selectFinalDataTkb);

  const rowData = React.useMemo(() => {
    const sorted = sortBy(dataTkb, ['KhoaQL', 'MaLop', 'Thu', 'Tiet']);
    return sorted.reduce((acc, cur, index) => {
      if (index === 0) return [{ ...cur, color: 0 }];

      const last = acc[index - 1];
      if (cur.MaMH === last.MaMH) {
        cur = { ...cur, color: last.color };
      } else {
        cur = { ...cur, color: (last.color || 0) + 1 };
      }

      return [...acc, cur];
    }, [] as ClassModel[]);
  }, [dataTkb]);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [lopTrungTkb, setLopTrungTkb] = React.useState({ master: null, slave: null });

  return (
    <div style={{ minWidth: '100%' }}>
      <TopInputs />
      <AgGrid rowData={rowData} setIsDialogOpen={setIsDialogOpen} setLopTrungTkb={setLopTrungTkb} />
      <BottomInfo rowCount={rowData.length} tongSoTC={calcTongSoTC(dataTkb)} />{' '}
      {/* TODO: rowCount khong con chinh xac */}
      <TrungTkbDialog isDialogOpen={isDialogOpen} lopTrungTkb={lopTrungTkb} setIsDialogOpen={setIsDialogOpen} />
    </div>
  );
}

export default Index;
