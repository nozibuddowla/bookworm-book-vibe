import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
import Loading from "../components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const response = await fetch("/booksData.json");
          return response.json();
        },
        path: "/",
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: async () => {
          const response = await fetch("/booksData.json");
          return response.json();
        },
        Component: BookDetails,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/readList",
        loader: async () => {
          const response = await fetch("/booksData.json");
          return response.json();
        },
        Component: ReadList,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/wishList",
        loader: async () => {
          const response = await fetch("/booksData.json");
          return response.json();
        },
        Component: ReadList,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);
