'use client';

import { ChangeEvent } from 'react';
import Image from 'next/image';
import styles from './Input.module.scss';

interface InputProps {
  label?: string;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  icon?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick: any
}

const Input = ({
  label,
  value,
  onChange,
  type = 'text',
  icon,
  onFocus,
  onBlur,
  onClick,
}: InputProps) => {
  return (
    <div className={styles['input-container']} onClick={onClick}>
      {label && <label className={styles['input-label']}>{label}</label>}
      <div className={styles['input-wrapper']}>
        {icon && (
          <Image
            src={icon}
            alt='icon'
            className={styles['input-icon']}
            width={12}
            height={12}
          />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={styles['input-field']}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default Input;
