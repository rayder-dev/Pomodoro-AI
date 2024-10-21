import StartButton from '../Buttons/StartButton';
import Styles from './timer.module.css';

const Timer: React.FC = () => {
  return (
    <div className={Styles['clock-container']}>
      <div className={Styles['clock-outer']}>
        <div className={Styles['clock-inner']}>
          <div className={Styles['clock-center']}>
            <div className={Styles['label']}>SESSION</div>
            <div className={Styles['time']}>25:00</div>
            <StartButton text="START" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
