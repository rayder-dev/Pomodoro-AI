import { FC, useState } from 'react';
import { useOrientation } from '@mantine/hooks';
import { Drawer, TextInput, Button, ScrollArea, Paper } from '@mantine/core';
import { IconXboxX } from '@tabler/icons-react';
import styles from './aiDrawer.module.css';
import PomodoroLogo from '../Logo/PomodoroLogo';

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
      title={<PomodoroLogo to="/" isDarkMode={false} />}
      size="37%"
      zIndex={3000}
      lockScroll={false}
      closeButtonProps={{
        icon: <IconXboxX size={20} stroke={1.5} />,
      }}
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
          data-autofocus
          label="Ask your question"
          // placeholder={type}
          placeholder="Type your question here..."
          mt="md"
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          onKeyPress={(event) => event.key === 'Enter' && handleSendMessage()}
        />
      </div>
    </Drawer>
  );
};

export default AiDrawer;
