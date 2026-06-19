import React, { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./GlobalStyled.jsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import App from './App.tsx';

import Login from './Pages/Login/Login.tsx';
import Register from './Pages/Register/Register.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/home",
    element: <></>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);