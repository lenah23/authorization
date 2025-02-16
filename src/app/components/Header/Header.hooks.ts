'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/app/store/Requests/authApi';
import { useCustomModalHooks } from '../CustomModal/CustomModal.hooks';

const UseHeaderHooks = () => {
  const router = useRouter();
  const { openModal, handleClose, handleOpen } = useCustomModalHooks();
  const [loggedIn, setLoggetIn] = useState<string | null>(
    localStorage.getItem('synexis-access-token')
  );

  const [loginReq, { data, isLoading, isSuccess }] = useLoginMutation();

  const handleLogout = () => {
    localStorage.removeItem('synexis-access-token');
    setLoggetIn('');
    document.cookie = 'synexis-access-token=; max-age=0; path=/';
    router.push('/');
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('synexis-access-token', data?.accessToken);
      document.cookie = `synexis-access-token=${data?.accessToken}; path=/`;
      handleClose();
      setLoggetIn(data?.accessToken);
      router.push('/industries');
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
