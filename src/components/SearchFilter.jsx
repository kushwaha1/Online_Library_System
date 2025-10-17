import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

function SearchFilter({ handleText }) {
  // Local state to store input value
  const [inputValue, setInputValue] = useState('');

  // Debounce effect to prevent excessive calls while typing
  useEffect(() => {
    // Set a 500ms delay before calling the parent handler
    const handler = setTimeout(() => {
      handleText(inputValue); // Pass current input value to parent component
    }, 500);

    // Cleanup: clear timeout if input changes before 500ms
    return () => clearTimeout(handler);
  }, [inputValue, handleText]);

  return (
    <div className="flex items-center justify-center mt-4 mb-8">
      {/* Container for input field */}
      <div className="relative w-full lg:w-7/8">
        
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by Book Title or Author..."
          className="
            w-full h-14 pl-12 pr-4 rounded-xl border-none outline-none
            transition-all duration-300
            placeholder-amber-500 text-amber-900 bg-amber-100
            shadow-[0_4px_12px_rgba(0,0,0,0.1)]
            focus:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
            hover:shadow-[0_5px_15px_rgba(0,0,0,0.12)]
          "
          value={inputValue}                  // Controlled input value
          onChange={(e) => setInputValue(e.target.value)} // Update state on typing
        />

        {/* Search icon */}
        <Search 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-700 w-5 h-5" 
        />
      </div>
    </div>
  );
}

export default SearchFilter;