import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchLogin, fetchRegister, token } from 'helpers/API';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer  ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

export const register = createAsyncThunk(
  'auth/register',
  async (usersData, thunkApi) => {
    try {
      const data = await fetchRegister(usersData);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (usersData, thunkApi) => {
    try {
      const data = await fetchLogin(usersData);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
// ----інший варіант створюємо axios прям в операції, так коду значно менше----
export const logoutThunk = createAsyncThunk('auth/logout', async thunkApi => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export const currentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const tokenPersisted = state.auth.token;

      if (tokenPersisted === null) {
        return thunkApi.rejectWithValue(); //turn to rejected
      }
      token.set(tokenPersisted);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
