'use client';
import styles from './Button.module.scss';
import { Loading } from '../index';

interface ButtonProps {
  text: string;
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

const Button = ({ text, onClick, disabled, loading = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles['button']}>
      {loading ? <Loading /> : text}
    </button>
  );
};

export default Button;
