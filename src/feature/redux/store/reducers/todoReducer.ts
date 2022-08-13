import { TodoState, TodoAction, TodoActionTypes } from './../../types/todo';
import { Reducer } from 'redux';

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: '',
  limit: 10,
  page: 1,
};

export const todoReducer: Reducer<TodoState> = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
