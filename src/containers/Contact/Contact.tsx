import {
  Title,
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
} from '@mantine/core';
import { ContactIconsList } from '../../components/Icons/ContactIcons';
import bg from '/assets/svg/bg.svg';
import Styles from './contact.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <div className={Styles['contact-container']}>
        <Paper className={Styles['paper']} shadow="md" radius="lg">
          <Title className={Styles['title']}>Contact Us</Title>
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
      </div>
      <Footer />
    </>
  );
};

export default Contact;
