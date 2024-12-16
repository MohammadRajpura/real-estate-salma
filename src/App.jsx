import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import UserDetails from "./components/UserDetails/UserDetails";

const App = () => {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/user-details/:id",
          element: <UserDetails />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
};

export default App;
