import sortBy from 'lodash/sortBy';
import { ClassModel } from 'models';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFinalDataTkb } from 'redux/xepTkb/selectors';
import AgGrid from './AgGrid';
import TopInputs from './TopInputs';
import TrungTkbDialog from './TrungTkbDialog';

export type TTrungTkb = {
  master: ClassModel | null;
  slave: ClassModel | null;
};

function Index(props) {
  const dataTkb = useSelector(selectFinalDataTkb);

  const rowData = React.useMemo(() => {
    return sortBy(dataTkb, ['KhoaQL', 'MaLop', 'Thu', 'Tiet']);
  }, [dataTkb]);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [lopTrungTkb, setLopTrungTkb] = React.useState<TTrungTkb>({ master: null, slave: null });

  return (
    <div style={{ minWidth: '100%' }}>
      <TopInputs />
      <AgGrid rowData={rowData} setIsDialogOpen={setIsDialogOpen} setLopTrungTkb={setLopTrungTkb} />
      <TrungTkbDialog isDialogOpen={isDialogOpen} lopTrungTkb={lopTrungTkb} setIsDialogOpen={setIsDialogOpen} />
    </div>
  );
}

export default Index;
