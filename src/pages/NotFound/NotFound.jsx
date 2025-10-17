import React from 'react';
import { Link } from 'react-router-dom'; // Used to navigate back to home without refreshing the page

const NotFound = () => {
    return (
        // Main container: centers all content and applies padding
        <div className='text-center text-amber-900 p-10'>
            
            {/* Large 404 error number */}
            <h2 className='text-8xl font-bold'>404</h2>

            {/* Message indicating page not found */}
            <p className='text-5xl font-medium'>Not found</p>

            {/* Additional description for the user */}
            <p className='font-medium text-xl mt-4'>
                Invalid Route Url. Please check your route...
            </p>

            {/* Back to Home Button */}
            <div className='mt-4'>
                {/* Link component ensures navigation without page reload */}
                <Link to='/'>
                    <button className='bg-amber-50 border-2 border-amber-200 text-amber-900 font-normal px-6 py-3 rounded-md cursor-pointer'>
                        Back to home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;