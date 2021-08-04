import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { useSnackbar } from 'notistack';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { getScriptDkhp } from './utils';

type Props = {
  listMaLop: string[];
};

function ScriptDangKyInput({ listMaLop }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  const script = getScriptDkhp(listMaLop);

  return (
    <Grid item xs={6} style={{ paddingRight: 0 }}>
      {listMaLop.length > 0 ? (
        <Tooltip title={'Click để sao chép, và xem video hướng dẫn ở B1 để biết cách dùng.'}>
          <CopyToClipboard text={script} onCopy={() => enqueueSnackbar('Đã sao chép')}>
            <TextField
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
          </CopyToClipboard>
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
