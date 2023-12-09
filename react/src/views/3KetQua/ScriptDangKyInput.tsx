import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { enqueueSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { selectPhanLoaiHocTrenTruong } from '../../redux/xepTkb/selectors';
import { extractListMaLop } from '../../utils';
import { getScriptDkhp } from './utils';

function ScriptDangKyInput() {
  const cacLop = useSelector(selectPhanLoaiHocTrenTruong);
  const listMaLop = useMemo(() => extractListMaLop(cacLop.flat()), [cacLop]);
  const script = useMemo(() => getScriptDkhp(listMaLop), [listMaLop]);

  return (
    <Grid item xs={6} style={{ paddingRight: 0 }}>
      {listMaLop.length > 0 ? (
        <Tooltip title={'Click để sao chép, và xem video hướng dẫn ở B1 để biết cách dùng.'}>
          <TextField
            onClick={() => {
              navigator.clipboard.writeText(script).then(
                () => {
                  enqueueSnackbar('Đã sao chép', { variant: 'success' });
                },
                () => {
                  enqueueSnackbar('Không thể sao chép', { variant: 'error' });
                },
              );
            }}
            label={'Script đăng ký nhanh'}
            fullWidth
            size="small"
            multiline
            rows={2}
            variant="outlined"
            value={script}
            inputProps={{ readOnly: true }}
          />
        </Tooltip>
      ) : (
        <TextField
          label={'Script đăng ký nhanh'}
          fullWidth
          size="small"
          multiline
          rows={2}
          variant="outlined"
          value={`Chưa có lớp nào`}
          disabled
        />
      )}
    </Grid>
  );
}

export default ScriptDangKyInput;
