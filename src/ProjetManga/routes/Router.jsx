import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Loyouts/Layouts";
import Accueil from "../pages/Accueil";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Series from "../pages/Series";
import Affichage from "../pages/Affichage";

export const route=createBrowserRouter([
    {
        element: <Layouts/>,
        children: [
            {
                path: "/",
                element: <Accueil/>,
            },
            {
                path: "/series",
                element: <Series/>,
            },
            {
                path: "/series/:T/:N",
                element: <Affichage/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ]
    }
])