interface TodoTypes {
  id: string;
  task: string;
  isActive: boolean;
  isEditing: boolean;
  completed: boolean;
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: { task: string } }
  | { type: 'EDIT_TODO'; payload: { id: string } }
  | { type: 'UPDATE_TODO'; payload: { id: string; task: string } }
  | { type: 'DELETE_TODO'; payload: { id: string } }
  | { type: 'TOGGLE_COMPLETE'; payload: { id: string } }
  | { type: 'SET_ACTIVE'; payload: { id: string } };

interface TodoState {
  todos: TodoTypes[];
  editTodo: TodoTypes | null;
}

export type { TodoTypes, TodoAction, TodoState };
