import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Link for navigation, useLocation to get current route
import { Home, Library, BookPlus } from 'lucide-react'; // Icons for navigation items
import logo from '../../assets/Logo.png'; // Logo image
import "./Navbar.css"; // Custom styles for Navbar

function Navbar() {
    // State to track mobile menu open/close
    const [isOpen, setIsOpen] = useState(false);

    // Get current route path to highlight active nav link
    const location = useLocation();

    return (
        <div>
            {/* Header Container: fixed at top with blur background */}
            <header className="w-full px-4 py-2 flex justify-between items-center bg-transparent backdrop-blur-md fixed top-0 left-0 z-50">
                
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    
                    {/* Logo and site name */}
                    <Link to="/">
                        <div className="flex gap-2 justify-center items-center logo-animate">
                            <img src={logo} alt="Logo" width="50" height="40" />
                            <span className='logo'>Library</span>
                        </div>
                    </Link>
                    
                    {/* ---------------- Desktop Menu ---------------- */}
                    {/* Hidden on small screens (md:hidden) */}
                    <div className="hidden md:flex gap-12">
                        <Link to="/">
                            <span className={location.pathname === '/' ? 'navs active' : 'navs'}>
                                <Home className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                Home
                            </span>
                        </Link>
                        <Link to="/browse-books">
                            <span className={location.pathname === '/browse-books' ? 'navs active' : 'navs'}>
                                <Library className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                Browse Books
                            </span>
                        </Link>
                        <Link to="/add-book">
                            <span className={location.pathname === '/add-book' ? 'navs active' : 'navs'}>
                                <BookPlus className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                Add Book
                            </span>
                        </Link>
                    </div>

                    {/* ---------------- Hamburger Menu (Mobile) ---------------- */}
                    <button 
                        className="md:hidden flex flex-col gap-1.5"
                        onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
                    >
                        {/* Hamburger lines with animation on toggle */}
                        <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </nav>

                {/* ---------------- Mobile Menu Items ---------------- */}
                {/* Visible only when hamburger is clicked */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
                        <div className="flex flex-col lg:gap-4 md:gap-4 gap-6 px-8 py-6">
                            {/* Close menu when a link is clicked */}
                            <Link to="/" onClick={() => setIsOpen(false)}>
                                <span className={location.pathname === '/' ? 'navs active' : 'navs'}>
                                    <Home className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                    Home
                                </span>
                            </Link>
                            <Link to="/browse-books" onClick={() => setIsOpen(false)}>
                                <span className={location.pathname === '/browse-books' ? 'navs active' : 'navs'}>
                                    <Library className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                    Browse Books
                                </span>
                            </Link>
                            <Link to="/add-book" onClick={() => setIsOpen(false)}>
                                <span className={location.pathname === '/add-book' ? 'navs active' : 'navs'}>
                                    <BookPlus className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                    Add Book
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Navbar;