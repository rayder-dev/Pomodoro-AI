import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import Styles from './styles/nav-button.module.css';

interface NavButtonProps {
  to: string;
  icon: ReactNode;
  text: string;
  className?: string;
}

function NavButton({ to, icon, text, className = '' }: NavButtonProps) {
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
}

export default NavButton;
