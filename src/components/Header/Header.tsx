import { FC, useState } from 'react';
import {
  IconRobot,
  IconAddressBook,
  IconCalendarMonth,
  IconSettings2,
  IconLogin2,
} from '@tabler/icons-react';
import Styles from './header.module.css';
import NavButton from '../Button/NavButton';
import SigninButton from '../Button/SignInButton';
import PomodoroLogo from '../Logo/PomodoroLogo';

interface HeaderProps {
  onDrawerOpen: () => void;
}

const Header: FC<HeaderProps> = ({ onDrawerOpen }) => {
  return (
    <header>
      <div className={Styles['header-container']}>
        {/* Logo Section */}
        <PomodoroLogo to="/" />
        {/* Navigation Buttons */}
        <nav>
          <ul>
            <div onClick={onDrawerOpen}>
              <NavButton
                to="/"
                icon={
                  <IconRobot size="1rem" style={{ marginBottom: '-1px' }} />
                }
                text="Ask AI"
              />
            </div>
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
                <IconAddressBook size="1rem" style={{ marginBottom: '-1px' }} />
              }
              text="Contact"
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
