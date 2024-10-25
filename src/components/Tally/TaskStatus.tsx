import { FC } from 'react';
import Styles from './taskStatus.module.css';

const TaskStatus: FC = () => {
  return (
    <div className={Styles['tally-container']}>
      <div className={Styles['tally-wrapper']}>
        <div className={Styles['item1']}>
          Sessions: <strong>0</strong>
        </div>
        <div className={Styles['item2']}>
          Finish At: <strong>00:20</strong> (0.9h)
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
