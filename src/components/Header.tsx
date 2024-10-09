import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Styles from './styles/header.module.css';
import { Link } from 'react-router-dom';
import NavButton from './buttons/Nav-Btn';
import SigninButton from './buttons/SignIn-Btn';
import PomodoroLogo from './logo/Pomodoro-logo';

function Header() {
  return (
    <header>
      <div className={Styles['container']}>
        {/* Logo Section */}
        <PomodoroLogo to="/" />
        {/* Navigation Buttons */}
        <nav>
          <ul>
            <NavButton
              to="/"
              icon={
                <AssessmentRoundedIcon sx={{ fontSize: '20px', mb: '-2px' }} />
              }
              text="Report"
            />
            <NavButton
              to="/"
              icon={
                <SettingsRoundedIcon sx={{ fontSize: '20px', mb: '-2px' }} />
              }
              text="Setting"
            />
            <NavButton
              to="/"
              icon={<InfoRoundedIcon sx={{ fontSize: '20px', mb: '-2px' }} />}
              text="About"
            />
            <SigninButton
              to="/"
              icon={
                <AccountCircleRoundedIcon
                  sx={{ fontSize: '20px', mb: '-2px' }}
                />
              }
              text="Sign In"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
