import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { getScriptDkhp } from './utils';
// mui
import { useSnackbar } from 'notistack';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function ScriptDangKyInput({ listMaLop, loaiMaLop }) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  const listMaLopString = listMaLop.join('\n');

  return (
    <Grid item xs={5}>
      {listMaLop.length > 0 ? (
        <Tooltip title={'Click để sao chép, và xem video hướng dẫn ở B1 để biết cách dùng.'}>
          <CopyToClipboard
            text={getScriptDkhp(listMaLopString, listMaLopString)}
            onCopy={() => enqueueSnackbar('Đã sao chép')}
          >
            <TextField
              className={classes.textFieldActive}
              label={'Script đăng ký nhanh các lớp ' + loaiMaLop}
              fullWidth
              size="small"
              multiline
              rows={2}
              variant="outlined"
              value={listMaLopString}
              inputProps={{ readOnly: true }}
            />
          </CopyToClipboard>
        </Tooltip>
      ) : (
        <TextField
          label={'Script đăng ký nhanh các lớp ' + loaiMaLop}
          fullWidth
          size="small"
          multiline
          rows={2}
          variant="outlined"
          value={`Chưa chọn lớp ${loaiMaLop} nào`}
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
