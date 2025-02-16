'use client';

import { Button, ChoseIndustries } from '../index';
import UseIndustriesHooks from './Industries.hooks';
import styles from './Industries.module.scss';

interface IProps {
  industries: { id: number; name: string }[];
}

const Industries = ({ industries }: IProps) => {

  
  if (!localStorage.getItem('synexis-access-token')) {
    return <></>;
  }
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
        <ChoseIndustries industries={industries} />
        <div>
          <Button
            text={'Continue'}
            onClick={() => console.log('')}
            loading={false}
            disabled={false}
            type={'button'}
          />
        </div>
      </div>
    </div>
  );
};

export default Industries;
