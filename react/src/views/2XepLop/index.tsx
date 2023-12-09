import AgGrid from './AgGrid';
import TrungTkbDialog, { TrungTkbDialogContext } from './TrungTkbDialog';

function Index(props) {
  return (
    <div style={{ minWidth: '100%' }}>
      <TrungTkbDialogContext>
        <AgGrid />
        <TrungTkbDialog />
      </TrungTkbDialogContext>
    </div>
  );
}

export default Index;
