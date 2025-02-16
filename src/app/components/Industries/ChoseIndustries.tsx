import styles from './Industries.module.scss';
import { AutocompleteInput } from '../index';
import { IIndustry } from '@/app/store/interfaces';

interface IProps {
  industries: IIndustry[];
  isFocused: boolean;
  filteredOptions: IIndustry[];
  selectedIndustries: IIndustry[];
  handleRemoveIndustry: (val: number) => void;
  setIsFocused: (val: boolean) => void;
  handleItemClick: (val: IIndustry) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string
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
  searchValue,
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
        searchValue={searchValue}
      />
    </div>
  );
};

export default ChoseIndustries;
