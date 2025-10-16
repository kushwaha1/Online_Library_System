import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import BrowseBooks from "./pages/BrowseBooks/BrowseBooks";

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
                path: 'books',
                element: <BrowseBooks />
            }
        ]
    }
])

export default appRouter;