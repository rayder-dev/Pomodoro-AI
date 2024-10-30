import { FC } from 'react';
import { Title } from '@mantine/core';
import { IconVolume } from '@tabler/icons-react';
import styles from '../Home/home.module.css';

interface Pomodoro {
  alarmSound: HTMLAudioElement;
}

const Pomodoro: FC<Pomodoro> = ({ alarmSound }) => {
  return (
    <>
      <article>
        <Title>Boost Your Productivity with an Online Pomodoro Timer</Title>
        {/* <h1>Boost Your Productivity with an Online Pomodoro Timer</h1> */}
        <h2>What is Pomodoro?</h2>
        <p>
          Pomodoro is a customizable timer designed to help you focus on your
          tasks & avoid procrastination, whether you're studying, writing, or
          coding. Available on both desktop and mobile browsers, this app takes
          inspiration from the
          <strong> Pomodoro Technique</strong>, a time management method
          developed by Francesco Cirillo.
        </p>
        <h2>Understanding the Pomodoro Technique</h2>
        <p>
          The Pomodoro Technique is a productivity method that breaks work into
          intervals, typically 25 minutes, with short breaks in between. Each
          work interval is called a pomodoro, named after the tomato-shaped
          kitchen timer Cirillo used during his university days.
        </p>
        <h2>How to use the Pomodoro Timer?</h2>
        <ol>
          <li>Add tasks to work on today</li>
          <li>Select a task to work on</li>
          <li>Adjust the timer accordingly</li>
          <li>
            Start <b>session</b> timer and focus on the task <i>(25 minutes)</i>
          </li>
          <li>
            When the{' '}
            <span
              onClick={() => alarmSound.play()}
              className={styles['alarm-text']}
            >
              <strong>
                <IconVolume
                  size="1.2rem"
                  style={{ marginBottom: '-2px', marginRight: '2px' }}
                />
                alarm
              </strong>
            </span>{' '}
            rings, take a <b>short break</b> <i>(5 minutes)</i>
          </li>
          <li>
            After every 4 pomodoros, take a <b>long break</b>{' '}
            <i>(10 minutes)</i>
          </li>
          <li>Iterate until you finish the tasks</li>
        </ol>
        <h2>Additional Features of Pomodoro</h2>
        <ul>
          <li>
            <strong>Ask GPT</strong>: This cutting-edge feature utilizes the
            power of ChatGPT to assist you in real-time. It can help answer your
            questions, provide insightful suggestions, and generate creative
            ideas. Whether you're seeking a quick summary, brainstorming new
            concepts, or just looking for a bit of motivation, Ask AI is your
            go-to companion, available 24/7 to enhance your productivity and
            creativity. It's like having an intelligent partner for every step
            of your journey.
          </li>
          <br />
          <li>
            <strong>Procrastinator Life Calendar</strong>: Inspired by Tim
            Urban's TED Talk "
            <a href="https://www.youtube.com/watch?v=arj7oStGLkU">
              <strong>Inside the Mind of a Master Procrastinator</strong>
            </a>
            ", this powerful visual tool helps you track and reflect on how
            you've spent each week of your life. Each week of a 90-year lifespan
            is represented by a single box, creating a long-term view of your
            productivity. It automatically logs the tasks you've completed
            weekly, and the more work you accomplish, the more intense the color
            of the box becomes. Over time, this visualization helps reveal
            patterns in your productivity, highlighting periods of hard work and
            procrastination, offering a unique perspective on how you’ve
            utilized your time. It’s more than just a calendar—it’s a reflection
            of your life’s progress.
          </li>
        </ul>
      </article>
    </>
  );
};

export default Pomodoro;
