import { Group, ActionIcon, rem } from '@mantine/core';
import {
  IconBrandYoutube,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import Styles from './footer.module.css';
import { FC } from 'react';

const links = [
  { label: 'Home' },
  { label: 'Terms' },
  { label: 'Privacy' },
  { label: 'FAQ' },
];

interface FooterProps {
  section: (value: string) => void;
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const scrollToDown = () =>
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

const Footer: FC<FooterProps> = ({ section }) => {
  const selectSection = (label: string) => {
    if (label === 'Home') {
      scrollToTop();
    } else {
      scrollToDown();
    }
    section(label);
  };

  const items = links.map((link) => (
    <a key={link.label} onClick={() => selectSection(link.label)}>
      {link.label}
    </a>
  ));

  return (
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.inner}>
          <Group className={Styles.links}>{items}</Group>
          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <a
              href="https://www.youtube.com/watch?v=arj7oStGLkU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandYoutube
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </a>
            <a
              href="https://github.com/hernandezraymondm/Pomodoro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandGithub
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/raymond-hernandez-83703327a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandLinkedin
                  style={{ width: rem(22), height: rem(22) }}
                  stroke={1.2}
                />
              </ActionIcon>
            </a>
          </Group>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
