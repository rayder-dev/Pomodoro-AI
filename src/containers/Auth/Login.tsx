import { FC } from 'react';
import Styles from './login.module.css';
import AuthenticationForm from '../../components/Form/AuthForm';
import PomodoroLogo from '../../components/Logo/PomodoroLogo';

const Login: FC = () => {
  return (
    <div className={Styles['login-container']}>
      <PomodoroLogo to="/" isDarkMode={false} />
      <h2 className={Styles['login-subtext']}>Login Account</h2>
      <div className={Styles['login-card']}>
        <AuthenticationForm />
      </div>
    </div>
  );
};

export default Login;
