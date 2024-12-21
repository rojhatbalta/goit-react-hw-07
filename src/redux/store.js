import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import contactsReducer from "./contactSlice";

const store = configureStore({
  reducer: {
    filters: filterReducer,
    contacts: contactsReducer,
  },
});

export default store;
