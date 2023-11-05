import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

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
