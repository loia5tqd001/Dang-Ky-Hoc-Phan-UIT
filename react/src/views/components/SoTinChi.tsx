import Tooltip from '@mui/material/Tooltip';
import { tracker } from '../..';
import { COLORS } from '../../constants';
import { getTongSoTcJudgement } from '../../utils';
import { selectTongSoTcSelected, useTkbStore } from '../../zus';

function SoTinChi(props: { tongSoTcSelected?: number }) {
  const tongSoTcSelectedB2 = useTkbStore(selectTongSoTcSelected);
  const tongSoTcSelected = props.tongSoTcSelected ?? tongSoTcSelectedB2;
  const judgement = getTongSoTcJudgement(tongSoTcSelected);

  return (
    <Tooltip title={judgement.text}>
      <p
        style={{ color: judgement.isOk ? COLORS.SUCCESS : COLORS.ERROR, margin: 0, padding: 6 }}
        onMouseEnter={() => {
          tracker.track('[so_tc] label_hovered', {
            tongSoTc: tongSoTcSelected,
            ...judgement,
          });
        }}
      >
        {/* TODO: disregard các lớp bị trùng TKB */}
        Số tín chỉ: <b>{tongSoTcSelected}</b>
      </p>
    </Tooltip>
  );
}

export default SoTinChi;
