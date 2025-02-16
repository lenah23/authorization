'use client';

import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';
import searchIcon from '../../assets/images/search-icon.svg';
import styles from './Industries.module.scss';
import { toast } from 'react-toastify';

interface AutocompleteInputProps {
  options: { id: number; name: string }[];
  label?: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ options }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedIndustries, setSelectedIndustries] = useState<
    { id: number; name: string }[]
  >([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = options?.filter((option) =>
        option.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, options]);

  const handleItemClick = (industry: { id: number; name: string }) => {
    const isIndustrySelected = selectedIndustries.some(
      (selected) => selected.id === industry.id
    );

    if (!isIndustrySelected) {
      if (selectedIndustries.length < 3) {
        setSelectedIndustries((prevSelected) => [...prevSelected, industry]);
      } else {
        toast.warning('You can only select up to 3 industries.');
      }
    }

    setIsFocused(false);
  };

  const handleRemoveIndustry = (id: number) => {
    setSelectedIndustries((prevSelected) =>
      prevSelected.filter((industry) => industry.id !== id)
    );
  };

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
            filteredOptions?.map((option, index) => (
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
