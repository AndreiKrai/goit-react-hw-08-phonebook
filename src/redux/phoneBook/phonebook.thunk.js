import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddUser, fetchData, fetchDeleteUser } from 'helpers/API';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const data = await fetchData();
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteConacts',
  async (id, thunkApi) => {
    try {
      const data = await fetchDeleteUser(id);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const data = await fetchAddUser(contact);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
