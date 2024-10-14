import Styles from './styles/startButton.module.css';

interface StartButtonProps {
  text: string;
  className?: string;
}

const StartButton: React.FC<StartButtonProps> = ({ text, className = '' }) => {
  return (
    <button className={`${Styles['start-btn']} ${className}`}>{text}</button>
  );
};

export default StartButton;
