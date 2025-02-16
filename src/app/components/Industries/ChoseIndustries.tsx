import styles from './Industries.module.scss';
import { AutocompleteInput, Button } from '../index';
import UseIndustriesHooks from './Industries.hooks';
import { IIndustry } from '@/app/store/interfaces';

interface IProps {
  industries: IIndustry[];
  isFocused: boolean;
  filteredOptions: any;
  selectedIndustries: any;
  handleRemoveIndustry: any;
  setIsFocused: any;
  handleItemClick: any;
  handleChange: any
}

const ChoseIndustries = ({
  industries,
  isFocused,
  filteredOptions,
  selectedIndustries,
  handleRemoveIndustry,
  setIsFocused,
  handleItemClick,
  handleChange,
}: IProps) => {
  return (
    <div className={styles['chose-industries__section']}>
      <AutocompleteInput
        options={industries}
        isFocused={isFocused}
        filteredOptions={filteredOptions}
        selectedIndustries={selectedIndustries}
        handleRemoveIndustry={handleRemoveIndustry}
        setIsFocused={setIsFocused}
        handleItemClick={handleItemClick}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ChoseIndustries;
