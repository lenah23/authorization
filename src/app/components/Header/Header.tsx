'use client';
import Image from 'next/image';
import logo from '../../assets/images/logo.svg';
import loginIcon from '../../assets/images/login.svg';
import synexis from '../../assets/images/SYNEXIS.svg';
import styles from './Header.module.scss';
import UseHeaderHooks from './Header.hooks';
import { CustomModal, LoginForm } from '../index';

const Header = () => {
  const { openModal, handleClose, handleOpen } = UseHeaderHooks();
  const logedIn = false;

  return (
    <header className={styles['header']}>
      <div className={styles['header__slogan']}>
        <Image src={logo} width={20} height={20} alt='logo' />
        <Image src={synexis} width={85} height={16} alt='synexis' />
      </div>
      {logedIn ? (
        <div className={styles['login-info']}>
          <div className={styles['loggedin-user']}>
            <span className={styles['logged-in-as']}>Logged in as</span>
            <span className={styles['email']}>lenulstep@gmail.com</span>
          </div>
          <div className={styles['login-logout-btn']}>
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
        children={<LoginForm />}
      />
    </header>
  );
};

export default Header;
