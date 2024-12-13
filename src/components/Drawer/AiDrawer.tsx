import { FC, useState, useEffect } from 'react';
import { useOrientation } from '@mantine/hooks';
import { IconCircleArrowUp, IconTrash } from '@tabler/icons-react';
import {
  Drawer,
  TextInput,
  ScrollArea,
  Paper,
  ActionIcon,
  Loader,
  Button,
} from '@mantine/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import styles from './aiDrawer.module.css';
import Gpt from '../Badge/Gpt';

interface AiDrawerProps {
  opened: boolean;
  close: () => void;
}

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const AiDrawer: FC<AiDrawerProps> = ({ opened, close }) => {
  const { type } = useOrientation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_REACT_APP_GEMINI_API_KEY
  );
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage: Message = { role: 'user', content: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setIsLoading(true);

      try {
        const result = await model.generateContent(input);
        const aiResponse = result.response.text();
        const aiMessage: Message = { role: 'ai', content: aiResponse };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error generating AI response:', error);
        let errorMessage = 'An error occurred. Please try again.';

        const aiErrorMessage: Message = {
          role: 'ai',
          content: errorMessage,
        };
        setMessages((prevMessages) => [...prevMessages, aiErrorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClearHistory = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title={
        <div className={styles.aiLogo}>
          <div className={styles['openai-logo']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles['openai-icon']}
            >
              <path
                fill="#10A37F"
                d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5907 8.3829 14.6108 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
              />
            </svg>
          </div>
          <span className={styles.text}>Ask AI</span>
        </div>
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
        style={{ height: type === 'landscape-primary' ? '75vh' : '20vh' }}
        className={styles.chatContainer}
      >
        <ScrollArea>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, index) => (
              <Paper
                key={index}
                className={`${styles.message} ${styles[msg.role]}`}
                shadow="xs"
              >
                {msg.content}
              </Paper>
            ))}
            {isLoading && (
              <Paper className={`${styles.message} ${styles.ai}`} shadow="xs">
                <div className={styles.loadingContainer}>
                  <Loader color="#36c890" size="sm" />
                </div>
              </Paper>
            )}
          </div>
        </ScrollArea>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.clearHistoryContainer}>
          <Gpt />
          <Button variant="outline" color="red" onClick={handleClearHistory}>
            <IconTrash size={16} />
            Clear History
          </Button>
        </div>
        <TextInput
          className={styles.inputField}
          data-autofocus
          label="Ask your question"
          placeholder="Type your question here..."
          mt="md"
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          onKeyPress={(event) => event.key === 'Enter' && handleSendMessage()}
          rightSection={
            <ActionIcon
              variant="transparent"
              color="#36c890"
              onClick={handleSendMessage}
              disabled={isLoading}
            >
              <IconCircleArrowUp size={30} stroke={2} />
            </ActionIcon>
          }
        />
      </div>
    </Drawer>
  );
};

export default AiDrawer;
