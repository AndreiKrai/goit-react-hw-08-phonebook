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
  async id => await fetchDeleteUser(id)
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    console.log(contact);
     const data= await fetchAddUser(contact);
    return data
  }
);
