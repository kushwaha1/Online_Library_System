import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { booksData } from './booksData'

const bookSlice = createSlice({
    name: "book",
    initialState: booksData,
    reducers: {
        addBook: (state, action) => {
            state.unshift(action.payload);
        }
    }
})

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;