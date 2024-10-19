import { Title } from '@mantine/core';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Styles from '../Home/home.module.css';

const Privacy: React.FC = () => {
  return (
    <>
      <Header />
      <article>
        <div className={Styles['wrapper']}>
          <Title className={Styles['title']}>Privacy Policy</Title>
          <p>
            <strong>Effective Date:</strong> November 13, 2024
          </p>
          <p>
            At Pomodoro, we are committed to protecting your privacy and
            ensuring your personal information is safe and secure. This Privacy
            Policy outlines how we collect, use, and safeguard your data when
            you use our services.
          </p>
          <ol>
            <li>
              <strong>Information We Collect</strong> When you use Pomodoro, we
              may collect the following types of information: Personal
              Information: Name, email address, and any other information you
              provide during registration. Usage Data: Information about how you
              use the app, including time spent, features used, and settings
              configured. Device Information: Information about your device,
              including IP address, browser type, and operating system.
            </li>
            <li>
              <strong>How We Use Your Information</strong> The information we
              collect is used to: Provide and improve our services Customize
              your user experience Communicate with you, including sending
              updates and notifications Analyze usage patterns to enhance app
              functionality
            </li>
            <strong>Sharing Your Information</strong> We do not share your
            personal information with third parties except in the following
            circumstances: With Your Consent: When you provide explicit
            permission to share your information. For Legal Reasons: When
            required by law or to protect the rights, property, or safety of our
            users.
            <li>
              <strong>Data Security</strong> We implement a variety of security
              measures to protect your personal information. However, no method
              of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </li>
            <li>
              <strong>Your Rights</strong> You have the right to: Access and
              update your personal information Request the deletion of your data
              Opt-out of receiving communications from us
            </li>
            <li>
              <strong>Changes to This Privacy Policy</strong> We may update this
              Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page and updating the
              effective date.
            </li>
          </ol>
          Contact Us If you have any questions about this Privacy Policy.
        </div>
      </article>
      <Footer />
    </>
  );
};

export default Privacy;
