import React, { useState } from 'react'
import SearchFilter from '../../components/SearchFilter';
import Categories from '../../components/Categories';
import BookList from '../../components/BookList';

function BrowseBooks() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <section id='browseBooks'
        className='w-full max-w-7xl mx-auto pt-32 pb-16
        px-4 sm:px-8 md:px-12 lg:px-8'
      >
        <Categories onSelect={setSelectedCategory} />
        <div className='pb-4'></div>
        <SearchFilter handleText={setSearchText} />
        <BookList title="All Books..." selectedCategory={selectedCategory} searchText={searchText} />
      </section>
    </div>
  )
}

export default BrowseBooks