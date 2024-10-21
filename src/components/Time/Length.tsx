import React from 'react';
import { ActionIcon, RingProgress, Text, Center, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import styles from './length.module.css';

const Length = () => {
  return (
    <>
      <RingProgress
        size={270}
        thickness={12}
        roundCaps
        sections={[{ value: 40, color: '#f77170' }]}
        label={
          <div className={styles['time-container']}>
            <div className={styles['time-wrapper']}>
              <span className={styles['time-header']}>session time</span>
              <p className={styles['time-session-display']}>25 min</p>
              <div className={styles['time-btn-wrapper']}>
                <button className={styles['minus']}>-</button>
                <button className={styles['plus']}>+</button>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Length;
