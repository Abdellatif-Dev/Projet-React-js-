import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Loyouts/Layouts";
import Accueil from "../pages/Accueil";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Series from "../pages/Series";
import Affichage from "../pages/Affichage";
import Anime from "../pages/Anime";

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
                path: "/series/:T",
                element: <Anime/>,
            },
            {
                path: "/series/:T/page/:P",
                element: <Anime/>,
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