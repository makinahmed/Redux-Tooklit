import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import books from '../../fakeData/books.json';

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch(
    "https://redux-book-shelf.herokuapp.com/books"
  ).then((res) => res.json());
 
  return response.data;
});

const initialState = {
  discover: [],
  readingList: [],
  finishedList: [],
};
export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToReadingList: (state, { payload }) => {
      state.readingList.push(payload);
    },
    removeFromReadingList: (state, { payload }) => {
      state.readingList.filter((book) => book.id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.discover = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addToReadingList, removeFromReadingList } = bookSlice.actions;

export default bookSlice.reducer;
