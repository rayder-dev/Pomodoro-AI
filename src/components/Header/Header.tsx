import { FC } from 'react';
import {
  IconNotebook,
  IconCalendarMonth,
  IconSettings2,
  IconLogin2,
} from '@tabler/icons-react';
import Styles from './header.module.css';
import NavButton from '../Buttons/NavButton';
import SigninButton from '../Buttons/SignInButton';
import PomodoroLogo from '../Logo/PomodoroLogo';

const Header: FC = () => {
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
              icon={
                <IconNotebook size="1rem" style={{ marginBottom: '-1px' }} />
              }
              text="Notes"
            />
            <NavButton
              to="/"
              icon={
                <IconCalendarMonth
                  size="1rem"
                  style={{ marginBottom: '-1px' }}
                />
              }
              text="Calendar"
            />
            <NavButton
              to="/"
              icon={
                <IconSettings2 size="1rem" style={{ marginBottom: '-1px' }} />
              }
              text="Setting"
            />
            <SigninButton
              to="/sign-in"
              icon={<IconLogin2 size="1rem" style={{ marginBottom: '-1px' }} />}
              text="Sign In"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
