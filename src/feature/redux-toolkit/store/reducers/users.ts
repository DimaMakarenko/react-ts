import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './../../types/users';
import { fetchUsers } from './actions';

type UsersState = {
  users: User[];
  isLoading: boolean;
  error: string;
};

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // userFetching(state: UsersState) {
    //   state.isLoading = true;
    // },
    // userFetchingSuccess(state: UsersState, action: PayloadAction<User[]>) {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.users = action.payload;
    // },
    // userFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state: UsersState, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state: UsersState) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
