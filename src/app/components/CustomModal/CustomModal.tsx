'use client';

import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

interface IProps {
  open: boolean;
  title: string;
  children: ReactNode;
  dialogClassname?: string;
  handleClose: () => void;
}

const CustomModal: React.FC<IProps> = (props) => {
  const { open, title, children, handleClose, dialogClassname } = props;

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className={dialogClassname}
      >
        <DialogTitle id='customized-dialog-title' style={{ color: 'white' }}>
          {title}
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: '14px',
            top: '10px',
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </>
  );
};
export default CustomModal;
