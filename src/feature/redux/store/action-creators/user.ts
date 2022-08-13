import { api, URLS } from 'feature/redux/api';
import { Dispatch } from 'redux';
import { UserActionTypes, UserAction } from '../../types/user';

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const response = await api.get(URLS.usersUrl);
    setTimeout(() => {
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    }, 500);
  } catch (e) {
    dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Something went wrong!' });
  }
};
