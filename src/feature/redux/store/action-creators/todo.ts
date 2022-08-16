import { Dispatch } from 'redux';
import { TodoActionTypes, TodoAction } from '../../types/todo';
import { api, URLS } from 'api';

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await api.get<TodoAction>(URLS.todoUrl, {
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

export const setTodoPage = (page: number): TodoAction => ({
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: page,
});
