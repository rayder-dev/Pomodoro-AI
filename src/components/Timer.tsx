import Style from './styles/timer.module.css';

function Timer() {
  return (
    <div className={Style['clock-container']}>
      <div className={Style['clock-outer']}>
        <div className={Style['clock-inner']}>
          <div className={Style['clock-center']}>
            <div className={Style['label']}>POMODORO</div>
            <div className={Style['time']}>25:00</div>
            <button className={Style['start']}>START</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
