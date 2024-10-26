import { FC, memo } from 'react';
import {
  IconPlayerPlayFilled,
  IconPlayerPauseFilled,
} from '@tabler/icons-react';
import Styles from './styles/startButton.module.css';

interface StartButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const StartButton: FC<StartButtonProps> = memo(
  ({ text, onClick, className = '' }) => {
    return (
      <button
        type="button"
        className={`${Styles['start-btn']} ${className}`}
        onClick={onClick}
        aria-label={text}
      >
        {text === 'START' ? (
          <IconPlayerPlayFilled />
        ) : text === 'PAUSE' ? (
          <IconPlayerPauseFilled />
        ) : (
          ''
        )}
        <span className={Styles['start-text']}>{text}</span>
      </button>
    );
  }
);

export default StartButton;
