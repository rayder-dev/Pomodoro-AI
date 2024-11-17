import { FC, useState } from 'react';
import { useOrientation } from '@mantine/hooks';
import { IconCircleArrowUpFilled } from '@tabler/icons-react';
import { Drawer, TextInput, ScrollArea, Paper } from '@mantine/core';
import { IconBrandOpenai } from '@tabler/icons-react';
import styles from './aiDrawer.module.css';
import { GptBadge } from '..';

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
            <span className={styles.text}>Ask AI</span>
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
      shadow="5px 0 10px rgba(24, 94, 224, 0.3), 6px 0 12px rgba(0, 0, 0, 0.3)"
      overlayProps={{
        backgroundOpacity: 0.1,
        blur: 0,
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
        <GptBadge />
      </div>
    </Drawer>
  );
};

export default AiDrawer;
