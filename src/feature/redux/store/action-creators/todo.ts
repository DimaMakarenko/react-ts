import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoActionTypes, TodoAction } from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: { _page: page, _limit: limit },
      });
      setTimeout(() => {
        dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Something went wrong!' });
    }
  };
};

export const setTodoPage = (page: number): TodoAction => {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  };
};