import { FC, ReactNode } from 'react';
import { Modal } from '@mantine/core';
import styles from './timeUpModal.module.css';

interface ModalWrapperProps {
  opened: boolean;
  close: () => void;
  children: ReactNode;
}

const ModalWrapper: FC<ModalWrapperProps> = ({ opened, close, children }) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <div className={styles['button-container']}>
          <div className={`${styles['circle-btn']} ${styles['red']}`} />
          <div className={`${styles['circle-btn']} ${styles['yellow']}`} />
          <div className={`${styles['circle-btn']} ${styles['green']}`} />
        </div>
      }
      size="auto"
      lockScroll={false}
      trapFocus={false}
      transitionProps={{ transition: 'fade-down' }}
      zIndex={4000}
      radius={10}
      closeOnClickOutside={false}
      closeOnEscape={false}
      shadow="0 0 12px rgba(24, 94, 224, .7), 0 0 12px rgba(24, 94, 224, .7)"
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 2,
      }}
    >
      <div className={styles['modal-wrapper']}>{children}</div>
    </Modal>
  );
};

export default ModalWrapper;
