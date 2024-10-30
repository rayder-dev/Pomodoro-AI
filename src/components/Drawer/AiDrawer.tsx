import { FC, useState } from 'react';
import { useOrientation } from '@mantine/hooks';
import { IconCircleArrowUpFilled } from '@tabler/icons-react';
import { Drawer, TextInput, ScrollArea, Paper } from '@mantine/core';
import { IconBrandOpenai } from '@tabler/icons-react';
import styles from './aiDrawer.module.css';
import Gpt from '../Badge/Gpt';

interface AiDrawerProps {
  opened: boolean;
  close: () => void;
}

const AiDrawer: FC<AiDrawerProps> = ({ opened, close }) => {
  const { type } = useOrientation();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title={
        <>
          <div className={styles.aiLogo}>
            <IconBrandOpenai className={styles.logo} size="1.8rem" />{' '}
            <span className={styles.text}>Ask GPT</span>
          </div>
        </>
      }
      size="37%"
      zIndex={3000}
      lockScroll={false}
      position={type === 'landscape-primary' ? 'left' : 'bottom'}
      transitionProps={{
        transition: type === 'landscape-primary' ? 'fade-right' : 'fade-up',
        duration: 150,
        timingFunction: 'linear',
      }}
      className={styles.drawerContainer}
    >
      <div
        style={{ height: type === 'landscape-primary' ? '83vh' : '28vh' }}
        className={styles.chatContainer}
      >
        <ScrollArea>
          {messages.map((msg, index) => (
            <Paper key={index} className={styles.message} shadow="xs">
              {msg}
            </Paper>
          ))}
        </ScrollArea>
      </div>
      <div className={styles.inputContainer}>
        <TextInput
          className={styles.inputField}
          data-autofocus
          label="Ask your question"
          placeholder="Type your question here..."
          mt="md"
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          onKeyPress={(event) => event.key === 'Enter' && handleSendMessage()}
          rightSection={<IconCircleArrowUpFilled size={30} stroke={2} />} // Add the icon here
        />
        <Gpt />
      </div>
    </Drawer>
  );
};

export default AiDrawer;
