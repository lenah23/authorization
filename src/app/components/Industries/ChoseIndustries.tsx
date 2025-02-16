import styles from './Industries.module.scss';
import { AutocompleteInput, Button } from '../index';
import UseIndustriesHooks from './Industries.hooks';

interface IProps {
  industries: { id: number; name: string }[];
}

const ChoseIndustries = ({ industries }: IProps) => {
  return (
    <div className={styles['chose-industries__section']}>
      <AutocompleteInput options={industries} />
    </div>
  );
};

export default ChoseIndustries;
