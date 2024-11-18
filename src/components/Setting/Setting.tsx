import { FC, useState } from 'react';
import {
  IconSunMoon,
  IconSun,
  IconMoonStars,
  IconArrowBack,
  IconX,
  IconCheck,
} from '@tabler/icons-react';
import {
  Button,
  NativeSelect,
  NumberInput,
  rem,
  Switch,
  Tabs,
  Title,
  useMantineTheme,
} from '@mantine/core';
import styles from './setting.module.css';

const Setting: FC = () => {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles.settingContainer}>
      <Title ta="left" className={styles.title}>
        Settings
      </Title>
      <Tabs color="#23bab1" defaultValue="appearance">
        <Tabs.List className={styles.tabList} justify="flex-start">
          <Tabs.Tab value="appearance">Appearance</Tabs.Tab>
          <Tabs.Tab value="timer">Timer</Tabs.Tab>
          <Tabs.Tab value="notification">Notification</Tabs.Tab>
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
          <div className={styles.darkRunningContainer}>
            <div>
              <h4 className={styles.settingHeader}>Dark mode when running</h4>
              <h5 className={styles.settingSub}>
                Enable low-light mode to reduce eye strain during focus sessions
              </h5>
            </div>
            <Switch
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              color="#23bab1"
              size="lg"
              thumbIcon={
                checked ? (
                  <IconCheck
                    style={{ width: rem(12), height: rem(12) }}
                    color={theme.colors.teal[6]}
                    stroke={3}
                  />
                ) : (
                  <IconX
                    style={{ width: rem(12), height: rem(12) }}
                    color={theme.colors.red[6]}
                    stroke={3}
                  />
                )
              }
            />
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="timer">
          <div className={styles.languageContainer}>
            <div>
              <h4 className={styles.settingHeader}>Hour format</h4>
              <h5 className={styles.settingSub}>
                Select the hour format of the platform
              </h5>
            </div>
            <NativeSelect
              className={styles.languageSelect}
              data={['24-hour', '12-hour']}
            />
          </div>
          <div className={styles.darkRunningContainer}>
            <div>
              <h4 className={styles.settingHeader}>Auto start break</h4>
              <h5 className={styles.settingSub}>
                Automatically initiate breaks for balanced work intervals
              </h5>
            </div>
            <Switch
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              color="#23bab1"
              size="lg"
              thumbIcon={
                checked ? (
                  <IconCheck
                    style={{ width: rem(12), height: rem(12) }}
                    color={theme.colors.teal[6]}
                    stroke={3}
                  />
                ) : (
                  <IconX
                    style={{ width: rem(12), height: rem(12) }}
                    color={theme.colors.red[6]}
                    stroke={3}
                  />
                )
              }
            />
          </div>
          <div className={styles.darkRunningContainer}>
            <div>
              <h4 className={styles.settingHeader}>Auto start pomodoro</h4>
              <h5 className={styles.settingSub}>
                Begin focus sessions automatically for seamless productivity
              </h5>
            </div>
            <Switch
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              color="#23bab1"
              size="lg"
              thumbIcon={
                checked ? (
                  <IconCheck
                    style={{ width: rem(12), height: rem(12) }}
                    color={theme.colors.teal[6]}
                    stroke={3}
                  />
                ) : (
                  <IconX
                    style={{ width: rem(12), height: rem(12) }}
                    color={theme.colors.red[6]}
                    stroke={3}
                  />
                )
              }
            />
          </div>
          <div className={styles.darkRunningContainer}>
            <div>
              <h4 className={styles.settingHeader}>Long break interval</h4>
              <h5 className={styles.settingSub}>
                Set extended rest periods for enhanced recovery
              </h5>
            </div>
            <NumberInput defaultValue={3} style={{ maxWidth: '6em' }} />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="notification">Notification tab content</Tabs.Panel>
      </Tabs>
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
    </div>
  );
};

export default Setting;
