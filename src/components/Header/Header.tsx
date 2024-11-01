import { FC, useState } from 'react';
import {
  IconBrandOpenai,
  IconAddressBook,
  IconCalendarMonth,
  IconSettings2,
  IconLogin,
} from '@tabler/icons-react';
import styles from './header.module.css';
import NavButton from '../Button/NavButton';
import PomodoroLogo from '../Logo/PomodoroLogo';
import ModalWrapper from '../Modal/ModalWrapper';
import AuthenticationForm from '../../containers/Auth/AuthLogin';
import Contact from '../../containers/Contact/Contact';
import ComingSoon from '../Banner/ComingSoon';

interface HeaderProps {
  onDrawerOpen: () => void;
  section: (value: string) => void;
}

const Header: FC<HeaderProps> = ({ onDrawerOpen, section }) => {
  const [selectedNavBtn, setSelectedNavBtn] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = (selection: string) => {
    setSelectedNavBtn(selection);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header>
        <div className={styles['header-container']}>
          {/* Logo Section */}
          <PomodoroLogo section={section} />
          {/* Navigation Buttons */}
          <nav>
            <ul>
              <div onClick={onDrawerOpen}>
                <NavButton
                  icon={
                    <IconBrandOpenai
                      size="1rem"
                      style={{ marginTop: '-2px' }}
                    />
                  }
                  text="Ask GPT"
                />
              </div>
              <div onClick={() => handleModalOpen('Calendar')}>
                <NavButton
                  icon={
                    <IconCalendarMonth
                      size="1rem"
                      style={{ marginTop: '-2px' }}
                    />
                  }
                  text="Calendar"
                />
              </div>
              <div onClick={() => handleModalOpen('Setting')}>
                <NavButton
                  icon={
                    <IconSettings2 size="1rem" style={{ marginTop: '-2px' }} />
                  }
                  text="Setting"
                />
              </div>
              <div onClick={() => handleModalOpen('Contact')}>
                <NavButton
                  icon={
                    <IconAddressBook
                      size="1rem"
                      style={{ marginTop: '-2px' }}
                    />
                  }
                  text="Contact"
                />
              </div>
              <div onClick={() => handleModalOpen('Singin')}>
                <NavButton
                  className={styles['signin-btn']}
                  icon={<IconLogin size="1rem" style={{ marginTop: '-2px' }} />}
                  text="Sign In"
                />
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <ModalWrapper opened={modalOpen} close={handleModalClose}>
        {selectedNavBtn === 'Singin' && <AuthenticationForm />}
        {selectedNavBtn === 'Contact' && <Contact />}
        {selectedNavBtn === 'Calendar' && (
          <ComingSoon onClick={handleModalClose} />
        )}
        {selectedNavBtn === 'Setting' && (
          <ComingSoon onClick={handleModalClose} />
        )}
      </ModalWrapper>
    </>
  );
};

export default Header;
