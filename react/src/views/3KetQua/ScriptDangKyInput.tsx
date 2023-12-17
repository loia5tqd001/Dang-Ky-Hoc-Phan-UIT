import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton, InputBaseProps, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { enqueueSnackbar } from 'notistack';
import { useMemo, useState } from 'react';
import { extractListMaLop } from '../../utils';
import { selectIsChiVeTkb, selectPhanLoaiHocTrenTruong, selectTextareaChiVeTkb, useTkbStore } from '../../zus';
import { sendTrackingEvent } from '../../tracking';
import { getScriptDkhp } from './utils';

const DEFAULT_TOOLTIP = 'Click để sao chép';
const COPIED_TOOLTIP = 'Đã sao chép';

const CustomInputComponent: InputBaseProps['inputComponent'] = ({ inputRef, title, ...rest }) => (
  <Tooltip title="Xem video hướng dẫn ở B1 để biết cách dùng.">
    <textarea ref={inputRef} style={{ resize: 'vertical' }} {...rest} />
  </Tooltip>
);

const CustomInputComponent2: InputBaseProps['inputComponent'] = ({ inputRef, title, ...rest }) => {
  const khongXepLop = useTkbStore(selectIsChiVeTkb);
  return (
    <Tooltip title={khongXepLop ? 'Mỗi mã lớp một hàng, hoặc cách nhau bằng khoảng trắng, hoặc dấu phẩy' : ''}>
      <textarea ref={inputRef} style={{ resize: 'vertical' }} {...rest} />
    </Tooltip>
  );
};

const useCommon = () => {
  const cacLop = useTkbStore(selectPhanLoaiHocTrenTruong);
  const listMaLop = useMemo(() => extractListMaLop(cacLop.flat()), [cacLop]);
  const script = useMemo(() => getScriptDkhp(listMaLop), [listMaLop]);
  const hasLop = listMaLop.length > 0;

  const isChiVeTkb = useTkbStore(selectIsChiVeTkb);
  const textareaChiVeTkb = useTkbStore(selectTextareaChiVeTkb);

  const dsLopInputValue = (() => {
    if (isChiVeTkb) return textareaChiVeTkb;
    if (!hasLop) return 'Chưa có lớp nào';
    return listMaLop.join(',');
  })();

  const scriptInputValue = (() => {
    if (!hasLop) return 'Chưa có lớp nào';
    return script;
  })();

  return {
    hasLop,
    isChiVeTkb,
    dsLopInputValue,
    scriptInputValue,
  };
};

export function ScriptDangKyInput() {
  const [isCopying, setIsCopying] = useState(false);
  const { hasLop, scriptInputValue } = useCommon();
  return (
    <Grid item xs={6} style={{ paddingRight: 0 }}>
      <TextField
        label={'Script đăng ký nhanh'}
        fullWidth
        size="small"
        multiline
        rows={2}
        variant="outlined"
        value={scriptInputValue}
        disabled={!hasLop}
        inputProps={{ readOnly: true }}
        InputProps={{
          inputComponent: CustomInputComponent,
          endAdornment: hasLop ? (
            <Tooltip title={isCopying ? COPIED_TOOLTIP : DEFAULT_TOOLTIP}>
              <IconButton
                onClick={() => {
                  sendTrackingEvent.page3({
                    action: 'script_copy_btn_click',
                  });
                  navigator.clipboard.writeText(scriptInputValue).then(
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

export function DanhSachLopInput() {
  const setTextareChiVeTkb = useTkbStore((s) => s.setTextareChiVeTkb);
  const { hasLop, dsLopInputValue, isChiVeTkb } = useCommon();
  const useToolXepLop = !isChiVeTkb;

  return (
    <Grid item xs={6}>
      {/* TODO: refactor the mess */}

      <TextField
        label="Danh sách mã lớp"
        fullWidth
        size="small"
        multiline
        inputProps={{ readOnly: useToolXepLop, style: { resize: 'vertical' } }}
        rows={2}
        variant="outlined"
        onChange={(e) => {
          setTextareChiVeTkb(e.target.value);
        }}
        value={dsLopInputValue}
        disabled={useToolXepLop && !hasLop}
        InputProps={{
          inputComponent: CustomInputComponent2,
          endAdornment:
            useToolXepLop && hasLop ? (
              <Tooltip title={'Chia sẻ TKB'}>
                <IconButton
                  edge="end"
                  size="small"
                  onClick={() => {
                    sendTrackingEvent.page3({
                      action: 'chia_se_tkb_btn_click',
                    });
                    const newUrl =
                      window.location.origin + window.location.pathname + '?self_selected=' + dsLopInputValue;
                    navigator.clipboard.writeText(newUrl);
                    window.open(newUrl, Math.random()?.toString());
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            ) : null,
        }}
      />
    </Grid>
  );
}

export default ScriptDangKyInput;
