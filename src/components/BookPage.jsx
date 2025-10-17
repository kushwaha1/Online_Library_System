import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BookCard from './BookCard/BookCard';
import { ArrowLeft } from 'lucide-react';

const BookPage = () => {
    // Get category from the URL (e.g., /books/:category)
    const { category } = useParams(); 

    // Get all books from Redux store
    const bookData = useSelector(state => state.book);

    // State to store filtered books based on selected category
    const [filteredBook, setFilteredBook] = useState([]);

    // Hook to navigate programmatically
    const navigate = useNavigate();

    // useEffect: runs whenever category or bookData changes
    useEffect(() => {
        if (!category || category.toLowerCase() === 'all') {
            // If no category or "all" selected, show all books
            setFilteredBook(bookData);
        } else {
            // Filter books by category (case-insensitive)
            setFilteredBook(
                bookData.filter(book => book.category_type.toLowerCase() === category.toLowerCase())
            );
        }
    }, [category, bookData]);

    return (
        <div className='py-12 px-6'>
            <section className='w-full max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-18'>

                {/* Page Heading */}
                <h2 className='text-center text-4xl sm:text-4xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md'>
                    Books on {category || 'All'}
                </h2>

                {/* Back Button to navigate to Browse Books */}
                <button
                    className="flex items-center gap-2 mb-6 cursor-pointer text-amber-600 font-semibold hover:text-amber-700 transition-transform hover:-translate-x-1"
                    onClick={() => navigate('/browse-books')}
                >
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white shadow hover:shadow-md transition-shadow">
                        <ArrowLeft size={20} strokeWidth={2.2} />
                    </span>
                    <span className="text-sm">Back</span>
                </button>

                {/* Grid of Book Cards */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    
                    {/* Render each filtered book using BookCard component */}
                    {filteredBook.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}

                    {/* Show message if no books found */}
                    {filteredBook.length === 0 && (
                        <p className="text-center col-span-full text-amber-800 font-semibold mt-4">
                            No books found!
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BookPage;