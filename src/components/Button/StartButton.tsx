import { FC, useMemo, useEffect } from 'react';
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

const StartButton: FC<StartButtonProps> = ({
  text,
  onClick,
  className = '',
}) => {
  const click = useMemo(() => new Audio('/assets/sounds/click.mp3'), []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        click.load(); // Reloads the audio to prevent distortion
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [click]);

  const handleClick = () => {
    click.volume = 0.5;
    click.currentTime = 0; // Ensure it starts from the beginning
    click.play();
    onClick();
  };

  return (
    <button
      type="button"
      className={`${Styles['start-btn']} ${className}`}
      onClick={handleClick}
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
};

export default StartButton;
