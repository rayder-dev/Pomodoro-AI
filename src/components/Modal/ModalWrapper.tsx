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
      closeOnClickOutside={true}
      closeOnEscape={true}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 2,
      }}
    >
      <div className={styles['modal-wrapper']}>{children}</div>
    </Modal>
  );
};

export default ModalWrapper;
