import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import HomeContent from "./HomeContent";
import AboutContent from "./AboutContent";
import ContactContent from "./ContactContent";
import "./index.css";
import NotFoundPage from "./NotFoundPage";
import TeamContent from "./TeamContent";
import UserId from "./UserId";
import SearchContent from "./SearchContent";

const Routing = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { index: true, element: <HomeContent /> },
        {
          path: "about",
          element: <AboutContent />,
          children: [{ path: "team", element: <TeamContent /> }],
        },
        { path: "contact", element: <ContactContent /> },
      ],
      errorElement: <NotFoundPage />,
    },
    {
      path: "/user/:id",
      element: <UserId />,
    },
    {
        path:'/search',
        element:<SearchContent/>
    }
  ]);
  return <RouterProvider router={route} />;
};

export default Routing;
