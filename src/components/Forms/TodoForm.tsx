import { useState, FormEvent } from 'react';
import Styles from '../Todo/todo.module.css';

interface TodoFromProps {
  addTodo: (value: string) => void;
}

const TodoForm: React.FC<TodoFromProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Prevent page refresh after submit
    addTodo(value);
    setValue('');
  };

  return (
    <div>
      <form className={Styles['todo-form']} onSubmit={handleSubmit}>
        <input
          type="text"
          className={Styles['todo-input']}
          value={value}
          placeholder="What are you working on?"
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        />
        <button type="submit" className={Styles['todo-btn']}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
