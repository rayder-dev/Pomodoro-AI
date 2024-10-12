import React from 'react';
import Styles from './styles/timing-button.module.css';

const PomodoroTimingBtn = () => {
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

export default PomodoroTimingBtn;
