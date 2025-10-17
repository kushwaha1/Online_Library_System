import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { booksData } from '../../utils/booksData' // Mock data of books
import BookList from '../../components/BookList'   // Component to display other books
import { ArrowLeft, Star } from 'lucide-react'     // Icons used

export default function BookDetails() {
  // Extract book id from URL parameters
  const { id } = useParams()
  const navigate = useNavigate()

  // Find the book with the matching id from booksData
  const book = booksData.find(b => b.id === id);

  return (
    <div className="bg-gray-50 py-12 px-6">

      {/* Main Section Container */}
      <section className="w-full max-w-7xl mx-auto pt-16 sm:px-8 md:px-2 lg:px-18">
        <h2 className='text-center text-4xl sm:text-5xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md pb-6'>
          Book Details
        </h2>

        {/* Back Button */}
        <button
          className="flex items-center gap-2 mb-6 cursor-pointer text-amber-600 font-semibold hover:text-amber-700 transition-transform hover:-translate-x-1"
          onClick={() => navigate('/browse-books')} // Navigate back to browse-books page
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white shadow hover:shadow-md transition-shadow">
            <ArrowLeft size={20} strokeWidth={2.2} /> {/* Back arrow icon */}
          </span>
          <span className="text-sm">Back</span>
        </button>

        {/* Book Details Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start animate-fade-in">

          {/* Left Column: Book Image */}
          <div className="md:col-span-1 flex items-center justify-center transform transition-transform hover:scale-105">
            <div className="group relative w-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src={book.image}          // Book cover image
                alt={book.title}          // Alt text for accessibility
                className="w-full h-96 object-fill transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Book Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            
            {/* Title and Author */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="lg:text-5xl md:text-4xl sm:text-4xl lg:leading-20 font-extrabold text-amber-600">
                  {book.title} {/* Book title */}
                </p>
                <p className="text-3xl text-gray-500 mt-1">
                  By <span className="font-semibold text-gray-700">{book.author}</span> {/* Author */}
                </p>

                {/* Rating Row */}
                <div className="flex items-center gap-3 mt-3 animate-fade-in delay-200">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {/* Render star rating dynamically */}
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${i < Math.round(book.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-300 opacity-40'}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">
                    {book.rating.toFixed(1)} {/* Display numeric rating */}
                  </div>
                </div>
              </div>
            </div>

            {/* Book Description */}
            <div className="mt-2 text-gray-700 text-base leading-relaxed animate-fade-in delay-300">
              <p className="text-sm md:text-base">{book.description}</p>
            </div>
          </div>

        </div>
      </section>

      {/* "See Others" Section: Displays other books */}
      <div className="mt-10 animate-fade-in delay-500">
        <BookList title={'See other books'} />
      </div>
    </div>
  )
}