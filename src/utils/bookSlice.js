import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { booksData } from './booksData'

const initialState = {
    books: booksData,           // original array
    selectedCategory: 'All'     // default - show all
}

const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        // optional: reset to All
        resetCategory: (state) => {
            state.selectedCategory = 'All'
        }
    }
})

export const { addBook, setCategory, resetCategory } = bookSlice.actions;

export default bookSlice.reducer;