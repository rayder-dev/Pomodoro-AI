import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Styles from './styles/header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className={Styles['container']}>
        {/* Logo Section */}
        <Link to="/" className={Styles['site-logo']}>
          <AssignmentTurnedInRoundedIcon style={{ fontSize: '33px' }} />
          <span>Pomodoro</span>
        </Link>

        {/* Navigation Buttons */}
        <nav>
          <ul>
            <li>
              <Link to="/" className={Styles['nav-button']}>
                <AssessmentRoundedIcon
                  style={{ fontSize: '23px', marginTop: '-2px' }}
                />
                <span>Report</span>
              </Link>
            </li>
            <li>
              <Link to="/" className={Styles['nav-button']}>
                <SettingsRoundedIcon
                  style={{ fontSize: '23px', marginTop: '-2px' }}
                />
                <span>Setting</span>
              </Link>
            </li>
            <li>
              <Link to="/" className={Styles['nav-button']}>
                <InfoRoundedIcon
                  style={{ fontSize: '23px', marginTop: '-2px' }}
                />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/" className={Styles['nav-button']}>
                <AccountCircleRoundedIcon
                  style={{ fontSize: '23px', marginTop: '-2px' }}
                />
                <span>Sign In</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
