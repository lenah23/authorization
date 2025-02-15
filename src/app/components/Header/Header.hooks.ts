import { useCustomModalHooks } from '../CustomModal/CustomModal.hooks';

const UseHeaderHooks = () => {
  const { openModal, handleClose, handleOpen } = useCustomModalHooks();

  return { openModal, handleClose, handleOpen };
};

export default UseHeaderHooks;
