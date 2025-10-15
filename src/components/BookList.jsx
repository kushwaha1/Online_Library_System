import React from 'react'
import BookCard from './BookCard'
import { booksData } from '../utils/booksData'


function BookList() {
  return (
    <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:px-18">
      {booksData.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  )
}

export default BookList
