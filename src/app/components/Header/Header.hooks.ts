import { useEffect, useState } from 'react';
import { useCustomModalHooks } from '../CustomModal/CustomModal.hooks';
import { useLoginMutation } from '@/app/store/Requests/authApi';

const UseHeaderHooks = () => {
  const { openModal, handleClose, handleOpen } = useCustomModalHooks();
  const [loggedIn, setLoggetIn] = useState(
    localStorage.getItem('synexis-access-token')
  );

  const [loginReq, { data, isLoading, isSuccess }] = useLoginMutation();

  const handleLogout = () => {
    localStorage.removeItem('synexis-access-token');
    setLoggetIn('');
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('synexis-access-token', data?.accessToken);
      document.cookie = `synexis-access-token=${data?.accessToken}; path=/`;
      handleClose();
      setLoggetIn(data?.accessToken);
    }
  }, [isSuccess]);

  return {
    handleLogout,
    setLoggetIn,
    handleClose,
    handleOpen,
    loginReq,
    loggedIn,
    isLoading,
    openModal,
  };
};

export default UseHeaderHooks;
