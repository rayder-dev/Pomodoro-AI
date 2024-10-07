import Style from './styles/timer.module.css';

function Timer() {
  return (
    <>
      <span className={Style.time}>25:00</span>
      <button className={Style.button}>START</button>
    </>
  );
}

export default Timer;
