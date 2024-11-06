import { FC, useState } from 'react';
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

interface HeaderProps {
  onDrawerOpen: () => void;
}

const Header: FC<HeaderProps> = ({ onDrawerOpen }) => {
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
                  text="Ask GPT"
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
              <div onClick={() => handleModalOpen('Singin')}>
                <NavBtn
                  className={styles['signin-btn']}
                  icon={<IconLogin size="1rem" style={{ marginTop: '-2px' }} />}
                  text="Sign In"
                />
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <Modal opened={modalOpen} close={handleModalClose}>
        {selectedNavBtn === 'Singin' && <Login />}
        {selectedNavBtn === 'Contact' && <Contact />}
        {selectedNavBtn === 'Calendar' && (
          <ComingSoon onClick={handleModalClose} />
        )}
        {selectedNavBtn === 'Setting' && (
          <ComingSoon onClick={handleModalClose} />
        )}
      </Modal>
    </>
  );
};

export default Header;
