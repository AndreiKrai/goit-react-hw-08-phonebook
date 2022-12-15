import { createSlice } from '@reduxjs/toolkit';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  register,
} from './auth.thunk';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggetIn: false,
  isLoadingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggetIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggetIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggetIn = false;
      })
      .addCase(currentUserThunk.pending, (state, action) => {
        state.isLoadingCurrentUser = true;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggetIn = true;
        state.isLoadingCurrentUser = false;
      })
      .addCase(currentUserThunk.rejected, (state, action) => {
        state.isLoadingCurrentUser = false;
      });
  },
});

export const { setFilter, setIsOpenToWork } = authSlice.actions;
export const authReduser = authSlice.reducer;
