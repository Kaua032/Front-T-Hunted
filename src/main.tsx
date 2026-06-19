import React, { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./GlobalStyled.jsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/home",
    element: <></>,
  },
  {
    path: "/teachers",
    element: <></>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
  </React.StrictMode>
);