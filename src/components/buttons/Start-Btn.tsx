import Styles from './styles/start-button.module.css';

interface StartButtonProps {
  text: string;
  className?: string;
}

function StartButton({ text, className = '' }: StartButtonProps) {
  return (
    <button className={`${Styles['start-btn']} ${className}`}>{text}</button>
  );
}

export default StartButton;
