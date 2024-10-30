import { FC, ReactNode } from 'react';
import styles from './styles/navButton.module.css';

interface NavButtonProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

const NavButton: FC<NavButtonProps> = ({ icon, text, className = '' }) => {
  return (
    <li>
      <div className={`${styles['nav-btn']} ${className}`}>
        {icon}
        <span className={styles['nav-text']}>{text}</span>
      </div>
    </li>
  );
};

export default NavButton;
