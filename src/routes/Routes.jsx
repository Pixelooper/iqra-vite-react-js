import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Surah from "../pages/Surah";
import Ayat from "../pages/Ayat";
import Tasfir from "../pages/Tasfir";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/search',
            element: <Search></Search>
        }, 
        {
          path: '/surah/:id',
          element: <Surah></Surah>
        },
        {
          path: '/ayat/:id',
          element: <Ayat></Ayat>
        },
        {
          path: '/tafsir/:id/:aid',
          element: <Tasfir></Tasfir>
        },
      ]
    },
    // {
    //   path: 'dashboard',
    //   element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    //   children: [
    //     //normal user routes
    //     {
    //       path: 'userHome',
    //       element: <UserHome></UserHome>
    //     },
    //   ]
    // }
  ]);