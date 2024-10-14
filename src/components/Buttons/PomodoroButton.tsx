import Styles from './styles/timingButton.module.css';

const PomodoroButton: React.FC = () => {
  return (
    <div className={Styles['timing-container']}>
      <h2 className={Styles['dial-label']}>Pomodoro Time</h2>
      <hr />
      <div className={Styles['timing-btn-container']}>
        <button className={Styles['minus-minute']}> - </button>
        <p className={Styles['time-set']}> 25 </p>
        <button className={Styles['plus-minute']}> + </button>
      </div>
    </div>
  );
};

export default PomodoroButton;
