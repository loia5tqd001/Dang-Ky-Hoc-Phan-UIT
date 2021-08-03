import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { tryParseJson } from './utils';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectDataDkhpPage } from 'redux/xepTkb/selectors';
import { setDataDkhpLopAnhVan, setDataDkhpLopThuong } from 'redux/xepTkb/slice';
// mui
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

function DataInput({ isAnhVan }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState(null);
  const dataDkhpPage = useSelector(selectDataDkhpPage);
  const text = isAnhVan ? dataDkhpPage.lopAnhVan : dataDkhpPage.lopThuong;
  const setText = useCallback(
    (val) => dispatch(isAnhVan ? setDataDkhpLopAnhVan(val) : setDataDkhpLopThuong(val)),
    [dispatch, isAnhVan],
  );
  const classes = useStyles({ active: !!text.trim() });

  const handlePaste = React.useCallback(async () => {
    const clipboardText = await navigator.clipboard.readText();
    const parsedJson = tryParseJson(clipboardText);
    const invalidJson = !parsedJson || !Array.isArray(parsedJson) || parsedJson.some((it) => !it.MaMH);
    if (invalidJson) {
      enqueueSnackbar('Dữ liệu trong clipboard không đúng định dạng. Bạn đã làm theo đúng các bước chưa?', {
        variant: 'error',
      });
    } else {
      const isDataAnhVan = parsedJson.some((it) => it.MaMH.startsWith('EN'));
      if (isDataAnhVan === isAnhVan) {
        setText(clipboardText);
        enqueueSnackbar('Paste dữ liệu thành công', { variant: 'success' });
      } else {
        enqueueSnackbar('Có lẽ bạn đang muốn paste vào ô dữ liệu lớp ' + (isAnhVan ? 'thường' : 'Anh văn'), {
          variant: 'error',
        });
      }
    }
  }, [setText, enqueueSnackbar, isAnhVan]);

  const handleClear = React.useCallback(
    (e) => {
      if (text.trim()) {
        setPopoverAnchorEl(e.currentTarget);
      }
    },
    [text],
  );

  const onClear = React.useCallback(() => {
    setPopoverAnchorEl(null);
    setText('');
    enqueueSnackbar('Xóa dữ liệu thành công', { variant: 'info' });
  }, [setText, enqueueSnackbar]);

  return (
    <Grid item xs={2} className={classes.root}>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        style={{ fontSize: 10, padding: 0, marginRight: 5 }}
        onClick={handlePaste}
      >
        Paste
      </Button>
      <Tooltip title="Xóa dữ liệu">
        <Button
          variant="outlined"
          size="small"
          style={{ color: 'red', borderColor: 'red', fontSize: 10, padding: 0 }}
          onClick={handleClear}
        >
          Clear
        </Button>
      </Tooltip>
      <Popover
        open={!!popoverAnchorEl}
        anchorEl={popoverAnchorEl}
        onClose={() => setPopoverAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Card className={classes.popupCard}>
          <Typography component="h6">Xóa dữ liệu lớp {isAnhVan ? 'Anh văn' : 'thường'}?</Typography>
          <Button size="small" color="primary" onClick={onClear}>
            Đồng ý
          </Button>
        </Card>
      </Popover>
      <TextField
        label={'Dữ liệu lớp ' + (isAnhVan ? 'Anh văn' : 'thường')}
        size="small"
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        value={text}
        margin="none"
        className={classes.textField}
      />
    </Grid>
  );
}

export default DataInput;

// styles below:

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 270,
    '& label': {
      fontWeight: 'bold',
      color: (p) => (p.active ? theme.palette.success.dark : theme.palette.grey['600']),
    },
    '& fieldset': {
      border: (p) => (p.active ? `2px solid ${theme.palette.success.main}` : `1px solid ${theme.palette.grey['600']}`),
    },
  },
  textField: {
    marginTop: 5,
    pointerEvents: 'none',
    transform: (p) => `translateY(${p.active ? 0 : -3}px)`,
    transition: 'transform 0.2s',
  },
  popupCard: {
    padding: '0 5px',
    display: 'flex',
    alignItems: 'center',
    background: '#fefefeef',
    '& h6': {
      fontSize: '1em !important',
      fontWeight: '600',
    },
  },
}));
