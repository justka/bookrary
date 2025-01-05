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
    removeBookFromList: (state, action) => {
      state.booksList = state.booksList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addBookToList, removeBookFromList } = booksSlice.actions;

export const booksSliceReducer = booksSlice.reducer;
