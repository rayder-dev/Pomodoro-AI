import { Link } from 'react-router-dom';
import Styles from './pomodoroLogo.module.css';

interface PomodoroLogoProps {
  to: string;
  className?: string;
  isDarkMode?: boolean;
}

const PomodoroLogo: React.FC<PomodoroLogoProps> = ({
  to,
  className = '',
  isDarkMode = true,
}) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const logoMode = isDarkMode
    ? '/assets/images/logo-light.png'
    : '/assets/images/logo.png';
  const textMode = isDarkMode ? Styles['dark-mode'] : '';

  return (
    <Link
      to={to}
      onClick={scrollToTop}
      className={`${Styles['site-logo']} ${className}`}
    >
      <img src={logoMode} alt="Pomodoro Logo" className={Styles['img-logo']} />
      <span className={textMode}>
        <span className={Styles['hidden-p']}>P</span>omodoro
      </span>
    </Link>
  );
};

export default PomodoroLogo;
