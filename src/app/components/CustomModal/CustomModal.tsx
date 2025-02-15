'use client';

import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions } from '@mui/material';
import { Button, Loading } from '../index';

interface IProps {
  open: boolean;
  title: string;
  children: ReactNode;
  buttonTitle: string;
  loading?: boolean;
  dialogClassname?: string;
  onClick?: () => void;
  handleClose: () => void;
}

const CustomModal: React.FC<IProps> = (props) => {
  const {
    open,
    title,
    loading,
    children,
    onClick,
    handleClose,
    buttonTitle,
    dialogClassname,
  } = props;

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className={dialogClassname}
      >
        <DialogTitle id='customized-dialog-title'>{title}</DialogTitle>
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
        {onClick && (
          <DialogActions style={{ padding: 0 }}>
            {loading ? (
              <Loading styleProps={{ height: 'auto' }} />
            ) : (
              <Button
                text={buttonTitle}
                onClick={onClick}
                loading={false}
                disabled={false}
              />
            )}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};
export default CustomModal;
