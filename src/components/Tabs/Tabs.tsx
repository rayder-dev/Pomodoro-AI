import React, { useState } from 'react';
import styles from './tabs.module.css';

const Tabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ['Session', 'Short Break', 'Long Break'];

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  const gliderColor =
    selectedTab === 1 ? '#36c890' : selectedTab === 2 ? '#2083b0' : '#f77170';

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
