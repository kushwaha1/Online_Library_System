import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center text-amber-900 p-10'>
            <h2 className='text-8xl font-bold'>404</h2>
            <p className='text-5xl font-medium'>Not found</p>
            <p className='font-medium text-xl mt-4'>Invalid Route Url. Please check your route...</p>
            <div className='mt-4'>
                <Link to='/'>
                    <button className='bg-amber-50 border-2 border-amber-200 text-amber-900 font-normal px-6 py-3 rounded-md cursor-pointer'>
                        Back to home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound