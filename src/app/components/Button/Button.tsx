'use client';

import { Loading } from '../index';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  loading: boolean;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset';
}

const Button = ({
  text,
  onClick,
  disabled,
  loading = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles['button']}
      type={type}
    >
      {loading ? <Loading /> : text}
    </button>
  );
};

export default Button;
