import React from 'react'
import "./book.css"

function BookCard({ book }) {
    return (
        <section className="relative w-full">
            {/* Reduced glow ring opacity */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
            
            <div className="relative w-full bg-white border border-amber-200/50 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 cursor-pointer group hover:-translate-y-1">
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-10"></div>
                
                {/* Image Section - Simple animation */}
                <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 h-64 w-full overflow-hidden">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-64 object-fill group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {book.category_type}
                    </span>
                    
                    {/* Floating sparkle */}
                    <div className="absolute top-4 right-4 text-yellow-300 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[float_3s_ease-in-out_infinite]">
                        ✨
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative p-5 flex flex-col gap-2 bg-white">
                    
                    <h2 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300 line-clamp-1">
                        {book.title}
                    </h2>
                    
                    <p className="text-sm text-gray-600 font-medium">by {book.author}</p>

                    {/* Rating with animation */}
                    <div className="flex items-center text-yellow-500 text-sm font-medium">
                        <span className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <span 
                                    key={i} 
                                    className={`transition-all duration-300 ${i < Math.round(book.rating) ? 'scale-100 opacity-100' : 'scale-75 opacity-40'} group-hover:scale-110`}
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    ⭐
                                </span>
                            ))}
                        </span>
                        <span className="text-gray-600 ml-2 font-bold">{book.rating.toFixed(1)}</span>
                    </div>

                    <p className="text-sm text-gray-700 mt-1 line-clamp-2 leading-relaxed">
                        {book.description}
                    </p>

                    {/* Premium button */}
                    <button className="relative mt-3 w-full text-white py-3 font-bold text-sm rounded-xl shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_45px_rgba(251,191,36,0.8)] transition-shadow duration-300 overflow-hidden group/btn bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-[length:200%_100%] animate-[flow_3s_ease-in-out_infinite]">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            View Details
                            <span className="inline-block group-hover/btn:rotate-12 transition-transform duration-300">✨</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/30"></div>
                        <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-b from-white/20 to-transparent"></div>
                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 group-hover/btn:left-full transition-all duration-1000"></div>
                    </button>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </section>
    )
}

export default BookCard
