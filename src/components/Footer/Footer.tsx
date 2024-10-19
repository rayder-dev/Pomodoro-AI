import { Group, ActionIcon, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  IconBrandYoutube,
  IconBrandGithub,
  IconBrandInstagram,
} from '@tabler/icons-react';
import Styles from './footer.module.css';

const links = [
  { link: '/contact', label: 'Contact' },
  { link: '/terms', label: 'Terms' },
  { link: '/privacy', label: 'Privacy' },
  { link: '/faq', label: 'FAQ' },
  { link: '/404', label: 'Gallery' },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer: React.FC = () => {
  const items = links.map((link) => (
    <Link key={link.label} to={link.link} onClick={scrollToTop}>
      {link.label}
    </Link>
  ));

  return (
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.inner}>
          {/* <span className={Styles['footer-logo']}>
            <PomodoroLogo to="/" />
          </span> */}

          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <Link to="https://www.youtube.com/watch?v=arj7oStGLkU">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandYoutube
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Link>
            <Link to="https://github.com/hernandezraymondm/Pomodoro">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandGithub
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Link>
            <Link to="https://github.com/hernandezraymondm/Pomodoro">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandInstagram
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Link>
          </Group>
          <Group className={Styles.links}>{items}</Group>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
