import { Dispatch, FC, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IconCaretRight } from '@tabler/icons-react';
import styles from './todo.module.css';
import { TodoTypes } from '../../types';
import { Card, TaskStatus, TodoForm, TodoList, Tooltip } from '..';

interface TodoProps {
  sessionStatus: { count: number; time: string };
  setTaskCount: Dispatch<SetStateAction<number>>;
}

const Todo: FC<TodoProps> = ({ sessionStatus, setTaskCount }) => {
  const [todos, setTodos] = useState<TodoTypes[]>([
    {
      id: '550deeaf-bce7-4cd4-a06a-6ade2d5553ab',
      task: 'React',
      isActive: true,
      isEditing: false,
      completed: false,
    },
    {
      id: 'f0c441e0-2859-4262-89ad-e8af571ad7a5',
      task: 'Vue',
      isActive: false,
      isEditing: false,
      completed: false,
    },
    {
      id: 'fadc1c21-75ef-4167-bcd1-64d91fd28b17',
      task: 'Angular',
      isActive: false,
      isEditing: false,
      completed: false,
    },
  ]);
  const [editTodo, setEditTodo] = useState<TodoTypes | null>(null);

  const updateTodos = (updater: (todo: TodoTypes) => TodoTypes) =>
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
      setTaskCount((prev) => prev + 1);
    }
  };

  const handleActive = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        // If a completed todo is clicked, keep the current active state as-is
        if (todo.completed) return todo;
        // Set only the selected incomplete todo as active
        return {
          ...todo,
          isActive: todo.id === id && !todo.completed,
        };
      });
      // Ensure there's only one active todo at a time
      const activeTodoExists = updatedTodos.some((todo) => todo.isActive);
      if (!activeTodoExists) {
        const firstIncomplete = updatedTodos.find((todo) => !todo.completed);
        if (firstIncomplete) firstIncomplete.isActive = true;
      }
      return updatedTodos;
    });
  };

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
    setTaskCount((prev) => prev - 1);
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
              <Tooltip
                label="Active"
                position="left"
                color="#23bab1"
                transition="rotate-left"
              >
                <IconCaretRight className={styles['active-icon']} size="2rem" />
              </Tooltip>
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
      <Card>
        <TaskStatus sessionStatus={sessionStatus} />
      </Card>
    </div>
  );
};

export default Todo;
