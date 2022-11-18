
const { createSlice } = require('@reduxjs/toolkit');

const phoneBookInitialState = { contacts: [], filter: '' };

export const usersSlice = createSlice({
  name: 'phoneBook',
  initialState: phoneBookInitialState,
  reducers: {
    addContact: (state, action) => {
      console.log('state', { ...state.contacts });
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) =>
    {state.contacts=state.contacts.filter(contact => contact.id !== action.payload)},
    setFilter: (state, action) => {state.filter = action.payload},
  },
});

export const { addContact, setFilter, removeContact } = usersSlice.actions;
export const phoneBookReduser = usersSlice.reducer;
