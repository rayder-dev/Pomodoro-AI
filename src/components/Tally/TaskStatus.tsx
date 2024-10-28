import { FC } from 'react';
import Styles from './taskStatus.module.css';
import { TodoProps } from '../Todo/Todo';

const TaskStatus: FC<TodoProps> = ({ sessionStatus }) => {
  return (
    <div className={Styles['tally-container']}>
      <div className={Styles['tally-wrapper']}>
        <div className={Styles['item1']}>
          Sessions: <strong>{sessionStatus.count}</strong>
        </div>
        <div className={Styles['item2']}>
          Finish At:{' '}
          <strong>
            {sessionStatus.time ? sessionStatus.time : '--:--:--'}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
