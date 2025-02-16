'use client';

import { ChoseIndustries } from "../index";
import styles from './Industries.module.scss';

const Industries = () => {
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
            <ChoseIndustries />
      </div>
    </div>
  );
};

export default Industries;
