import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IconCaretRight } from '@tabler/icons-react';
import TodoForm from '../Form/TodoForm';
import TodoList from '../List/TodoList';
import styles from './todo.module.css';
import MacOsCard from '../Card/MacOsCard';
import TaskStatus from '../Tally/TaskStatus';

interface Todo {
  id: string;
  task: string;
  isActive: boolean;
  isEditing: boolean;
  completed: boolean;
}

interface TodoProps {
  sessionStatus: { count: number; time: string };
}

const Todo: FC<TodoProps> = ({ sessionStatus }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  const updateTodos = (updater: (todo: Todo) => Todo) =>
    setTodos((prevTodos) => prevTodos.map(updater));

  const addTodo = (name: string) => {
    if (editTodo) {
      updateTodos((todo) =>
        todo.id === editTodo.id
          ? { ...todo, task: name, isEditing: false }
          : todo
      );
      setEditTodo(null);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: uuidv4(),
          task: name,
          isActive: todos.length === 0,
          isEditing: false,
          completed: false,
        },
      ]);
    }
  };

  const handleActive = (id: string) =>
    updateTodos((todo) => ({ ...todo, isActive: todo.id === id }));

  const handleComplete = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      const activeTodo = updatedTodos.find((todo) => todo.id === id);
      if (activeTodo?.isActive && activeTodo.completed) {
        activeTodo.isActive = false;
        const firstIncomplete = updatedTodos.find(
          (todo) => !todo.completed && todo.id !== id
        );
        if (firstIncomplete) firstIncomplete.isActive = true;
      }
      return updatedTodos;
    });
  };

  const handleDelete = (id: string) => {
    if (editTodo) {
      console.log('Cannot delete while editing');
      return;
    }
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      const activeTodo = prevTodos.find(
        (todo) => todo.id === id && todo.isActive
      );
      if (activeTodo && updatedTodos.length > 0) {
        const firstIncomplete = updatedTodos.find((todo) => !todo.completed);
        if (firstIncomplete) firstIncomplete.isActive = true;
      }
      return updatedTodos;
    });
  };

  const handleEdit = (id: string) => {
    updateTodos((todo) => ({ ...todo, isEditing: todo.id === id }));
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) setEditTodo(todoToEdit);
  };

  return (
    <div className={styles['todo-wrapper']}>
      <h2>Get Things Done!</h2>
      <TodoForm addTodo={addTodo} editTodo={editTodo} />
      <div className={styles['list-wrapper']}>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={todo.isActive ? styles['active-wrapper'] : ''}
          >
            {todo.isActive && (
              <IconCaretRight className={styles['active-icon']} size="2rem" />
            )}
            <TodoList
              task={todo}
              handleComplete={handleComplete}
              handleActive={handleActive}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
      <MacOsCard>
        <TaskStatus sessionStatus={sessionStatus} />
      </MacOsCard>
    </div>
  );
};

export default Todo;
export type { Todo, TodoProps };
