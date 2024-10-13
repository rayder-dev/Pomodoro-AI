import Footer from '../components/Footer';
import Header from '../components/Header';
import Styles from './styles/home.module.css';

function Privacy() {
  return (
    <>
      <Header />
      <article>
        <div className={Styles['wrapper']}>
          <h1>Privacy Policy</h1>
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
              <strong>1. Information We Collect</strong> When you use Pomodoro,
              we may collect the following types of information: Personal
              Information: Name, email address, and any other information you
              provide during registration. Usage Data: Information about how you
              use the app, including time spent, features used, and settings
              configured. Device Information: Information about your device,
              including IP address, browser type, and operating system.
            </li>
            <li>
              <strong>2. How We Use Your Information</strong> The information we
              collect is used to: Provide and improve our services Customize
              your user experience Communicate with you, including sending
              updates and notifications Analyze usage patterns to enhance app
              functionality
            </li>
            <strong>3. Sharing Your Information</strong> We do not share your
            personal information with third parties except in the following
            circumstances: With Your Consent: When you provide explicit
            permission to share your information. For Legal Reasons: When
            required by law or to protect the rights, property, or safety of our
            users.
            <li>
              <strong>4. Data Security</strong> We implement a variety of
              security measures to protect your personal information. However,
              no method of transmission over the internet or electronic storage
              is 100% secure, and we cannot guarantee absolute security.
            </li>
            <li>
              <strong>5. Your Rights</strong> You have the right to: Access and
              update your personal information Request the deletion of your data
              Opt-out of receiving communications from us
            </li>
            <li>
              <strong>6. Changes to This Privacy Policy</strong> We may update
              this Privacy Policy from time to time. We will notify you of any
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
}

export default Privacy;
