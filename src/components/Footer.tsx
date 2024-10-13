import { Group, ActionIcon, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons-react';
import Styles from './styles/footer.module.css';
import PomodoroLogo from './logo/Pomodoro-logo';

const links = [
  { link: '/contact', label: 'Contact' },
  { link: '/privacy', label: 'Privacy' },
  { link: '/terms', label: 'Terms' },
  { link: '/faq', label: 'FAQ' },
  { link: '/gallery', label: 'Gallery' },
];

function Footer() {
  const items = links.map((link) => (
    <Link key={link.label} to={link.link}>
      {link.label}
    </Link>
  ));

  return (
    <div className={Styles.footer}>
      <div className={Styles.inner}>
        <span className={Styles['footer-logo']}>
          <PomodoroLogo to="/" />
        </span>

        <Group className={Styles.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}

export default Footer;
