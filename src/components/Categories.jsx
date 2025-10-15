import React, { useState } from 'react';
import { categories } from '../utils/categories';

function Categories({ onSelect }) {
    const [activeCat, setActiveCat] = useState(categories[0]); // initially first category active

    const handleSelect = (cat) => {
        setActiveCat(cat);
        onSelect(cat);
    };

    return (
        <div>
            {/* Heading */}
            <h2 className='text-center text-4xl sm:text-5xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md pb-6'>
                Book Categories
            </h2>
            <section id='category' className='flex flex-wrap justify-center items-center gap-3 my-4 overflow-x-auto whitespace-nowrap'>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleSelect(cat)}
                        className={`
                            px-5 py-2 sm:px-6 sm:py-3 
                            rounded-2xl font-semibold text-sm sm:text-base
                            transition-all duration-200
                            border-2
                            ${activeCat === cat
                                ? 'bg-amber-800 text-white border-amber-800 shadow-lg'
                                : 'border-amber-800 bg-amber-100 text-amber-800 hover:border-amber-600 hover:text-amber-600'
                            }
                        `}
                    >
                    {cat}
                    </button>
                ))}
            </section>
        </div>
    );
}

export default Categories;
