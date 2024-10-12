import React from 'react';
import Styles from './styles/timing-button.module.css';

const BreakTimingBtn = () => {
  return (
    <div className={Styles['timing-container']}>
      <h2 className={Styles['dial-label']}>Break Time</h2>
      <hr />
      <div className={Styles['timing-btn-container']}>
        <button className={Styles['minus-minute']}> - </button>
        <p className={Styles['time-set']}> 5 </p>
        <button className={Styles['plus-minute']}> + </button>
      </div>
    </div>
  );
};

export default BreakTimingBtn;
