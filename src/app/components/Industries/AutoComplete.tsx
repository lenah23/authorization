'use client';

import React from 'react';
import Input from '../Input/Input';
import searchIcon from '../../assets/images/search-icon.svg';
import UseIndustriesHooks from './Industries.hooks';
import styles from './Industries.module.scss';

interface AutocompleteInputProps {
  options: { id: number; name: string }[];
  label?: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ options }) => {
  const {
    isFocused,
    filteredOptions,
    selectedIndustries,
    handleRemoveIndustry,
    handleItemClick,
    setIsFocused,
    handleChange,
  } = UseIndustriesHooks({ options });

  return (
    <div className={styles['autocomplete-container']}>
      <Input
        icon={searchIcon}
        type='text'
        onClick={() => setIsFocused(true)}
        onChange={handleChange}
      />
      {filteredOptions && isFocused && (
        <div className={styles['options-container']}>
          {filteredOptions?.length > 0 ? (
            filteredOptions?.map(
              (option: { id: number; name: string }, index: number) => (
                <div
                  key={index}
                  className={styles['option-item']}
                  onClick={() => handleItemClick(option)}
                >
                  {option?.name}
                </div>
              )
            )
          ) : (
            <div className={styles['empty']}>Nothing has been found</div>
          )}
        </div>
      )}
      {selectedIndustries?.length > 0 && (
        <div className={styles['selected-industries']}>
          {selectedIndustries?.length > 0 && (
            <div className={styles['selected-industries-title']}>
              You selected ({`${selectedIndustries?.length}`} out of 3):
            </div>
          )}
          <div className={styles['selected-industries-list']}>
            {selectedIndustries?.map((industry) => (
              <>
                <div
                  key={industry.id}
                  className={styles['selected-industry']}
                  onClick={() => handleRemoveIndustry(industry.id)}
                >
                  {industry.name}{' '}
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AutocompleteInput;
