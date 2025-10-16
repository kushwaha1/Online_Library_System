import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

function SearchFilter({ handleText }) {
  const [inputValue, setInputValue] = useState('');

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      handleText(inputValue);
    }, 500); // 500ms delay

    return () => clearTimeout(handler); // cleanup on change
  }, [inputValue, handleText]);

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="relative w-full md:w-3/4">
        <input
          type="text"
          placeholder="Search by Book Title or Author..."
          className="w-full h-14 pl-12 pr-4 rounded-xl border-none outline-none
                     transition-all duration-300
                     placeholder-amber-500 text-amber-900 bg-amber-100
                     shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                     focus:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                     hover:shadow-[0_5px_15px_rgba(0,0,0,0.12)]"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-700 w-5 h-5" />
      </div>
    </div>
  );
}

export default SearchFilter;