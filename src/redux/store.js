import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./Slice/PhoneBookSlice";

export const store = configureStore({
  reducer: {
   contacts: contactsReduser,
  },
});