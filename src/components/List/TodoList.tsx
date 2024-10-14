import Styles from '../Todo/todo.module.css';
import { IconEdit } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { Todo } from '../Todo/Todo';

interface TodoListProps {
  task: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  const taskClassName = task.completed ? Styles.complete : '';

  return (
    <div className={Styles['todo-list']}>
      <p onClick={() => toggleComplete(task.id)} className={taskClassName}>
        {task.task}
      </p>
      <div className={Styles['todo-actions']}>
        <IconEdit onClick={() => editTodo(task.id)} />
        <IconTrash onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default TodoList;
