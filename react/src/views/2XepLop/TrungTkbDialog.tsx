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
import { ClassModel } from '../../types';
import { sendTrackingEvent } from '../../tracking';

export type TTrungTkb = {
  existing: ClassModel;
  new: ClassModel[];
};

export const [TrungTkbDialogContext, useTrungTkbDialogContext] = constate(() => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [trungTkbs, setTrungTkbs] = React.useState<TTrungTkb[]>([]);

  const openTrungTkbDialog = React.useCallback((trungTkbData: TTrungTkb[]) => {
    setTrungTkbs(trungTkbData);
    setIsDialogOpen(true);
  }, []);

  const closeDialog = React.useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  return { isDialogOpen, trungTkbs, openTrungTkbDialog, closeDialog };
});

function TrungTkbDialog() {
  const { isDialogOpen, closeDialog, trungTkbs } = useTrungTkbDialogContext();
  React.useEffect(() => {
    if (isDialogOpen) {
      sendTrackingEvent.page2({
        action: 'trung_tkb_dialog_open',
      });
    }
  }, [isDialogOpen]);
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
          Không thể chọn lớp
          {trungTkbs.map((trungTkb) => (
            // TODO: highlight in the grid to better indicate the conflict
            <>
              <br />
              {trungTkb.new.map((lop) => (
                <>
                  <b>{lop.TenMH}</b> - <b>{lop.MaLop}</b> -{' '}
                  <b>
                    Thứ {lop.Thu} Tiết {lop.Tiet}
                  </b>
                  <br />
                </>
              ))}
              bị trùng lịch với <br />
              <b>{trungTkb.existing.TenMH}</b> - <b>{trungTkb.existing.MaLop}</b> -{' '}
              <b>
                Thứ {trungTkb.existing.Thu} Tiết {trungTkb.existing.Tiet}
              </b>
              <br />
            </>
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary" children="Đã hiểu" />
      </DialogActions>
    </Dialog>
  );
}

export default TrungTkbDialog;
