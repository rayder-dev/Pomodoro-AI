import React from 'react';
import styles from './tabs.module.css';

const Tabs: React.FC = () => {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        <input type="radio" id="radio-1" name="tabs" defaultChecked />
        <label htmlFor="radio-1" className={styles.tab}>
          Session
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label htmlFor="radio-2" className={styles.tab}>
          Short Break
        </label>
        <input type="radio" id="radio-3" name="tabs" />
        <label htmlFor="radio-3" className={styles.tab}>
          Long Break
        </label>
        <span className={styles.glider}></span>
      </div>
    </div>
  );
};

export default Tabs;
