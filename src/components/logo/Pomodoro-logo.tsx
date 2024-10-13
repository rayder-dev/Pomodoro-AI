import { Link } from 'react-router-dom';
import Styles from './styles/pomodoro-logo.module.css';

interface PomodoroLogoProps {
  to: string;
  className?: string;
}

function PomodoroLogo({ to, className = '' }: PomodoroLogoProps) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Link
      to={to}
      onClick={scrollToTop}
      className={`${Styles['site-logo']} ${className}`}
    >
      <img
        src="/assets/img/logo.png"
        alt="img2"
        className={Styles['img-logo']}
      />
      <span>
        <span className={Styles['hidden-p']}> P</span>
        omodoro
      </span>
    </Link>
  );
}

export default PomodoroLogo;
