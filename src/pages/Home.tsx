import Styles from './styles/home.module.css';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Music from '../components/Music';
import BookCard from '../components/cards/Book-Card';
import PomodoroBtn from '../components/buttons/Pomodoro-Timing-Btn';
import BreakBtn from '../components/buttons/Break-Timing-Btn';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className={Styles['bg-container']}>
            <div className={Styles['border']}>
              <div className={`${Styles['container']} ${Styles['left']}`}>
                <PomodoroBtn />
                <BreakBtn />
                <BookCard />
              </div>
              <Timer />
              <div className={`${Styles['container']} ${Styles['right']}`}>
                <BookCard />
                <Music />
              </div>
            </div>
          </div>
        </section>

        <section>
          <article>
            <div className={`${Styles['article-container']}`}>
              <h1>Boost Your Productivity with an Online Pomodoro Timer</h1>
              <h2>What is Pomodoro?</h2>
              <p>
                Pomodoro is a customizable timer designed to help you focus on
                your tasks, whether you're studying, writing, or coding.
                Available on both desktop and mobile browsers, this app takes
                inspiration from the
                <strong> Pomodoro Technique</strong>, a time management method
                developed by Francesco Cirillo.
              </p>
              <h2>Understanding the Pomodoro Technique</h2>
              <p>
                The Pomodoro Technique is a productivity method that breaks work
                into intervals, typically 25 minutes, with short breaks in
                between. Each work interval is called a pomodoro, named after
                the tomato-shaped kitchen timer Cirillo used during his
                university days.
              </p>
              <h2>How to use the Pomodoro Timer?</h2>
              <ol>
                <li>Add tasks to work on today</li>
                <li>
                  Set estimate pomodoros (1 = 25min of work) for each tasks
                </li>
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
                  <strong>Notepad</strong>: Quickly jot down notes without
                  leaving the app, keeping all your thoughts and to-dos in one
                  place.
                </li>
                <li>
                  <strong>Procrastinator Life Calendar</strong>: Inspired by Tim
                  Urban's TED Talk "
                  <strong>Inside the Mind of a Master Procrastinator</strong>",
                  this powerful visual tool helps you track and reflect on how
                  you've spent each week of your life. Each week of a 90-year
                  lifespan is represented by a single box, creating a long-term
                  view of your productivity. Log the tasks you've completed
                  weekly, and the more work you accomplish, the more intense the
                  color of the box becomes. Over time, this visualization helps
                  reveal patterns in your productivity, highlighting periods of
                  hard work and procrastination, offering a unique perspective
                  on how you’ve utilized your time. It’s more than just a
                  calendar—it’s a reflection of your life’s progress.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
