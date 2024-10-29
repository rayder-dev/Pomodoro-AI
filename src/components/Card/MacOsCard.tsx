import { FC, ReactNode } from 'react';
import styles from './macOsCard.module.css';

interface MacOsCardProps {
  children: ReactNode;
}

const MacOsCard: FC<MacOsCardProps> = ({ children }) => {
  return (
    <div className={styles['glass-container']}>
      <div className={styles['glass-header']}>
        <div className={styles['button-container']}>
          <div className={`${styles['circle-btn']} ${styles['red']}`} />
          <div className={`${styles['circle-btn']} ${styles['yellow']}`} />
          <div className={`${styles['circle-btn']} ${styles['green']}`} />
        </div>
      </div>
      <div className={styles['glass-body-wrapper']}>
        <div className={styles['glass-body']}>{children}</div>
      </div>
    </div>
  );
};

export default MacOsCard;
