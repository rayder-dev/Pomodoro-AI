import { FC, ReactNode } from 'react';
import Styles from './macOsCard.module.css';

interface MacOsCard {
  children: ReactNode;
}

const MacOsCard: FC<MacOsCard> = ({ children }) => {
  return (
    <div className={Styles['glass-container']}>
      <div className={Styles['glass-header']}>
        <div className={Styles['button-container']}>
          <div className={`${Styles['circle-btn']} ${Styles['red']}`} />
          <div className={`${Styles['circle-btn']} ${Styles['yellow']}`} />
          <div className={`${Styles['circle-btn']} ${Styles['green']}`} />
        </div>
      </div>
      <div className={Styles['glass-body-wrapper']}>
        <div className={Styles['glass-body']}>{children}</div>
      </div>
    </div>
  );
};

export default MacOsCard;
