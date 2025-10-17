
import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../utils/categories';

// Footer Component - Fully Responsive
function Footer({ onCategorySelect }) {
  const navigate = useNavigate();

  return (
    <footer className="bg-amber-100 text-gray-800 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* About Section - Column 1 */}
          <div className="flex flex-col items-start">
            <Link to="/">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-amber-800 p-2 rounded-lg shadow-md">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900">Library</span>
              </div>
            </Link>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Your digital library for discovering and exploring books from various genres and authors around the world.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <Link
                to="/"
                className="bg-amber-800 p-2 rounded-full hover:bg-amber-600 transition-colors shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                to="/"
                className="bg-amber-800 p-2 rounded-full hover:bg-amber-600 transition-colors shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </Link>
              <Link
                to="/"
                className="bg-amber-800 p-2 rounded-full hover:bg-amber-600 transition-colors shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
              <Link
                to="/"
                className="bg-amber-800 p-2 rounded-full hover:bg-amber-600 transition-colors shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="flex flex-col">
            <h3 className="text-gray-900 font-bold text-lg sm:text-xl mb-4 border-b-2 border-amber-800 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base flex items-center group"
                >
                  <span className="w-2 h-2 bg-amber-800 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/browse-books"
                  className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base flex items-center group"
                >
                  <span className="w-2 h-2 bg-amber-800 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Browse Books
                </Link>
              </li>
              <li>
                <Link
                  to="/add-book"
                  className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base flex items-center group"
                >
                  <span className="w-2 h-2 bg-amber-800 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Add Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories - Column 3 */}
          <div className="flex flex-col">
            <h3 className="text-gray-900 font-bold text-lg sm:text-xl mb-4 border-b-2 border-amber-800 pb-2 inline-block">
              Categories
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {categories
                .filter(cat => cat.category.toLowerCase() !== 'all')
                .map((cat) => (
                  <li key={cat.id}>
                    <Link to={`/books/${cat.category}`}
                      className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base flex items-center group"
                      onClick={() => {
                        onCategorySelect(cat.category);
                      }}
                    >
                      <span className="w-2 h-2 bg-amber-800 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      {cat.category}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Column 4 */}
          <div className="flex flex-col">
            <h3 className="text-gray-900 font-bold text-lg sm:text-xl mb-4 border-b-2 border-amber-800 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">Email</p>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-amber-600 transition-colors text-xs sm:text-sm"
                  >
                    info@Library.com
                  </Link>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">Phone</p>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-amber-600 transition-colors text-xs sm:text-sm"
                  >
                    +91 9876543237
                  </Link>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">Address</p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Book City, BC 12345
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-amber-800 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            {/* Copyright */}
            <p className="text-white text-xs sm:text-sm text-center sm:text-left">
              © 2025 Library. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
              <Link
                to="/"
                className="text-white hover:text-amber-100 transition-colors text-xs sm:text-sm font-medium"
              >
                Privacy Policy
              </Link>
              <span className="text-white text-xs hidden sm:inline">|</span>
              <Link
                to="/"
                className="text-white hover:text-amber-100 transition-colors text-xs sm:text-sm font-medium"
              >
                Terms of Service
              </Link>
              <span className="text-white text-xs hidden sm:inline">|</span>
              <Link
                    to="/"
                className="text-white hover:text-amber-100 transition-colors text-xs sm:text-sm font-medium"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;