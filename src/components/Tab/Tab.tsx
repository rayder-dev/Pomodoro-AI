import { FC, useEffect } from 'react';
import styles from './tab.module.css';

interface TabProps {
  selected: number;
  onSelect: (value: number) => void;
}

const Tab: FC<TabProps> = ({ selected, onSelect }) => {
  const tabs = ['Session', 'Short Break', 'Long Break'];
  const tabColors = ['#f77170', '#36c890', '#2083b0'];

  const handleTabClick = (index: number) => {
    onSelect(index);
  };
  const gliderColor = tabColors[selected];

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              selected === index ? styles.active : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
        <span
          className={styles.glider}
          style={{
            transform: `translateX(${selected * 100}%)`,
            backgroundColor: gliderColor,
          }}
        ></span>
      </div>
    </div>
  );
};

export default Tab;
