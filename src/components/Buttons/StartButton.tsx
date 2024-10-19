import Styles from './styles/startButton.module.css';

interface StartButtonProps {
  text: string;
  className?: string;
}

const StartButton: React.FC<StartButtonProps> = ({ text, className = '' }) => {
  return (
    // <button className={`${Styles['start-btn']} ${className}`}>{text}</button>
    <button className={`${Styles['start-btn']} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        id="Play"
        className={Styles['start-icon']}
      >
        <path
          d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
          fill="#ffffff"
          className={`${Styles['color000000']} ${Styles['svgShape']}`}
        ></path>
      </svg>
      <span className={Styles['start-text']}>{text}</span>
    </button>
  );
};

export default StartButton;
