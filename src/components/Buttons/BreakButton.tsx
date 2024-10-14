import Styles from './styles/timingButton.module.css';

const BreakButton: React.FC = () => {
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

export default BreakButton;
