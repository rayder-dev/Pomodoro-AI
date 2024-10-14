import Styles from './login.module.css';
import AuthenticationForm from '../../components/Forms/AuthForm';
import PomodoroLogo from '../../components/Logo/PomodoroLogo';

const Login: React.FC = () => {
  return (
    <div className={Styles['login-container']}>
      <PomodoroLogo to="/" />
      <h2 className={Styles['login-subtext']}>Login Account</h2>
      <div className={Styles['login-card']}>
        <AuthenticationForm />
      </div>
    </div>
  );
};

export default Login;
