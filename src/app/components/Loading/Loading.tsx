import React, { CSSProperties } from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './Loading.module.scss';

interface IProps {
  styleProps?: CSSProperties;
}

const Loading: React.FC<IProps> = ({ styleProps }) => {
  return (
    <div className={`${styles.loader}`} style={styleProps}>
      <ClipLoader color='#707EAE' size={20} />
    </div>
  );
};

export default Loading;
