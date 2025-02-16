'use client';

import React, { useState } from 'react';
import Input from '../Input/Input';
import searchIcon from '../../assets/images/search-icon.svg';
import styles from './Industries.module.scss';

interface AutocompleteInputProps {
  options: { id: number; name: string }[];
  label?: string;
  onChange?: (value: string) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  options,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  console.log(options, 'aaaaaaaaaaaaaaaaaaadsdaewd');

  return (
    <div className={styles['autocomplete-container']}>
      <Input
        icon={searchIcon}
        type='text'
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && (
        <div className={styles['options-container']}>
          {options?.map((option, index) => (
            <div key={index} className={styles['option-item']}>
              {option?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteInput;
