import { FC } from 'react';
import {
  IconSunMoon,
  IconSun,
  IconMoonStars,
  IconArrowBack,
} from '@tabler/icons-react';
import { Button, NativeSelect, Tabs, Title } from '@mantine/core';
import styles from './setting.module.css';

const Setting: FC = () => {
  return (
    <div className={styles.settingContainer}>
      <Title ta="left" className={styles.title}>
        Settings
      </Title>
      <Tabs color="#23bab1" defaultValue="appearance">
        <Tabs.List className={styles.tabList} justify="flex-start">
          <Tabs.Tab value="appearance">Appearance</Tabs.Tab>
          <Tabs.Tab value="notification">Notification</Tabs.Tab>
          <Tabs.Tab value="profile">Profile</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="appearance">
          <div className={styles.languageContainer}>
            <div>
              <h4 className={styles.settingHeader}>Language</h4>
              <h5 className={styles.settingSub}>
                Select the language of the platform
              </h5>
            </div>
            <NativeSelect
              className={styles.languageSelect}
              data={['English', 'Filipino', 'Japanese']}
            />
          </div>
          <div className={styles.themeContainer}>
            <h4 className={styles.settingHeader}>Interface theme</h4>
            <h5 className={styles.settingSub}>
              Customize your application theme
            </h5>
            <div className={styles.themeSelectWrapper}>
              <div>
                <div className={styles.themeBox}>
                  <IconSunMoon style={{ color: 'white' }} size="2.2rem" />
                </div>
                <h3>System</h3>
              </div>
              <div>
                <div className={styles.themeBox2}>
                  <IconSun size="2.5rem" />
                </div>
                <h3>Light</h3>
              </div>
              <div>
                <div className={styles.themeBox}>
                  <IconMoonStars style={{ color: 'white' }} size="2rem" />
                </div>
                <h3>Dark</h3>
              </div>
            </div>
          </div>
          <div className={styles.languageContainer}>
            <div>
              <h4 className={styles.settingHeader}>Hour Format</h4>
              <h5 className={styles.settingSub}>
                Select the hour format of the platform
              </h5>
            </div>
            <NativeSelect
              className={styles.languageSelect}
              data={['24-hour', '12-hour']}
            />
          </div>
          <div className={styles.saveContainer}>
            <div className={styles.resetWrapper}>
              <IconArrowBack color="#808080" />
              <h5 className={styles.settingSub}>Reset to defaults</h5>
            </div>
            <div className={styles.resetWrapper}>
              <Button variant="filled" color="#9fa1a2">
                Cancel
              </Button>
              <Button variant="filled" color="#23bab1">
                Save preferences
              </Button>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="notification">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="profile">Settings tab content</Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Setting;
