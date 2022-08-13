import { UserActionTypes, UserAction, UserState } from '../../types';
import { Reducer } from 'redux';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true, error: null, users: [] };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
