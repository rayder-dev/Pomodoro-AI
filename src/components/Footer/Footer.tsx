import { Group, ActionIcon, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  IconBrandYoutube,
  IconBrandGithub,
  IconBrandTiktok,
} from '@tabler/icons-react';
import Styles from './footer.module.css';
import { FC } from 'react';

const links = [
  { link: '/contact', label: 'Contact' },
  { link: '/terms', label: 'Terms' },
  { link: '/privacy', label: 'Privacy' },
  { link: '/faq', label: 'FAQ' },
  { link: '/404', label: 'Gallery' },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer: FC = () => {
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
          <Group className={Styles.links}>{items}</Group>
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
            <Link to="https://www.tiktok.com/@inspectorelement">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandTiktok
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Link>
          </Group>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
