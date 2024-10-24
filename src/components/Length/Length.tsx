import { ActionIcon, RingProgress, Center, rem } from '@mantine/core';
import { IconAlarmFilled } from '@tabler/icons-react';
import styles from './length.module.css';

const Length = () => {
  return (
    <div className={styles['time-length']}>
      {/* <h2>Time Length</h2> */}
      <div className={styles['time-container']}>
        <div className={styles['time-wrapper']}>
          <span className={styles['time-header']}>Session</span>
          <p className={styles['time-session-display']}>25 min</p>
          <div className={styles['time-btn-wrapper']}>
            <button className={styles['minus']}>-</button>
            <button className={styles['plus']}>+</button>
          </div>
        </div>
        <RingProgress
          size={110}
          roundCaps
          sections={[{ value: 25, color: '#f77170' }]}
          rootColor="#28232e90"
          label={
            <Center>
              <ActionIcon color="#f77170" variant="light" radius="xl" size="xl">
                <IconAlarmFilled style={{ width: rem(35), height: rem(35) }} />
              </ActionIcon>
            </Center>
          }
        />
      </div>
      <div className={styles['time-container']}>
        <div className={styles['time-wrapper']}>
          <span className={styles['time-header']}>Short break</span>
          <p className={styles['time-session-display']}>5 min</p>
          <div className={styles['time-btn-wrapper']}>
            <button className={styles['minus']}>-</button>
            <button className={styles['plus']}>+</button>
          </div>
        </div>
        <RingProgress
          size={110}
          roundCaps
          sections={[{ value: 5, color: '#36c890' }]}
          rootColor="#28232e90"
          label={
            <Center>
              <ActionIcon color="#36c890" variant="light" radius="xl" size="xl">
                <IconAlarmFilled style={{ width: rem(35), height: rem(35) }} />
              </ActionIcon>
            </Center>
          }
        />
      </div>
      <div className={styles['time-container']}>
        <div className={styles['time-wrapper']}>
          <span className={styles['time-header']}>Long break</span>
          <p className={styles['time-session-display']}>10 min</p>
          <div className={styles['time-btn-wrapper']}>
            <button className={styles['minus']}>-</button>
            <button className={styles['plus']}>+</button>
          </div>
        </div>
        <RingProgress
          size={110}
          roundCaps
          sections={[{ value: 10, color: '#2083b0' }]}
          rootColor="#28232e90"
          label={
            <Center>
              <ActionIcon color="#2083b0" variant="light" radius="xl" size="xl">
                <IconAlarmFilled style={{ width: rem(35), height: rem(35) }} />
              </ActionIcon>
            </Center>
          }
        />
      </div>
    </div>
  );
};

export default Length;
