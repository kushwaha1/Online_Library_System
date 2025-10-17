import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BookCard from './BookCard/BookCard';
import { ArrowLeft } from 'lucide-react';

const BookPage = () => {
    const { category } = useParams(); // ✅ correct
    const bookData = useSelector(state => state.book);
    const [filteredBook, setFilteredBook] = useState([]);
    const navigate = useNavigate();

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
        <div className='py-12 px-6'>
            <section className='w-full max-w-7xl mx-auto pt-32 pb-16
                px-4 sm:px-8 md:px-12 lg:px-18'>
                <h2 className='text-center text-4xl sm:text-4xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md'>
                    Books on {category || 'All'}
                </h2>
                <button
                    className="flex items-center gap-2 mb-6 cursor-pointer text-amber-600 font-semibold hover:text-amber-700 transition-transform hover:-translate-x-1"
                    onClick={() => navigate('/browse-books')}
                >
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white shadow hover:shadow-md transition-shadow">
                        <ArrowLeft size={20} strokeWidth={2.2} />
                    </span>
                    <span className="text-sm">Back</span>
                </button>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">

                    {filteredBook.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
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