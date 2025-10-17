import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import BrowseBooks from "./pages/BrowseBooks/BrowseBooks";
import BookPage from "./components/BookPage";
import AddBook from "./pages/AddBook/AddBook";
import BookDetails from "./pages/BookDetails/BookDetails";
import NotFound from "./pages/NotFound/NotFound";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/browse-books',
                element: <BrowseBooks />
            },
            {
                path: '/books/:category',
                element: <BookPage />
            },
            {
                path: '/add-book',
                element: <AddBook />
            }, {
                path: '/book-details/:id',
                element: <BookDetails />
            }
        ],
        errorElement:<NotFound />
    }
])

export default appRouter;