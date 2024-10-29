import { FC } from 'react';
import Styles from './taskStatus.module.css';

interface TaskStatusProps {
  sessionStatus: { count: number; time: string };
}

const TaskStatus: FC<TaskStatusProps> = ({ sessionStatus }) => {
  return (
    <div className={Styles['tally-container']}>
      <div className={Styles['tally-wrapper']}>
        <div className={Styles['item1']}>
          Sessions: <strong>{sessionStatus.count}</strong>
        </div>
        <div className={Styles['item2']}>
          Finish At:{' '}
          <strong>
            {sessionStatus.time ? sessionStatus.time : 'HH:MM:SS'}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
