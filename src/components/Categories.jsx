// src/components/Categories.jsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../utils/bookSlice'   // path adjust if needed
import { categories } from '../utils/categories'

function Categories() {
  const dispatch = useDispatch()
  const activeCat = useSelector(state => state.book.selectedCategory)

  const handleSelect = (cat) => {
    dispatch(setCategory(cat))
  }

  return (
    <div>
      <h2 className='text-center text-4xl sm:text-5xl font-extrabold bg-clip-text text-amber-950 drop-shadow-md pb-6'>
        Book Categories
      </h2>

      <section id='category' className='flex flex-wrap justify-center items-center gap-3 my-4 overflow-x-auto whitespace-nowrap'>
        <button
          onClick={() => handleSelect('All')}
          className={`px-5 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-200 border-2
            ${activeCat === 'All' ? 'bg-amber-800 text-white border-amber-800 shadow-lg' : 'border-amber-800 bg-amber-100 text-amber-800 hover:border-amber-600 hover:text-amber-600'}
          `}
        >
          All
        </button>

        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.category)}
            className={`px-5 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-200 border-2
              ${activeCat === item.category
                ? 'bg-amber-800 text-white border-amber-800 shadow-lg'
                : 'border-amber-800 bg-amber-100 text-amber-800 hover:border-amber-600 hover:text-amber-600'
              }
            `}
          >
            {item.category}
          </button>
        ))}
      </section>
    </div>
  )
}

export default Categories
