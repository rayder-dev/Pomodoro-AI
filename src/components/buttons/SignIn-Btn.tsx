import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles/signin-button.module.css';

interface SigninButtonProps {
  to: string;
  icon: ReactNode;
  text: string;
  className?: string;
}

function SigninButton({ to, icon, text, className = '' }: SigninButtonProps) {
  return (
    <li>
      <Link to={to} className={`${Styles['signin-btn']} ${className}`}>
        <span>
          {icon}
          <span className={Styles['text']}>{text}</span>
        </span>
      </Link>
    </li>
  );
}

export default SigninButton;
