import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./PhoneBookSlice";

export const store = configureStore({
  reducer: {
   contacts: contactsReduser,
  },
});