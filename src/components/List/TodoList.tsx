import { FC } from 'react';
import styles from '../Todo/todo.module.css';
import { IconCircleCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { Todo } from '../Todo/Todo';
import ButtonTooltip from '../Tooltip/ButtonTooltip';

interface TodoListProps {
  task: Todo;
  handleComplete: (id: string) => void;
  handleActive: (id: string) => void;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({
  task,
  handleComplete,
  handleActive,
  handleEdit,
  handleDelete,
}) => {
  const isCompleted = task.completed ? styles.complete : '';
  const isEditing = task.isEditing ? styles.edit : '';

  return (
    <div className={styles['todo-list']}>
      <span
        onClick={() => handleActive(task.id)}
        className={styles['todo-task-wrapper']}
      >
        <p className={`${styles['todo-task']} ${isCompleted} ${isEditing}`}>
          {task.task}
        </p>
      </span>
      <div className={styles['todo-actions']}>
        <ButtonTooltip
          label="Complete"
          position="top"
          color="#36c890"
          transition="skew-up"
        >
          <IconCircleCheck
            className={`${styles['complete-button']} ${isCompleted} `}
            onClick={() => handleComplete(task.id)}
          />
        </ButtonTooltip>
        <ButtonTooltip
          label="Edit"
          position="top"
          color="#2278a0"
          transition="skew-up"
        >
          <IconEdit
            className={styles['edit-button']}
            onClick={() => handleEdit(task.id)}
          />
        </ButtonTooltip>
        <ButtonTooltip
          label="Delete"
          position="top"
          color="#fb786e"
          transition="skew-up"
        >
          <IconTrash
            className={styles['delete-button']}
            onClick={() => handleDelete(task.id)}
          />
        </ButtonTooltip>
      </div>
    </div>
  );
};

export default TodoList;
