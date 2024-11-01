import { FC } from 'react';
import { Text, Title, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import styles from './comingSoon.module.css';

interface ComingSoonProps {
  onClick: () => void;
}

const ComingSoon: FC<ComingSoonProps> = ({ onClick }) => {
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });

  const handleClick = () => {
    if (form.validate().hasErrors) {
      return; // Stop if validation fails
    }
    onClick();
  };

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

        <form onSubmit={form.onSubmit(() => {})}>
          <div className={styles.controls}>
            <TextInput
              classNames={{ input: styles.input, root: styles.inputWrapper }}
              placeholder="Your email"
              type="text"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue('email', event.currentTarget.value)
              }
              error={form.errors.email && 'Invalid email'}
            />
            <Button
              onClick={handleClick}
              type="submit"
              className={styles.control}
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
