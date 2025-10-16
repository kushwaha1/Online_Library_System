import React, { useRef, useState } from 'react';
import home_banner from "../../assets/home-banner.png";
import "./Home.css";
import BookList from '../../components/BookList';
import Categories from '../../components/Categories';

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const bookSectionRef = useRef(null);

    const handleExploreClick = () => {
        if (bookSectionRef.current) {
            bookSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='relative bg-gradient-to-r from-amber-100 to-yellow-50'>
            <section id="home"
                className="flex flex-col-reverse md:flex-row
                items-center justify-center md:justify-between
                gap-8 sm:gap-10 md:gap-12 lg:gap-14
                w-full max-w-7xl mx-auto
                lg:min-h-screen
                pt-20 sm:pt-24 md:pt-32 lg:pt-12
                pb-12 sm:pb-16 lg:pb-2
                px-4 sm:px-8 md:px-12 lg:px-20"
            >
                {/* Left Side - Text */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-5 max-w-lg w-full">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-amber-950 leading-tight glow-text">
                        Welcome to the <br />
                        <span className="text-amber-700 typing-text text-2xl sm:text-3xl md:text-4xl">Online Library</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                        Discover books, explore different genres, and read anywhere — anytime.
                    </p>
                    <button 
                        onClick={handleExploreClick}
                        className="mt-4 sm:mt-6 bg-amber-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-amber-700 transition btn-glow"
                    >
                        Explore Now
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center w-full md:w-auto">
                    <img
                        src={home_banner}
                        alt="Home Banner"
                        className="w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] rounded-lg drop-shadow-lg object-cover float-img"
                    />
                </div>
            </section>

            {/* 🏷️ White background below */}
            <section ref={bookSectionRef} className="bg-white min-h-screen py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <Categories onSelect={setSelectedCategory} />
                    <BookList selectedCategory={selectedCategory}/>
                </div>
            </section>

        </div>
    )
}

export default Home