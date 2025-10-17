import React, { useState } from 'react'
import SearchFilter from '../../components/SearchFilter'; // Component for search input
import Categories from '../../components/Categories';     // Component for category selection
import BookList from '../../components/BookList';         // Component to display list of books

function BrowseBooks() {
  // State to track currently selected category from Categories component
  const [selectedCategory, setSelectedCategory] = useState('All');

  // State to track current search text input from SearchFilter component
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      {/* Main section container */}
      <section 
        id='browseBooks'
        className='w-full max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-8'
      >
        {/* Categories component: User selects a category, updates selectedCategory state */}
        <Categories onSelect={setSelectedCategory} />

        {/* Spacer for visual separation */}
        <div className='pb-4'></div>

        {/* SearchFilter component: User types text to filter books, updates searchText state */}
        <SearchFilter handleText={setSearchText} />

        {/* BookList component:
            - title: section title
            - selectedCategory: filters books by selected category
            - searchText: filters books by search input
        */}
        <BookList 
          title="All Books..." 
          selectedCategory={selectedCategory} 
          searchText={searchText} 
        />
      </section>
    </div>
  )
}

export default BrowseBooks