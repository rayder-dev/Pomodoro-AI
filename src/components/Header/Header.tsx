import { FC, useEffect, useState } from 'react';
import {
  IconBrandOpenai,
  IconAddressBook,
  IconCalendarMonth,
  IconSettings2,
  IconLogin,
} from '@tabler/icons-react';
import styles from './header.module.css';
import { Contact, Login } from '../../containers';
import { ComingSoon, Logo, Modal, NavBtn } from '..';
import Setting from '../Setting/Setting';
import UserMenu from '../Menu/UserMenu';

interface HeaderProps {
  onDrawerOpen: () => void;
}

const Header: FC<HeaderProps> = ({ onDrawerOpen }) => {
  const [selectedNavBtn, setSelectedNavBtn] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const accessToken = localStorage.getItem('NotAToken');
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

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
          <Logo />
          {/* Navigation Buttons */}
          <nav>
            <ul>
              <div onClick={onDrawerOpen}>
                <NavBtn
                  icon={
                    <IconBrandOpenai
                      size="1rem"
                      style={{ marginTop: '-2px' }}
                    />
                  }
                  text="Ask AI"
                />
              </div>
              <div onClick={() => handleModalOpen('Calendar')}>
                <NavBtn
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
                <NavBtn
                  icon={
                    <IconSettings2 size="1rem" style={{ marginTop: '-2px' }} />
                  }
                  text="Setting"
                />
              </div>
              <div onClick={() => handleModalOpen('Contact')}>
                <NavBtn
                  icon={
                    <IconAddressBook
                      size="1rem"
                      style={{ marginTop: '-2px' }}
                    />
                  }
                  text="Contact"
                />
              </div>

              {token ? (
                <UserMenu />
              ) : (
                <div onClick={() => handleModalOpen('Singin')}>
                  <NavBtn
                    className={styles['signin-btn']}
                    icon={
                      <IconLogin size="1rem" style={{ marginTop: '-2px' }} />
                    }
                    text="Sign In"
                  />
                </div>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <Modal opened={modalOpen} close={handleModalClose}>
        {selectedNavBtn === 'Singin' && <Login closeModal={handleModalClose} />}
        {selectedNavBtn === 'Contact' && <Contact />}
        {selectedNavBtn === 'Calendar' && (
          <ComingSoon onClick={handleModalClose} />
        )}
        {selectedNavBtn === 'Setting' && <Setting />}
      </Modal>
    </>
  );
};

export default Header;
