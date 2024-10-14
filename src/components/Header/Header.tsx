import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import Styles from './header.module.css';
import NavButton from '../Buttons/NavButton';
import SigninButton from '../Buttons/SignInButton';
import PomodoroLogo from '../Logo/PomodoroLogo';

const Header: React.FC = () => {
  return (
    <header>
      <div className={Styles['header-container']}>
        {/* Logo Section */}
        <PomodoroLogo to="/" />
        {/* Navigation Buttons */}
        <nav>
          <ul>
            <NavButton
              to="/"
              icon={<StickyNote2Icon sx={{ fontSize: '23px', mb: '-3px' }} />}
              text="Notes"
            />
            <NavButton
              to="/"
              icon={
                <AssessmentRoundedIcon sx={{ fontSize: '23px', mb: '-3px' }} />
              }
              text="Stats"
            />
            <NavButton
              to="/"
              icon={
                <SettingsRoundedIcon sx={{ fontSize: '23px', mb: '-3px' }} />
              }
              text="Setting"
            />
            <SigninButton
              to="/sign-in"
              icon={
                <AccountCircleRoundedIcon
                  sx={{ fontSize: '23px', mb: '-3px' }}
                />
              }
              text="Sign In"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
