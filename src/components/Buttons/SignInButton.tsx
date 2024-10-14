import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles/signinButton.module.css';

interface SigninButtonProps {
  to: string;
  icon: ReactNode;
  text: string;
  className?: string;
}

const SigninButton: React.FC<SigninButtonProps> = ({
  to,
  icon,
  text,
  className = '',
}) => {
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
};

export default SigninButton;
