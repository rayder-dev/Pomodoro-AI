import Styles from './styles/home.module.css';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Music from '../components/Music';
import BookCard from '../components/cards/Book-Card';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className={Styles['bg-container']}>
            <div className={Styles['border']}>
              <div className={Styles['container']}>
                <BookCard />
                <Music />
              </div>
              <Timer />
              <div className={Styles['container']}>
                <BookCard />
                <Music />
              </div>
            </div>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}

export default Home;
