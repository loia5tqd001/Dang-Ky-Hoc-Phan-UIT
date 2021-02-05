import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import WarningTwoToneIcon from '@material-ui/icons/WarningTwoTone';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function TrungTkbDialog({ isDialogOpen, setIsDialogOpen, lopTrungTkb }) {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
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
        <Button onClick={() => setIsDialogOpen(false)} color="primary" children="Đã hiểu" />
      </DialogActions>
    </Dialog>
  );
}

export default TrungTkbDialog;
