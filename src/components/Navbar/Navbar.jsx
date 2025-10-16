import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Home, Library, BookPlus } from 'lucide-react';
import logo from '../../assets/Logo.png';
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div>
            <header className="w-full px-4 py-2 flex justify-between items-center bg-transparent backdrop-blur-md fixed top-0 left-0 z-50">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex gap-2 justify-center items-center">
                        <img src={logo} alt="Logo" width="50" height="40" />
                        <span className='logo'>Library</span>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-12">
                        <Link to="/">
                            <span className={location.pathname === '/' ? 'navs active' : 'navs'}>
                                <Home className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                Home
                            </span>
                        </Link>
                        <Link to="/books">
                            <span className={location.pathname === '/books' ? 'navs active' : 'navs'}>
                                <Library className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                Browse Books
                            </span>
                        </Link>
                        <Link to="/addBooks">
                            <span className={location.pathname === '/addBooks' ? 'navs active' : 'navs'}>
                                <BookPlus className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                Add Book
                            </span>
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button 
                        className="md:hidden flex flex-col gap-1.5"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
                        <div className="flex flex-col lg:gap-4 md:gap-4 gap-6 px-8 py-6">
                            <Link to="/" onClick={() => setIsOpen(false)}>
                                <span className={location.pathname === '/' ? 'navs active' : 'navs'}>
                                    <Home className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                    Home
                                </span>
                            </Link>
                            <Link to="/books" onClick={() => setIsOpen(false)}>
                                <span className={location.pathname === '/books' ? 'navs active' : 'navs'}>
                                    <Library className="inline-block w-5 h-5 mr-2 mb-0.5" />
                                    Browse Books
                                </span>
                            </Link>
                            <Link to="/add-book" onClick={() => setIsOpen(false)}>
                                <span className={location.pathname === '/add' ? 'navs active' : 'navs'}>
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

export default Navbar