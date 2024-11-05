import { FC, memo } from 'react';
import styles from '../Todo/todo.module.css';
import { IconCircleCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { TodoTypes } from '../../types';
import { Tooltip } from '..';

interface TodoListProps {
  task: TodoTypes;
  handleComplete: (id: string) => void;
  handleActive: (id: string) => void;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

// Memoized button components to prevent re-renders if props are unchanged
const CompleteButton: FC<{ onClick: () => void; isCompleted: boolean }> = memo(
  ({ onClick, isCompleted }) => (
    <Tooltip
      label="Complete"
      position="top"
      color="#36c890"
      transition="skew-up"
    >
      <IconCircleCheck
        className={`${styles['complete-button']} ${
          isCompleted ? styles.complete : ''
        }`}
        onClick={onClick}
      />
    </Tooltip>
  )
);

const EditButton: FC<{ onClick: () => void }> = memo(({ onClick }) => (
  <Tooltip label="Edit" position="top" color="#2278a0" transition="skew-up">
    <IconEdit className={styles['edit-button']} onClick={onClick} />
  </Tooltip>
));

const DeleteButton: FC<{ onClick: () => void }> = memo(({ onClick }) => (
  <Tooltip label="Delete" position="top" color="#fb786e" transition="skew-up">
    <IconTrash className={styles['delete-button']} onClick={onClick} />
  </Tooltip>
));

const TodoList: FC<TodoListProps> = ({
  task,
  handleComplete,
  handleActive,
  handleEdit,
  handleDelete,
}) => {
  const isCompleted = task.completed;
  const isEditing = task.isEditing;

  return (
    <div className={styles['todo-list']}>
      <span
        onClick={() => handleActive(task.id)}
        className={styles['todo-task-wrapper']}
      >
        <p
          className={`${styles['todo-task']} ${
            isCompleted ? styles.complete : ''
          } ${isEditing ? styles.edit : ''}`}
        >
          {task.task}
        </p>
      </span>
      <div className={styles['todo-actions']}>
        <CompleteButton
          onClick={() => handleComplete(task.id)}
          isCompleted={isCompleted}
        />
        <EditButton onClick={() => handleEdit(task.id)} />
        <DeleteButton onClick={() => handleDelete(task.id)} />
      </div>
    </div>
  );
};

export default memo(TodoList);
