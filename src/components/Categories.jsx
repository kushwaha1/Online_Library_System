import React, { useState, useEffect } from 'react';
import { categories } from '../utils/categories';
import { useNavigate, useParams } from 'react-router-dom';

function Categories({ onSelect }) {
  const { category: routeCategory } = useParams(); // URL param
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState(routeCategory || 'All');

  useEffect(() => {
    // Sync active category with URL param
    if (routeCategory) setActiveCat(routeCategory.charAt(0).toUpperCase() + routeCategory.slice(1));
    else setActiveCat('All');
    onSelect(routeCategory || 'All');
  }, [routeCategory, onSelect]);

  const handleSelect = (cat) => {
    const lowerCat = cat.toLowerCase();
    setActiveCat(cat);
    onSelect(cat);
    navigate(`/books/${lowerCat}`);
  };

  return (
    <div>
      <h2 className='text-center text-4xl sm:text-5xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md pb-6'>
        Book Categories
      </h2>
      <section className='flex flex-wrap justify-center items-center gap-3 mt-4 mb-8 overflow-x-auto whitespace-nowrap'>
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.category)}
            className={`
              px-5 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base
              transition-all duration-200 border-2
              ${activeCat === item.category
                ? 'bg-amber-800 text-white border-amber-800 shadow-lg'
                : 'border-amber-800 bg-amber-100 text-amber-800 hover:border-amber-600 hover:text-amber-600'}
            `}
          >
            {item.category}
          </button>
        ))}
      </section>
    </div>
  );
}

export default Categories;
