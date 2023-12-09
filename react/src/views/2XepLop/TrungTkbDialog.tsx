import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import constate from 'constate';
import React from 'react';
import { ClassModel } from '../../models';

export type TTrungTkb = {
  master: ClassModel | null;
  slave: ClassModel | null;
};

export const [TrungTkbDialogContext, useTrungTkbDialogContext] = constate(() => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [lopTrungTkb, setLopTrungTkb] = React.useState<TTrungTkb>({ master: null, slave: null });

  const openTrungTkbDialog = React.useCallback((trungTkbData: TTrungTkb) => {
    setLopTrungTkb(trungTkbData);
    setIsDialogOpen(true);
  }, []);

  const closeDialog = React.useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  return { isDialogOpen, lopTrungTkb, openTrungTkbDialog, closeDialog };
});

function TrungTkbDialog() {
  const { isDialogOpen, closeDialog, lopTrungTkb } = useTrungTkbDialogContext();
  return (
    <Dialog
      open={isDialogOpen}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" color="error">
        <Box display="flex" alignItems="center">
          <WarningTwoToneIcon color="error" style={{ marginRight: 10 }} /> Trùng thời khóa biểu
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Không thể chọn lớp <br />
          <b>{lopTrungTkb.master?.MaLop}</b> -{' '}
          <b>
            Thứ {lopTrungTkb.master?.Thu} Tiết {lopTrungTkb.master?.Tiet}
          </b>
          <br />
          vì bị trùng lịch với lớp đã chọn <br />
          <b>{lopTrungTkb.slave?.MaLop}</b> -{' '}
          <b>
            Thứ {lopTrungTkb.slave?.Thu} Tiết {lopTrungTkb.slave?.Tiet}
          </b>
          <br />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary" children="Đã hiểu" />
      </DialogActions>
    </Dialog>
  );
}

export default TrungTkbDialog;
