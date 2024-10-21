import Styles from './styles/startButton.module.css';
import { IconPlayerPlayFilled } from '@tabler/icons-react';

interface StartButtonProps {
  text: string;
  className?: string;
}

const StartButton: React.FC<StartButtonProps> = ({ text, className = '' }) => {
  return (
    <button className={`${Styles['start-btn']} ${className}`}>
      <IconPlayerPlayFilled />
      <span className={Styles['start-text']}>{text}</span>
    </button>
  );
};

export default StartButton;
