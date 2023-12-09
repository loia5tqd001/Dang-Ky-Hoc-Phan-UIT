import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import { selectTongSoTcSelected } from 'redux/xepTkb/selectors';
import { getTongSoTcJudgement } from '../../../utils';
import { COLORS } from '../../../constants';

function SoTinChi() {
  const tongSoTcSelected = useSelector(selectTongSoTcSelected);
  const judgement = getTongSoTcJudgement(tongSoTcSelected);

  return (
    <Tooltip title={judgement.text}>
      <p style={{ color: judgement.isOk ? COLORS.SUCCESS : COLORS.ERROR, margin: 0, padding: 6 }}>
        Số tín chỉ đã chọn: <b>{tongSoTcSelected}</b>
      </p>
    </Tooltip>
  );
}

export default SoTinChi;
