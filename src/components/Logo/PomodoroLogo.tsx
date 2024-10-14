import { Link } from 'react-router-dom';
import Styles from './pomodoroLogo.module.css';

interface PomodoroLogoProps {
  to: string;
  className?: string;
}

const PomodoroLogo: React.FC<PomodoroLogoProps> = ({ to, className = '' }) => {
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
        src="/assets/images/logo.png"
        alt="img2"
        className={Styles['img-logo']}
      />
      <span>
        <span className={Styles['hidden-p']}> P</span>
        omodoro
      </span>
    </Link>
  );
};

export default PomodoroLogo;
