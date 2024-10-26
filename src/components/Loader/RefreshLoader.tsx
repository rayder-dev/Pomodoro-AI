import { FC } from 'react';
import styles from './refreshLoader.module.css';

const RefreshLoader: FC = () => {
  return <div className={styles.spinner}></div>;
};

export default RefreshLoader;
