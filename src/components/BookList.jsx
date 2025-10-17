import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookCard from './BookCard/BookCard';
import { booksData } from '../utils/booksData';
import { useSelector } from 'react-redux';

function BookList({ title, searchText, selectedCategory: propCategory }) {
  // Get category from URL if present (e.g., /books/:category)
  const { category: routeCategory } = useParams();

  // State to store books after filtering by category and search text
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  // Get books stored in Redux (added dynamically via Add Book feature)
  const reduxBooks = useSelector((state) => state.book) || []; 

  // Determine which category to use: prop passed in, route param, or default "All"
  const selectedCategory = propCategory || routeCategory || 'All';

  // useEffect to filter books whenever reduxBooks, selectedCategory, or searchText changes
  useEffect(() => {
    let books = reduxBooks;

    // Filter by selected category (ignore "All")
    if (selectedCategory && selectedCategory.toLowerCase() !== 'all') {
      books = books.filter(
        book => book.category_type.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search text (search in title and author)
    if (searchText) {
      const lowerText = searchText.toLowerCase();
      books = books.filter(
        book =>
          (book.title && book.title.toLowerCase().includes(lowerText)) ||
          (book.author && book.author.toLowerCase().includes(lowerText))
      );
    }

    // Update the filtered books state
    setFilteredBooks(books);
  }, [reduxBooks, selectedCategory, searchText]);

  return (
    <div>
      {/* Header section with title and optional "View more" button */}
      <div className='flex lg:flex-row md:flex-col flex-col justify-between items-center px-4 sm:px-4 md:px-10 lg:px-18'>
        <h2 className='font-bold text-3xl text-[#A52A2A] my-2'>
          {title ? title : 'Popular Books...'}
        </h2>

        {/* Show "View more" button only when no custom title is passed */}
        {title ? '' : (
          <Link to='/browse-books'>
            <button type='button' className='bg-[#A52A2A] px-3 py-2.5 my-2 text-white cursor-pointer'>
              View more
            </button>
          </Link>
        )}
      </div>

      {/* Book grid */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:px-18">
        {/* Render BookCard for each filtered book */}
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}

        {/* Show message if no books are found */}
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
