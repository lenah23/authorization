import styles from './Industries.module.scss';
import { AutocompleteInput } from '../index';
import UseIndustriesHooks from './Industries.hooks';

interface IProps {
  industries: { id: number; name: string }[];
}

const ChoseIndustries = ({industries}: IProps) => {
  const { selectedValue, setSelectedValue } = UseIndustriesHooks();

  return (
    <div className={styles['chose-industries__section']}>
      <AutocompleteInput options={industries} onChange={setSelectedValue} />
    </div>
  );
};

export default ChoseIndustries;
