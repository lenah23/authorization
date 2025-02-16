'use client';

import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';
import searchIcon from '../../assets/images/search-icon.svg';
import styles from './Industries.module.scss';

interface AutocompleteInputProps {
  options: { id: number; name: string }[];
  label?: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  options,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = options.filter((option) =>
        option.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, options]);


  return (
    <div className={styles['autocomplete-container']}>
      <Input
        icon={searchIcon}
        type='text'
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {filteredOptions && isFocused && (
        <div className={styles['options-container']}>
          {filteredOptions?.map((option, index) => (
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
