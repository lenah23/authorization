'use client';

import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
}

const Input = ({
  label,
  value,
  onChange,
  placeholder = 'Enter text...',
  type = 'text',
}: InputProps) => {
  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles['input-field']}
      />
    </div>
  );
};

export default Input;
