'use client';

import Image from 'next/image';
import { CustomModal, LoginForm } from '../index';
import UseHeaderHooks from './Header.hooks';
import logo from '../../assets/images/logo.svg';
import loginIcon from '../../assets/images/login.svg';
import synexis from '../../assets/images/SYNEXIS.svg';
import styles from './Header.module.scss';

const Header = () => {
  const {
    handleLogout,
    handleClose,
    handleOpen,
    loginReq,
    loggedIn,
    isLoading,
    openModal,
  } = UseHeaderHooks();

  return (
    <header className={styles['header']}>
      <div className={styles['header__slogan']}>
        <Image src={logo} width={20} height={20} alt='logo' />
        <Image src={synexis} width={85} height={16} alt='synexis' />
      </div>
      {loggedIn ? (
        <div className={styles['login-info']}>
          <div className={styles['loggedin-user']}>
            <span className={styles['logged-in-as']}>Logged in as</span>
            <span className={styles['email']}>lenulstep@gmail.com</span>
          </div>
          <div className={styles['login-logout-btn']} onClick={handleLogout}>
            <Image src={loginIcon} width={14} height={14} alt='loginIcon' />
            <span className={styles['login-logout-text']}>Log Out</span>
          </div>
        </div>
      ) : (
        <div
          className={styles['login-logout-btn']}
          onClick={() => handleOpen()}
        >
          <Image src={loginIcon} width={14} height={14} alt='loginIcon' />
          <span className={styles['login-logout-text']}>Log In</span>
        </div>
      )}
      <CustomModal
        open={openModal}
        title={'Login'}
        handleClose={handleClose}
        children={<LoginForm loginReq={loginReq} isLoading={isLoading} />}
      />
    </header>
  );
};

export default Header;
