import { FC } from 'react';
import { Text, Title, TextInput, Button } from '@mantine/core';
import styles from './comingSoon.module.css';

const ComingSoon: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <Title className={styles.title}>Coming Soon...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and
          community QA sessions. Our newsletter is once a week, every Sunday.
        </Text>

        <div className={styles.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: styles.input, root: styles.inputWrapper }}
          />
          <Button className={styles.control}>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
