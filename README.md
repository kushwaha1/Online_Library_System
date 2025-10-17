# Online Library App

A fully responsive **Online Library Web Application** built with **React**, **Redux**, **Tailwind CSS**, and **React Router**. Users can browse, search, filter, add book, and view detailed information about books.

---

## Features

- Browse all books or by category  
- Search books by **title** or **author**  
- View **book details** with title, author, description, ratings and description  
- Responsive **Navbar** with active link highlighting and mobile hamburger menu  
- Smooth **ScrollToTop** on route change  
- Add new books (instantly visible at the top of browse-books list)  
- Fully responsive **Footer** with contact info, social links, and category quick links  
- Animated UI elements including **floating sparkles**, **gradient flows**, and **button effects**  

---

## Technology Stack

- `React` — For building the UI components  
- `Tailwind CSS` — For fast and responsive styling  
- `Custom CSS Animations` — To bring smooth transitions and visual appeal  
- `Lucide Icons` — For lightweight, elegant icons

---

## 📁 Project Structure

* src/
    - assets/                 # Logos and images
    - components/             # Reusable UI components
        * BookCard/           # Individual book card with animations
        * Navbar/             # For Header, logo and nav-links
        * BookList/           # Grid/list view of books
        * BookPage/           # Showing books on basis of category
        * Categories/         # Category selection buttons
        * SearchFilter/       # Debounced search input
        * Footer/             # Add Quick Links, categories, social lins
        * ScrollToTop/        # When click on any route it should scroll to top        
    - pages/                  # Main pages
        * AddBook.jsx          # Book form
        * Home.jsx             # Home page with featured books
        * BrowseBooks.jsx      # Browse all books page
        * BookPage.jsx         # Category-based books page
        * NotFound.jsx         # 404 page
    - utils/                  # Utility files
        * booksData.js        # Sample books JSON
        * categories.js       # Book categories JSON
        * bookSlice.js        # Book slice reducer and action
    - store/
        * store.jsx           # Configure store
    - App.jsx                  # Main React app
    - index.jsx                # React entry point
    - router.jsx               # Create routes


### Setup Instructions

1. Clone or download this repository 
    (`git clone https://github.com/kushwaha1/Online_Library_System.git`).
2. Run command in vscode terminal `npm i` for installing packages.
3. Open vscode terminal and run `npm run dev`.
4. The app will now be running at `http://localhost:5173/`.

### How It Works

1. On landing page — `Header, Banner, Book List and Footer `are displayed.
2. React Router manages page navigation `(Home, Browse, Add Book, Book Details)`.
3. `Redux Toolkit` maintains book data globally.
4. Users can `browse, filter or search books`.
5. `Add Book` page contains a form with basic validations.
6. `New books appear at the top of the list on the Browse page`.
7. `ScrollToTop` ensures `users start from the top of the page on every route change`.
8. Each book card has a `View Details` button leading to the `Book Details` page.
9. Floating and gradient animations are achieved with CSS keyframes.

### UI Components & Styling Overview

1. Navbar: Responsive, active link highlighting, hamburger menu on mobile.
2. Book Card: Animated display of book information.
3. Footer: Responsive with quick links, categories, social links and contact info.
4. Animations: Subtle floating and gradient flow effects.