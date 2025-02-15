import { useState } from 'react';

export const useCustomModalHooks = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return {
    openModal,
    handleClose,
    handleOpen,
  };
};
