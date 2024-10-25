import { FC } from 'react';
import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import Styles from './faq.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const Faq: FC = () => {
  return (
    <>
      <Header />
      <article>
        <div className={Styles['wrapper']}>
          <div className={Styles['faq-container']}>
            <Container size="sm">
              <Title ta="center" className={Styles.title}>
                Frequently Asked Questions
              </Title>

              <Accordion
                chevronPosition="right"
                defaultValue="reset-password"
                chevronSize={26}
                variant="separated"
                disableChevronRotation
                styles={{
                  label: { color: 'var(--mantine-color-black)' },
                  item: { border: 0 },
                }}
                chevron={
                  <ThemeIcon radius="xl" className={Styles.gradient} size={26}>
                    <IconPlus
                      style={{
                        width: rem(18),
                        height: rem(18),
                      }}
                      stroke={1.5}
                    />
                  </ThemeIcon>
                }
              >
                <Accordion.Item className={Styles.item} value="reset-password">
                  <Accordion.Control>
                    How can I reset my password?
                  </Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={Styles.item} value="another-account">
                  <Accordion.Control>
                    Can I create more that one account?
                  </Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={Styles.item} value="newsletter">
                  <Accordion.Control>
                    How can I subscribe to monthly newsletter?
                  </Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={Styles.item} value="credit-card">
                  <Accordion.Control>
                    Do you store credit card information securely?
                  </Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={Styles.item} value="payment">
                  <Accordion.Control>
                    What payment systems to you work with?
                  </Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Container>
          </div>{' '}
        </div>
      </article>
      <Footer />
    </>
  );
};

export default Faq;
