import { useState } from 'react';
import TodoForm from '../Forms/TodoForm';
import TodoList from '../List/TodoList';
import Styles from './todo.module.css';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      task,
      completed: false,
      isEditing: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className={Styles['todo-wrapper']}>
      <h2>Get Things Done!</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          task={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default Todo;
export type { Todo };
