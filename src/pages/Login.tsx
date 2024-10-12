import React from 'react';
import Styles from './styles/login.module.css';
import AuthenticationForm from '../components/forms/Auth-Form';
import PomodoroLogo from '../components/logo/Pomodoro-logo';

const Login = () => {
  return (
    <div className={Styles['login-container']}>
      <PomodoroLogo to="/" />
      <h2 className={Styles['login-subtext']}>Login Acount</h2>
      <div className={Styles['login-card']}>
        <AuthenticationForm />
      </div>
    </div>
  );
};

export default Login;
