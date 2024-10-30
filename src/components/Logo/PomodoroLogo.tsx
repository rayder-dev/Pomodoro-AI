import Styles from './pomodoroLogo.module.css';
import { FC } from 'react';

interface PomodoroLogoProps {
  className?: string;
  isDarkMode?: boolean;
  section: (value: string) => void;
}

const PomodoroLogo: FC<PomodoroLogoProps> = ({
  className = '',
  isDarkMode = true,
  section,
}) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const textMode = isDarkMode ? Styles['dark-mode'] : '';

  const handleClick = () => {
    scrollToTop();
    section('Home');
  };

  return (
    <div
      onClick={handleClick}
      className={`${Styles['site-logo']} ${className}`}
    >
      <img
        src="/assets/images/logo.png"
        alt="Pomodoro Logo"
        className={Styles['img-logo']}
      />
      <span className={textMode}>
        <span className={Styles['hidden-p']}>P</span>omodoro AI
      </span>
    </div>
  );
};

export default PomodoroLogo;
