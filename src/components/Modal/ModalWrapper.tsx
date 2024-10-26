import { FC, useEffect } from 'react';
import { Modal } from '@mantine/core';
import styles from './modalWrapper.module.css';
import ContinueButton from '../Button/ContinueButton';

interface ModalWrapperProps {
  opened: boolean;
  close: () => void;
  alarmSound: HTMLAudioElement;
}

const ModalWrapper: FC<ModalWrapperProps> = ({ opened, close, alarmSound }) => {
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

  return (
    <Modal
      opened={opened}
      onClose={stopAlarm}
      withCloseButton={false}
      transitionProps={{ transition: 'rotate-left' }}
      zIndex={1000}
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
        <h3> Time’s up! Tap Continue to proceed.</h3>
        <ContinueButton onClick={stopAlarm} />
      </div>
    </Modal>
  );
};

export default ModalWrapper;
