import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
} from '@mantine/core';
import { ContactIconsList } from '../components/icons/Contact-Icons';
import bg from '/assets/svg/bg.svg';
import Styles from './styles/contact.module.css';
import PomodoroLogo from '../components/logo/Pomodoro-logo';

function Contact() {
  return (
    <div className={Styles['contact-container']}>
      <PomodoroLogo to="/" />
      <h2 className={Styles['login-subtext']}>Contact Us</h2>
      <Paper shadow="md" radius="lg">
        <div className={Styles.wrapper}>
          <div
            className={Styles.contacts}
            style={{ backgroundImage: `url(${bg})` }}
          >
            <Text fz="lg" fw={700} className={Styles.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form
            className={Styles.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <Text fz="lg" fw={700} className={Styles.title}>
              Get in touch
            </Text>

            <div className={Styles.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput
                  label="Your email"
                  placeholder="hello@mantine.dev"
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
    </div>
  );
}

export default Contact;
