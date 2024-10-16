import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  initialState: {
    booksList: [],
  },
  name: "books",
  reducers: {
    addBookToList: (state, action) => {
      state.booksList.push(action.payload);
    },
  },
});

export const { addBookToList } = booksSlice.actions;

export const booksSliceReducer = booksSlice.reducer;
