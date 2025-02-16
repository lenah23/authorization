'use client';

import React from 'react';
import Input from '../Input/Input';
import searchIcon from '../../assets/images/search-icon.svg';
import styles from './Industries.module.scss';
import { IIndustry } from '@/app/store/interfaces';

interface AutocompleteInputProps {
  options: IIndustry[];
  label?: string;
  isFocused: boolean;
  filteredOptions: any;
  selectedIndustries: any;
  handleRemoveIndustry: any;
  setIsFocused: any;
  handleItemClick: any;
  handleChange: any;
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
}) => {
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
