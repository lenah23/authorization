import styles from './Industries.module.scss';
import { AutocompleteInput } from '../index';
import UseIndustriesHooks from './Industries.hooks';

const ChoseIndustries = () => {
    const { selectedValue, setSelectedValue } = UseIndustriesHooks();
    
  return (
    <div className={styles['chose-industries__section']}>
      <AutocompleteInput
        options={['sdeswer', 'sdfwefwr', 'sefcwef']}
        onChange={setSelectedValue}
      />
    </div>
  );
};

export default ChoseIndustries;
