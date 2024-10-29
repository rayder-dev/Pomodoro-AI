import { FC, useEffect } from 'react';
import { IconAlarm } from '@tabler/icons-react';
import { Modal } from '@mantine/core';
import styles from './timeUpModal.module.css';
import ContinueButton from '../Button/ContinueButton';

interface TimeUpModalProps {
  opened: boolean;
  close: () => void;
  alarmSound: HTMLAudioElement;
  selectedTab: number;
}

const TimeUpModal: FC<TimeUpModalProps> = ({
  opened,
  close,
  alarmSound,
  selectedTab,
}) => {
  const playAlarm = () => {
    alarmSound.loop = true;
    alarmSound.play();
  };

  const stopAlarm = () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmSound.loop = false;
    close();
  };

  useEffect(() => {
    if (opened) {
      playAlarm();
    }
  }, [opened]);

  const alarmColor =
    selectedTab === 0 ? '#f77170' : selectedTab === 1 ? '#36c890' : '#2083b0';

  return (
    <Modal
      opened={opened}
      onClose={stopAlarm}
      withCloseButton={false}
      transitionProps={{ transition: 'rotate-left' }}
      zIndex={1000}
      radius={20}
      closeOnClickOutside={false}
      closeOnEscape={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 2,
      }}
    >
      <div className={styles['button-container']}>
        <div className={`${styles['circle-btn']} ${styles['red']}`} />
        <div className={`${styles['circle-btn']} ${styles['yellow']}`} />
        <div className={`${styles['circle-btn']} ${styles['green']}`} />
      </div>
      <div className={styles['modal-wrapper']}>
        <img
          src="/assets/images/dancing_fruit.gif"
          alt="Pomodoro Logo"
          className={styles['img-dance']}
        />
        <h3>
          Time’s up! Tap Continue to proceed.
          <IconAlarm
            className={styles.vibrating}
            color={alarmColor}
            size="3rem"
            style={{ marginBottom: '-1rem' }}
          />
        </h3>
        <ContinueButton onClick={stopAlarm} color={alarmColor} />
      </div>
    </Modal>
  );
};

export default TimeUpModal;
