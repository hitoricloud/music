import { lazy } from "react";
import { RouteObject } from "react-router";

//pages
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
];
