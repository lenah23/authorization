'use client';

import { IIndustry } from '@/app/store/interfaces';
import { Button, ChoseIndustries } from '../index';
import UseIndustriesHooks from './Industries.hooks';
import styles from './Industries.module.scss';

interface IProps {
  industries: IIndustry[];
}

const IndustriesSection = ({ industries }: IProps) => {
  const {
    saveIndustriesReq,
    isFocused,
    filteredOptions,
    selectedIndustries,
    handleRemoveIndustry,
    setIsFocused,
    handleItemClick,
    handleChange,
    saveLoading,
  } = UseIndustriesHooks({
    options: industries,
  });

  return (
    <div className={styles['industries-block__container']}>
      <div className={styles['industries-block']}>
        <div className={styles['title']}>
          Tell about the industries you work in
        </div>
        <div className={styles['description']}>
          To help us personalize your experience and grow visibility, choose up
          to 3 pre-defined using the search:
        </div>
        <ChoseIndustries
          industries={industries}
          isFocused={isFocused}
          filteredOptions={filteredOptions}
          selectedIndustries={selectedIndustries}
          handleRemoveIndustry={handleRemoveIndustry}
          setIsFocused={setIsFocused}
          handleItemClick={handleItemClick}
          handleChange={handleChange}
        />
        <div>
          <Button
            text={'Continue'}
            onClick={saveIndustriesReq}
            loading={saveLoading}
            disabled={selectedIndustries?.length === 0}
            type={'button'}
          />
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
