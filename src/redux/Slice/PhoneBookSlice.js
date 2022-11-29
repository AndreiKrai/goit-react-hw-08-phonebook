import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../thunk';

const initialState = {
  contacts: { items: [], isLoading: 'false', error: null },
  filter: '',
  isOpenToWork:"notSelected"
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log("action.payload",action.payload)
      state.filter = action.payload;
    },
    setIsOpenToWork:(state, action)=>{state.isOpenToWork=action.payload}
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [deleteContact.pending]: state => {state.contacts.isLoading = true},
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.items =state.contacts.items.filter(contact=>contact.id!==action.payload.id) ;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [deleteContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending]: state => {state.contacts.isLoading = true},
    [addContact.fulfilled] :(state, action)=>{
      // console.log(action.payload);
      state.contacts.items = [action.payload, ...state.contacts.items];
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.rejected]: (state, action) => {
      // console.log(action);

      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.push(action.payload);
  //   },
  //   removeContact: (state, action) => {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  //   setFilter: (state, action) => {
  //     state.filter = action.payload;
  //   },
  // },
});

export const {setFilter,setIsOpenToWork} = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
