import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import Styles from './styles/navButton.module.css';

interface NavButtonProps {
  to: string;
  icon: ReactNode;
  text: string;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  to,
  icon,
  text,
  className = '',
}) => {
  return (
    <li>
      <Link to={to} className={`${Styles['nav-btn']} ${className}`}>
        <span>
          {icon}
          <span className={Styles['text']}>{text}</span>
        </span>
      </Link>
    </li>
  );
};

export default NavButton;
