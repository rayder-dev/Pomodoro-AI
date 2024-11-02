import { FC } from 'react';
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
} from '@mantine/core';
import Styles from './contact.module.css';
import { ContactIcons } from '../../components';

const Contact: FC = () => {
  return (
    <>
      <Paper className={Styles['paper']} radius="lg">
        <div className={Styles.wrapper}>
          <div className={Styles.contacts}>
            <Text fz="xl" fw={700} className={Styles.title} c="#fff">
              Contact information
            </Text>

            <ContactIcons />
          </div>

          <form
            className={Styles.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <Text fz="xl" fw={700} className={Styles.title}>
              Get in touch
            </Text>

            <div className={Styles.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput
                  label="Your email"
                  placeholder="yahoo@gmail.com"
                  required
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={Styles.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </>
  );
};

export default Contact;
