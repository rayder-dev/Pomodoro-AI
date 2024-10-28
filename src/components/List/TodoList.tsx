import { FC } from 'react';
import styles from '../Todo/todo.module.css';
import { IconCircleCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { Todo } from '../Todo/Todo';

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
        <IconCircleCheck
          className={`${styles['complete-button']} ${isCompleted} `}
          onClick={() => handleComplete(task.id)}
        />
        <IconEdit
          className={styles['edit-button']}
          onClick={() => handleEdit(task.id)}
        />
        <IconTrash
          className={styles['delete-button']}
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default TodoList;
