import { Container, Title, Text, Button, Group } from '@mantine/core';
import Illustration from './Illustration';
import Styles from './notFound.module.css';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <Container className={Styles.root}>
      <div className={Styles.inner}>
        <Illustration className={Styles.image} />
        <div className={Styles.content}>
          <Title className={Styles.title}>Nothing to see here</Title>
          <Text c="dimmed" size="lg" ta="center" className={Styles.description}>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <Link to="/">
              <Button size="md">Take me back to home page</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
