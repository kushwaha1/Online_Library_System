import React from 'react';
import home_banner from "../../assets/home-banner.png";
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';

function Home() {
    return (
        <div className='relative bg-gradient-to-r from-amber-100 to-yellow-50'>
            <section
                id="home"
                className="pt-2 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-7xl px-8 md:px-20 rounded-lg shadow-lg"
            >
                {/* Left Side - Text */}
                <div className="flex flex-col items-start text-center md:text-left space-y-4 max-w-lg">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-amber-950 leading-tight glow-text">
                        Welcome to the <br />
                        <span className="text-amber-700 typing-text">Online Library</span>
                    </h2>
                    <p className="text-lg text-gray-700">
                        Discover books, explore different genres, and read anywhere — anytime.
                    </p>
                    <button className="mt-4 bg-amber-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition btn-glow">
                        Explore Now
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center">
                    <img
                        src={home_banner}
                        alt="Home Banner"
                        className="w-[400px] md:w-[600px] rounded-lg drop-shadow-lg object-cover float-img"
                    />
                </div>
            </section>
        </div>
    )
}

export default Home