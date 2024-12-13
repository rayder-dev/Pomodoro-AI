import { FC } from 'react';
import styles from './gpt.module.css';

const Gpt: FC = () => {
  return (
    <div className={styles['gpt-badge']}>
      <a
        href="https://chatgpt.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles['brutalist-button']} ${styles['openai']}`}
      >
        <div className={styles['button-text']}>
          <span>Powered by</span>
          <span>ChatGPT</span>
        </div>
      </a>
    </div>
  );
};

export default Gpt;
