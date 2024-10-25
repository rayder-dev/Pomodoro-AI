import { FC, useState } from 'react';
import styles from './tabs.module.css';

interface TabsProps {
  selected: number;
  onSelect: (value: number) => void;
}

const Tabs: FC<TabsProps> = ({ selected, onSelect }) => {
  const [selectedTab, setSelectedTab] = useState(selected);
  const tabs = ['Session', 'Short Break', 'Long Break'];

  const tabColors = ['#f77170', '#36c890', '#2083b0'];

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    onSelect(index);
  };
  const gliderColor = tabColors[selectedTab];

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              selectedTab === index ? styles.active : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
        <span
          className={styles.glider}
          style={{
            transform: `translateX(${selectedTab * 100}%)`,
            backgroundColor: gliderColor,
          }}
        ></span>
      </div>
    </div>
  );
};

export default Tabs;
