import Tooltip from '@mui/material/Tooltip';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getTongSoTcJudgement } from '../utils';
import { selectTongSoTcSelected, useTkbStore } from '../zus';
import { COLORS } from '../constants';
import { sendTrackingEvent } from '../tracking';

function SoTinChi(props: { tongSoTcSelected?: number }) {
  const tongSoTcSelectedB2 = useTkbStore(selectTongSoTcSelected);
  const tongSoTcSelected = props.tongSoTcSelected ?? tongSoTcSelectedB2;
  const judgement = getTongSoTcJudgement(tongSoTcSelected);

  const location = useLocation();
  const locationText = `location: ${location.pathname}`;
  useEffect(() => {
    sendTrackingEvent.common({
      action: 'tong_so_tc_view',
      label: locationText,
      nonInteraction: true,
    });
  }, [locationText]);

  return (
    <Tooltip title={judgement.text}>
      <p
        style={{ color: judgement.isOk ? COLORS.SUCCESS : COLORS.ERROR, margin: 0, padding: 6 }}
        onMouseEnter={() => {
          sendTrackingEvent.common({
            action: 'tong_so_tc_hover',
            label: locationText,
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
