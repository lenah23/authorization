'use client';

import React from 'react';
import { IIndustry } from '@/app/store/interfaces';
import Input from '../Input/Input';
import searchIcon from '../../assets/images/search-icon.svg';
import styles from './Industries.module.scss';

interface AutocompleteInputProps {
  options: IIndustry[];
  label?: string;
  isFocused: boolean;
  filteredOptions: IIndustry[];
  selectedIndustries: IIndustry[];
  handleRemoveIndustry: (val: number) => void;
  setIsFocused: (val: boolean) => void;
  handleItemClick: (val: IIndustry) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  options,
  isFocused,
  filteredOptions,
  selectedIndustries,
  handleRemoveIndustry,
  setIsFocused,
  handleItemClick,
  handleChange,
  searchValue,
}) => {
  return (
    <div className={styles['autocomplete-container']}>
      <Input
        icon={searchIcon}
        type='text'
        onClick={() => setIsFocused(true)}
        onChange={handleChange}
        value={searchValue}
      />
      {filteredOptions && isFocused && (
        <div className={styles['options-container']}>
          {filteredOptions?.length > 0 ? (
            filteredOptions?.map((option: IIndustry, index: number) => (
              <div
                key={index}
                className={styles['option-item']}
                onClick={() => handleItemClick(option)}
              >
                {option?.name}
              </div>
            ))
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
            {selectedIndustries?.map((industry: IIndustry) => (
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
