import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const BookPage = () => {
    const category = useParams();
    const bookData = useSelector(state => state.book);
    const filteredBook = bookData.filter((book) => book.category_type.toLowerCase() === category);

    return (
        <section className='p-10'>
            <h2 className='font-medium text-3xl'>Book on {catergory}</h2>
            <div className='mt-6 flex flex-wrap gap-5 items-center'>
                {
                    filteredBook.map((book) => (
                        <BookCard book={book} key={book.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default BookPage