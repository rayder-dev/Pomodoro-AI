import StartButton from './buttons/Start-Btn';
import Styles from './styles/timer.module.css';

function Timer() {
  return (
    <div className={Styles['clock-container']}>
      <div className={Styles['clock-outer']}>
        <div className={Styles['clock-inner']}>
          <div className={Styles['clock-center']}>
            <div className={Styles['label']}>POMODORO</div>
            <div className={Styles['time']}>25:00</div>
            <StartButton text="START" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
