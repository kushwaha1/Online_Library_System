// src/components/BookList.jsx
import React from 'react'
import BookCard from './BookCard'
import { useSelector } from 'react-redux'

function BookList() {
  const { books, selectedCategory } = useSelector(state => state.book)

  // normalize and filter
  const filteredBooks = selectedCategory === 'All'
    ? books
    : books.filter(book => {
      const bookCat = String(book.category_type || book.category || '').toLowerCase().trim();
      const selCat = String(selectedCategory).toLowerCase().trim();
      return bookCat === selCat;
    });


  return (
    <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:px-18">
      {filteredBooks.length > 0 ? (
        filteredBooks.map(book => <BookCard key={book.id} book={book} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No books found for this category 😅</p>
      )}
    </section>
  )
}

export default BookList
