import { FC } from 'react';
import { Title } from '@mantine/core';
import styles from '../Home/home.module.css';

const Terms: FC = () => {
  return (
    <>
      <article>
        <Title className={styles['title']}>Terms and Conditions</Title>
        <p>
          <strong>Effective Date:</strong> November 13, 2024
        </p>
        <p>
          Welcome to Pomodoro! This project is a personal endeavor intended
          solely for learning and development purposes. By using our app, you
          agree to comply with and be bound by the following terms and
          conditions. Please review them carefully.
        </p>
        <ol>
          <li>
            <strong>Personal Use Only </strong> Pomodoro is a personal project
            created for the purpose of learning web development. It is not
            intended for commercial use. All content and features are provided
            for educational purposes only.
          </li>
          <li>
            <strong>No Warranty</strong> Pomodoro is provided "as is" without
            any warranties of any kind. We do not guarantee that the app will be
            available at all times or that it will be free from errors or
            viruses. Use of the app is at your own risk.{' '}
          </li>
          <li>
            <strong>Intellectual Property</strong> All content within Pomodoro,
            including text, graphics, and logos, is either the property of
            Pomodoro or used with permission. This project respects the
            intellectual property rights of others, and you should too.{' '}
          </li>
          <li>
            <strong>No Liability</strong> We will not be liable for any damages
            arising from the use or inability to use Pomodoro. This includes,
            but is not limited to, direct, indirect, incidental, and
            consequential damages.{' '}
          </li>
          <li>
            <strong>Changes to Terms</strong> These terms may be updated from
            time to time. Changes will be effective upon posting the updated
            terms on our app. Your continued use of Pomodoro after any changes
            constitutes acceptance of the new terms.{' '}
          </li>
          <li>
            <strong>Contact Us</strong> If you have any questions or concerns
            about these Terms and Conditions.
          </li>
        </ol>
      </article>
    </>
  );
};

export default Terms;
