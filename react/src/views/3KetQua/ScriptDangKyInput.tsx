import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, InputAdornment, InputBaseProps, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { enqueueSnackbar } from 'notistack';
import { useMemo, useState } from 'react';
import { extractListMaLop } from '../../utils';
import { selectPhanLoaiHocTrenTruong, useTkbStore } from '../../zus';
import { getScriptDkhp } from './utils';

const DEFAULT_TOOLTIP = 'Click để sao chép';
const COPIED_TOOLTIP = 'Đã sao chép';

const CustomInputComponent: InputBaseProps['inputComponent'] = ({ inputRef, ...rest }) => (
  <Tooltip title="Xem video hướng dẫn ở B1 để biết cách dùng.">
    <textarea ref={inputRef} style={{ resize: 'vertical' }} {...rest} />
  </Tooltip>
);

function ScriptDangKyInput() {
  const cacLop = useTkbStore(selectPhanLoaiHocTrenTruong);
  const listMaLop = useMemo(() => extractListMaLop(cacLop.flat()), [cacLop]);
  const script = useMemo(() => getScriptDkhp(listMaLop), [listMaLop]);
  const hasLop = listMaLop.length > 0;
  const [isCopying, setIsCopying] = useState(false);
  return (
    <Grid item xs={6} style={{ paddingRight: 0 }}>
      <TextField
        label={'Script đăng ký nhanh'}
        fullWidth
        size="small"
        multiline
        rows={2}
        variant="outlined"
        value={hasLop ? script : 'Chưa có lớp nào'}
        disabled={!hasLop}
        inputProps={{ readOnly: true }}
        InputProps={{
          inputComponent: CustomInputComponent,
          endAdornment: hasLop ? (
            <Tooltip title={isCopying ? COPIED_TOOLTIP : DEFAULT_TOOLTIP}>
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(script).then(
                    () => {
                      setIsCopying(true);
                      setTimeout(() => setIsCopying(false), 3000);
                    },
                    () => {
                      enqueueSnackbar('Không thể sao chép', { variant: 'error' });
                    },
                  );
                }}
                edge="end"
                size="small"
              >
                <ContentCopyIcon color={isCopying ? 'primary' : undefined} />
              </IconButton>
            </Tooltip>
          ) : undefined,
        }}
      />
    </Grid>
  );
}

export default ScriptDangKyInput;
