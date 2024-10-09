import Styles from './styles/home.module.css';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import Timer from '../components/Timer';
import Card from '../components/cards/Card';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className={Styles['container']}>
            <Timer />
          </div>
        </section>

        <section>
          <div></div>
        </section>
      </main>
    </>
  );
}

export default Home;
