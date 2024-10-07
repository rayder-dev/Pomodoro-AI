import Styles from './styles/home.module.css';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import Timer from '../components/Timer';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={Styles['container']}>
          <Card image="box1.jpg" borderPosition="left">
            <Timer />
          </Card>
          <Card image="box2.jpg" borderPosition="right">
            <Tasks />
          </Card>
        </div>
      </main>
    </>
  );
}

export default Home;
