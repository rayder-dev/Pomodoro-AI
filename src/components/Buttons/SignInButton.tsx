import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles/signinButton.module.css';

interface SigninButtonProps {
  to: string;
  icon: ReactNode;
  text: string;
  className?: string;
}

const SigninButton: FC<SigninButtonProps> = ({
  to,
  icon,
  text,
  className = '',
}) => {
  return (
    <li>
      <Link to={to} className={`${Styles['signin-btn']} ${className}`}>
        <span className={Styles['icon-container']}>{icon}</span>
        <span className={Styles['signin-text']}>{text}</span>
        <span className={Styles['signin-arrow']}>
          <svg
            fill="rgb(183, 128, 255)"
            viewBox="0 0 320 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
          </svg>
        </span>
      </Link>
    </li>
  );
};

export default SigninButton;
