import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../Slice/bookSlice';
export const store = configureStore({
  reducer: {
      books: bookReducer
  },
});
