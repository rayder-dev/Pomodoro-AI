import { FC, useState, useEffect, useRef } from 'react';
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
import ReactMarkdown from 'react-markdown'; // Importing ReactMarkdown
import styles from './aiDrawer.module.css';
import Gpt from '../Badge/Gpt';
import GptLogo from '../Icon/GptLogo';

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
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage: Message = { role: 'user', content: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setIsLoading(true);

      try {
        const result = await model.generateContent(input);
        const aiResponse = await result.response.text(); // Await the text
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
            <GptLogo />
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
        <ScrollArea viewportRef={scrollAreaRef}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, index) => (
              <Paper
                key={index}
                className={`${styles.message} ${styles[msg.role]}`}
                shadow="xs"
              >
                {msg.role === 'ai' ? (
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                ) : (
                  msg.content
                )}
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
