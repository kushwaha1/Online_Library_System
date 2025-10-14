import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <header className="w-full px-18 py-2 flex justify-between items-center bg-transparent backdrop-blur-md fixed top-0 left-0 z-50">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex gap-2 justify-center items-center">
                        <img src={logo} alt="Logo" width="50" height="40" />
                        <span className='logo'>Library</span>
                    </div>
                    <div className="flex gap-12">
                        <Link to="/"><span className='navs'>Home</span></Link>
                        <Link to="/books/all"><span className='navs'>Browse Books</span></Link>
                        <Link to="/add"><span className='navs'>Add Book</span></Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar