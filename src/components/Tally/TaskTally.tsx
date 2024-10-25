import { FC } from 'react';
import styles from './taskTally.module.css';
import { Badge } from '@mantine/core';

interface TaskTallyProps {
  title: string;
  value: number;
  color: string;
  subtitle?: string;
}

const TaskTally: FC<TaskTallyProps> = ({
  title,
  value,
  color,
  subtitle = '',
}) => {
  return (
    <div className={styles['tally-wrapper']}>
      <h2>{title}</h2>
      <Badge className={styles['tally-badge']} color={color} size="xl">
        {value}
      </Badge>
      <h5>{subtitle}</h5>
    </div>
  );
};

export default TaskTally;
