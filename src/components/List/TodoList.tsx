import Styles from '../Todo/todo.module.css';
import { IconCircleCheck } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { Todo } from '../Todo/Todo';

interface TodoListProps {
  task: Todo;
  handleComplete: (id: string) => void;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  task,
  handleComplete,
  handleEdit,
  handleDelete,
}) => {
  const isCompleted = task.completed ? Styles.complete : '';
  const isEditing = task.isEditing ? Styles.edit : '';

  return (
    <div className={Styles['todo-list']}>
      <div className={Styles['todo-actions']}>
        <IconCircleCheck
          className={`${Styles['complete-button']} ${isCompleted} `}
          onClick={() => handleComplete(task.id)}
        />
        <p className={`${Styles['todo-task']} ${isCompleted} ${isEditing}`}>
          {task.task}
        </p>
      </div>
      <div className={Styles['todo-actions']}>
        <IconEdit
          className={Styles['edit-button']}
          onClick={() => handleEdit(task.id)}
        />
        <IconTrash
          className={Styles['delete-button']}
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default TodoList;
