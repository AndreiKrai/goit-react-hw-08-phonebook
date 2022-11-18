import { configureStore } from "@reduxjs/toolkit";
import { phoneBookReduser } from "./PhoneBookSlice";

export const store = configureStore({
  reducer: {
   contacts: phoneBookReduser,
  },
});