import { Theme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import makeStyles from '@mui/styles/makeStyles';
import { calcTongSoTC, getTongSoTcJudgement } from 'utils';
import { useMemo } from 'react';
import { COLORS } from '../../../constants';
import { selectPhanLoaiHocTrenTruong, useTkbStore } from '../../../zus';
import ClassCell from './ClassCell';
import RowHocTrenTruong from './RowHocTrenTruong';
import TableHead from './TableHead';
import { usePhanLoaiHocTrenTruong } from './hooks';
import './styles.css';

export function Buoc3TinChi() {
  const phanLoaiHocTrenTruong = useTkbStore(selectPhanLoaiHocTrenTruong);
  const tongSoTC = useMemo(() => {
    return calcTongSoTC(phanLoaiHocTrenTruong.flat());
  }, [phanLoaiHocTrenTruong]);
  const tinChiJudgement = getTongSoTcJudgement(tongSoTC);
  const classes = useStyles({ tongSoTCWaring: !tinChiJudgement.isOk });

  return (
    <Tooltip title={tinChiJudgement.text} style={{ marginLeft: 'auto' }}>
      <TextField
        className={classes.soTCInput}
        size="small"
        variant="outlined"
        label={'Số tín chỉ'}
        value={tongSoTC}
        inputProps={{ readOnly: true }}
      />
    </Tooltip>
  );
}

function Index() {
  const { rowDataHocTrenTruong, khongHocTrenTruong } = usePhanLoaiHocTrenTruong();

  return (
    <div id="thoi-khoa-bieu">
      <Buoc3TinChi />
      <table>
        <TableHead />
        <tbody>
          {rowDataHocTrenTruong.map((row, index) => (
            <RowHocTrenTruong key={index} row={row} index={index} />
          ))}
          {khongHocTrenTruong.map((lop, index) => (
            <tr key={index}>
              <td colSpan={7} className="cell-class">
                <ClassCell {...lop} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;

const getColor = (isError: boolean) => (isError ? COLORS.ERROR : COLORS.SUCCESS);

const useStyles = makeStyles<Theme, { tongSoTCWaring: boolean }>((theme) => ({
  soTCInput: {
    '& label': {
      color: (p) => `${getColor(p.tongSoTCWaring)} !important`,
    },
    '& fieldset': {
      border: (p) => `1px solid ${getColor(p.tongSoTCWaring)} !important`,
    },
    '& input': {
      color: (p) => `${getColor(p.tongSoTCWaring)} !important`,
      fontWeight: '500',
    },
  },
}));
