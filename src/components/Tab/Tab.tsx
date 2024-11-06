import { Dispatch, FC, SetStateAction } from 'react';
import styles from './tab.module.css';
import { TimerStateTypes } from '../../types';

interface TabProps {
  timerState: TimerStateTypes;
  onSelect: Dispatch<SetStateAction<TimerStateTypes>>;
}

const Tab: FC<TabProps> = ({ timerState, onSelect }) => {
  const gliderColor = timerState.tabs[timerState.selectedTab].color;

  const handleTabClick = (index: number) => {
    onSelect({ ...timerState, selectedTab: index });
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        {timerState.tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              timerState.selectedTab === index ? styles.active : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
        <span
          className={styles.glider}
          style={{
            transform: `translateX(${timerState.selectedTab * 100}%)`,
            backgroundColor: gliderColor,
          }}
        ></span>
      </div>
    </div>
  );
};

export default Tab;
