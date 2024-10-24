import Styles from './home.module.css';
import Header from '../../components/Header/Header';
import Timer from '../../components/Timer/Timer';
import Footer from '../../components/Footer/Footer';
import Todo from '../../components/Todo/Todo';
import Tabs from '../../components/Tabs/Tabs';
import Length from '../../components/Length/Length';
import PomoTimeline from '../../components/Timeline/PomoTimeline';
import TaskTally from '../../components/Tally/TaskTally';
import { Divider } from '@mantine/core';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className={Styles['stars']} />
          <div className={Styles['twinkling']} />
          <div className={Styles['grid-container']}>
            <div className={`${Styles['grid-item']} ${Styles['item1']}`}>
              <Tabs />
              <Timer />
            </div>
            <div className={`${Styles['grid-item']} ${Styles['item2']}`}>
              <Todo />
            </div>
            <div className={`${Styles['grid-item']} ${Styles['item3']}`}>
              <Length />
              <PomoTimeline />
            </div>
          </div>
        </section>

        <section>
          <div className={Styles['tally-container']}>
            <TaskTally
              title="Task List"
              value={346}
              color="#f77170"
              subtitle="Today's Ongoing tasks"
            />
            <TaskTally
              title="Task Completed"
              value={795}
              color="#36c890"
              subtitle="Total completed tasks"
            />
            <TaskTally
              title="Current Streak"
              value={83}
              color="#f9a976"
              subtitle="Current streak of daily productivity"
            />
            <TaskTally
              title="Longest Streak"
              value={257}
              color="#2083b0"
              subtitle="Longest streak of daily productivity"
            />
          </div>
        </section>
        <Divider size="xl" style={{ width: '90%', margin: '0 auto' }} />
        <section>
          <article>
            <h1>Boost Your Productivity with an Online Pomodoro Timer</h1>
            <h2>What is Pomodoro?</h2>
            <p>
              Pomodoro is a customizable timer designed to help you focus on
              your tasks & avoid procrastination, whether you're studying,
              writing, or coding. Available on both desktop and mobile browsers,
              this app takes inspiration from the
              <strong> Pomodoro Technique</strong>, a time management method
              developed by Francesco Cirillo.
            </p>
            <h2>Understanding the Pomodoro Technique</h2>
            <p>
              The Pomodoro Technique is a productivity method that breaks work
              into intervals, typically 25 minutes, with short breaks in
              between. Each work interval is called a pomodoro, named after the
              tomato-shaped kitchen timer Cirillo used during his university
              days.
            </p>
            <h2>How to use the Pomodoro Timer?</h2>
            <ol>
              <li>Add tasks to work on today</li>
              <li>Select a task to work on</li>
              <li>Start timer and focus on the task for 25 minutes</li>
              <li>Take a break for 5 minutes when the alarm ring</li>
              <li>
                After every 4 pomodoros, take a longer break of 10 minutes.
              </li>
              <li>Iterate until you finish the tasks</li>
            </ol>
            <h2>Additional Features of Pomodoro</h2>
            <ul>
              <li>
                <strong>Procrastinator Life Calendar</strong>: Inspired by Tim
                Urban's TED Talk "
                <a href="https://www.youtube.com/watch?v=arj7oStGLkU">
                  <strong>Inside the Mind of a Master Procrastinator</strong>
                </a>
                ", this powerful visual tool helps you track and reflect on how
                you've spent each week of your life. Each week of a 90-year
                lifespan is represented by a single box, creating a long-term
                view of your productivity. It automatically logs the tasks
                you've completed weekly, and the more work you accomplish, the
                more intense the color of the box becomes. Over time, this
                visualization helps reveal patterns in your productivity,
                highlighting periods of hard work and procrastination, offering
                a unique perspective on how you’ve utilized your time. It’s more
                than just a calendar—it’s a reflection of your life’s progress.
              </li>
              <li>
                <strong>Notepad</strong>: This feature allows you to jot down
                quick notes or maintain a journal entry for the current task.
                You can easily review all of your notes, neatly listed with
                dates and task titles, on the dedicated Notes page of the
                website.
              </li>
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
