import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import { User } from './../../types/users';
import { api, URLS } from 'api';
import { AppDispatch } from '../index';
import { usersSlice } from './users';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(usersSlice.actions.userFetching());
//     const response = await api.get<User[]>(URLS.usersUrl);
//     dispatch(usersSlice.actions.userFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(usersSlice.actions.userFetchingError('Server Error'));
//   }
// };

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await api.get<User[]>(URLS.usersUrl);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Server Error');
  }
});
