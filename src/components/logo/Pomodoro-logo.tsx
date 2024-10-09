import { Link } from 'react-router-dom';
import Styles from './styles/pomodoro-logo.module.css';

interface PomodoroLogoProps {
  to: string;
  className?: string;
}

function PomodoroLogo({ to, className = '' }: PomodoroLogoProps) {
  return (
    <Link to={to} className={`${Styles['site-logo']} ${className}`}>
      <img src="/assets/logo.png" alt="img2" className={Styles['img-logo']} />
      <span>
        <span className={Styles['visually-hidden']}>P</span>omodoro
      </span>
    </Link>
  );
}

export default PomodoroLogo;
