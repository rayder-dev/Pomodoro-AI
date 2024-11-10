import { Dispatch, FC, SetStateAction, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IconCaretRight } from '@tabler/icons-react';
import styles from './todo.module.css';
import { TodoTypes, TodoAction, TodoState } from '../../types';
import { Card, TaskStatus, TodoForm, TodoList, Tooltip } from '..';

interface TodoProps {
  sessionStatus: { count: number; time: string };
  setTaskCount: Dispatch<SetStateAction<number>>;
}

const initialState: TodoState = {
  todos: [
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
  ],
  editTodo: null,
};

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            task: action.payload.task,
            isActive: state.todos.length === 0,
            isEditing: false,
            completed: false,
          },
        ],
      };
    case 'EDIT_TODO':
      return {
        ...state,
        editTodo:
          state.todos.find((todo) => todo.id === action.payload.id) || null,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isEditing: true }
            : { ...todo, isEditing: false }
        ),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        editTodo: null,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task, isEditing: false }
            : todo
        ),
      };
    case 'DELETE_TODO':
      // Filter out the todo to be deleted
      const updatedTodosAfterDeletion = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      // Find the deleted todo and check if it was active
      const wasActive = state.todos.find(
        (todo) => todo.id === action.payload.id
      )?.isActive;

      // If the deleted todo was active, set the next incomplete, inactive todo as active
      if (wasActive) {
        const nextIncompleteTodoIndex = updatedTodosAfterDeletion.findIndex(
          (todo) => !todo.completed && !todo.isActive
        );

        // If there's an incomplete, inactive todo, set it to active
        if (nextIncompleteTodoIndex !== -1) {
          updatedTodosAfterDeletion[nextIncompleteTodoIndex] = {
            ...updatedTodosAfterDeletion[nextIncompleteTodoIndex],
            isActive: true,
          };
        }
      }

      return {
        ...state,
        todos: updatedTodosAfterDeletion,
      };

    case 'TOGGLE_COMPLETE':
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      const activeTodos = updatedTodos.filter((todo) => !todo.completed);
      if (state.todos.find((todo) => todo.id === action.payload.id)?.isActive) {
        return {
          ...state,
          todos: updatedTodos.map((todo) =>
            activeTodos[0]?.id === todo.id
              ? { ...todo, isActive: true }
              : { ...todo, isActive: false }
          ),
        };
      }
      return { ...state, todos: updatedTodos };
    case 'SET_ACTIVE':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id && !todo.completed
            ? { ...todo, isActive: true }
            : { ...todo, isActive: false }
        ),
      };
    default:
      return state;
  }
};

const Todo: FC<TodoProps> = ({ sessionStatus, setTaskCount }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (task: string) => {
    dispatch({ type: 'ADD_TODO', payload: { task } });
    setTaskCount((prev: number) => prev + 1);
  };

  const handleEdit = (id: string) => {
    dispatch({ type: 'EDIT_TODO', payload: { id } });
  };

  const handleUpdate = (id: string, task: string) => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, task } });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
    setTaskCount((prev: number) => prev - 1);
  };

  const handleComplete = (id: string) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: { id } });
  };

  const handleActive = (id: string) => {
    dispatch({ type: 'SET_ACTIVE', payload: { id } });
  };

  return (
    <div className={styles['todo-wrapper']}>
      <h2>Get Things Done!</h2>
      <TodoForm
        addTodo={addTodo}
        editTodo={state.editTodo}
        handleUpdate={handleUpdate}
      />
      <div className={styles['list-wrapper']}>
        {state.todos.map((todo: TodoTypes) => (
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
