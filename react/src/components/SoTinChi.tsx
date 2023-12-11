import Tooltip from '@mui/material/Tooltip';
import { getTongSoTcJudgement } from '../utils';
import { selectTongSoTcSelected, useTkbStore } from '../zus';
import { COLORS } from '../constants';

function SoTinChi(props: { tongSoTcSelected?: number }) {
  const tongSoTcSelectedB2 = useTkbStore(selectTongSoTcSelected);
  const tongSoTcSelected = props.tongSoTcSelected ?? tongSoTcSelectedB2;
  const judgement = getTongSoTcJudgement(tongSoTcSelected);

  return (
    <Tooltip title={judgement.text}>
      <p style={{ color: judgement.isOk ? COLORS.SUCCESS : COLORS.ERROR, margin: 0, padding: 6 }}>
        {/* TODO: disregard các lớp bị trùng TKB */}
        Số tín chỉ: <b>{tongSoTcSelected}</b>
      </p>
    </Tooltip>
  );
}

export default SoTinChi;
