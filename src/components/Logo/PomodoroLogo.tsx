import { FC } from 'react';
import { Link } from 'react-router-dom';
import Styles from './pomodoroLogo.module.css';

interface PomodoroLogoProps {
  className?: string;
  isDarkMode?: boolean;
}

const PomodoroLogo: FC<PomodoroLogoProps> = ({
  className = '',
  isDarkMode = true,
}) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const textMode = isDarkMode ? Styles['dark-mode'] : '';

  return (
    <Link
      to={'/'}
      onClick={scrollToTop}
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
    </Link>
  );
};

export default PomodoroLogo;
