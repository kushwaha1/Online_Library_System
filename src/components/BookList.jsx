import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookCard from './BookCard/BookCard';
import { booksData } from '../utils/booksData';

function BookList({ title, searchText, selectedCategory: propCategory }) {
  const { category: routeCategory } = useParams();
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const selectedCategory = propCategory || routeCategory || 'All';

  useEffect(() => {
    let books = booksData;

    // Filter by category
    if (selectedCategory && selectedCategory.toLowerCase() !== 'all') {
      books = books.filter(book => book.category_type.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Filter by search text
    if (searchText) {
      const lowerText = searchText.toLowerCase();
      books = books.filter(
        book =>
          (book.title && book.title.toLowerCase().includes(lowerText)) ||
          (book.author && book.author.toLowerCase().includes(lowerText))
      );
    }

    setFilteredBooks(books);
  }, [selectedCategory, searchText]);

  return (
    <div>
      <div className='flex lg:flex-row md:flex-col flex-col justify-between items-center px-18'>
        <h2 className='font-Poppins font-medium text-3xl text-[#A52A2A] my-2'>{title ? title : 'Popular Books'}</h2>
        {title ? '' : <Link to='/browse-books'><button type='button' className='bg-[#A52A2A] px-3 py-2.5 my-2 text-white cursor-pointer'>View more</button></Link>}
      </div>
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
  );
}

export default BookList;
