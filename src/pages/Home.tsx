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
              <h1>An online Pomodoro Timer to boost your productivity</h1>
              <h2>What is Pomofocus?</h2>
              <p>
                Pomofocus is a customizable pomodoro timer that works on desktop
                & mobile browser. The aim of this app is to help you focus on
                any task you are working on, such as study, writing, or coding.
                This app is inspired by <strong> Pomodoro Technique</strong>{' '}
                which is a time management method developed by Francesco
                Cirillo.{' '}
              </p>
              <h2>What is Pomodoro Technique?</h2>
              <p>
                The Pomodoro Technique is created by Francesco Cirillo for a
                more productive way to work and study. The technique uses a
                timer to break down work into intervals, traditionally 25
                minutes in length, separated by short breaks. Each interval is
                known as a pomodoro, from the Italian word for 'tomato', after
                the tomato-shaped kitchen timer that Cirillo used as a
                university student. - <strong>Wikipedia</strong>
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
                <li>Take a longer break for 10 minutes for every 4 cycles</li>
                <li>Iterate until you finish the tasks</li>
              </ol>{' '}
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
