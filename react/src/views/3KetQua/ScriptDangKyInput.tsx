import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import makeStyles from '@mui/styles/makeStyles';
import { enqueueSnackbar } from 'notistack';
import { getScriptDkhp } from './utils';

type Props = {
  listMaLop: string[];
};

function ScriptDangKyInput({ listMaLop }: Props) {
  const classes = useStyles();

  const script = getScriptDkhp(listMaLop);

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
            className={classes.textFieldActive}
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

// styles below:

const useStyles = makeStyles((theme) => ({
  textFieldActive: {
    '& label': {
      color: `${theme.palette.error.main} !important`,
    },
    '& fieldset': {
      border: `1px solid red !important`,
    },
    '& input': {
      color: `${theme.palette.error.main} !important`,
      fontWeight: '500',
    },
  },
}));
