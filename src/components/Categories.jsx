import React, { useState, useEffect } from 'react';
import { categories } from '../utils/categories'; // List of book categories
import { useNavigate, useParams } from 'react-router-dom';

function Categories({ onSelect }) {
  // Get category from URL (e.g., /books/:category)
  const { category: routeCategory } = useParams(); 
  const navigate = useNavigate();

  // Local state to track currently active category
  const [activeCat, setActiveCat] = useState(routeCategory || 'All');

  // Sync component state with URL param whenever it changes
  useEffect(() => {
    if (routeCategory) {
      // Capitalize first letter of category from URL
      setActiveCat(routeCategory.charAt(0).toUpperCase() + routeCategory.slice(1));
    } else {
      setActiveCat('All'); // Default to "All" if no category in URL
    }
    // Notify parent component about selected category
    onSelect(routeCategory || 'All');
  }, [routeCategory, onSelect]);

  // Handle user clicking a category button
  const handleSelect = (cat) => {
    const lowerCat = cat.toLowerCase();
    setActiveCat(cat);        // Update local state
    onSelect(cat);            // Inform parent component
    navigate(`/books/${lowerCat}`); // Update URL to selected category
  };

  return (
    <div>
      {/* Section Heading */}
      <h2 className='text-center text-4xl sm:text-5xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md pb-6'>
        Book Categories
      </h2>

      {/* Category Buttons */}
      <section className='w-full flex flex-wrap justify-center items-center gap-6 mt-4 mb-8 overflow-x-auto whitespace-nowrap'>
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.category)}
            className={`
              px-5 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base
              transition-all duration-200 border-2
              ${activeCat === item.category
                ? 'bg-amber-800 text-white border-amber-800 shadow-lg' // Active styling
                : 'border-amber-800 bg-amber-100 text-amber-800 hover:border-amber-600 hover:text-amber-600'} // Inactive styling
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
