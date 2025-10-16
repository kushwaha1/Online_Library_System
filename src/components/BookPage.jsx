import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from './BookCard/BookCard';

const BookPage = () => {
    const { category } = useParams(); // ✅ correct
    const bookData = useSelector(state => state.book);
    const [filteredBook, setFilteredBook] = useState([]);

    useEffect(() => {
        if (!category || category.toLowerCase() === 'all') {
            setFilteredBook(bookData); // show all books
        } else {
            setFilteredBook(
                bookData.filter(book => book.category_type.toLowerCase() === category.toLowerCase())
            );
        }
    }, [category, bookData]);

    return (
        <div className='w-full max-w-7xl mx-auto pt-32 pb-16
                px-4 sm:px-8 md:px-12 lg:px-8'>
            <h2 className='text-center text-4xl sm:text-4xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md'>
                    Books on {category || 'All'}
                </h2>
            <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:px-18">
                
                {filteredBook.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
                {filteredBook.length === 0 && (
                    <p className="text-center col-span-full text-amber-800 font-semibold mt-4">
                        No books found!
                    </p>
                )}
            </section>
        </div>
    );
};

export default BookPage;