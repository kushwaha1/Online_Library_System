import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import BrowseBooks from "./pages/BrowseBooks/BrowseBooks";
import BookPage from "./components/BookPage";

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
                path: 'browse-books',
                element: <BrowseBooks />
            },
            {
                path: '/books/:category',
                element: <BookPage />
            },
        ]
    }
])

export default appRouter;