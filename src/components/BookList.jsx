import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { booksData } from '../utils/booksData'
import { useSelector } from 'react-redux'
import Categories from './Categories';


function BookList({ selectedCategory, searchText }) {
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  useEffect(() => {
    let filterBooks = booksData;

    // Filter By Category
    if (selectedCategory && selectedCategory !== "All") {
      filterBooks = booksData.filter(book => book.category_type === selectedCategory)
    }

    //Filter By Search Text (Title or Author)
    if (searchText) {
      const lowerText = searchText.toLowerCase();
      filterBooks = filterBooks.filter(book =>
        (book.title && book.title.toLowerCase().includes(lowerText)) ||
        (book.author && book.author.toLowerCase().includes(lowerText))
      )
    }

    setFilteredBooks(filterBooks);
  }, [selectedCategory, searchText])

  return (
    <div>
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:px-18">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
        {filteredBooks.length === 0 && (
          <p className="text-center col-span-full text-amber-800 font-semibold mt-4">
            No books found!
          </p>
        )}
      </section>
    </div>


  )
}

export default BookList
