import { lazy, type ReactNode } from "react";
import { RouteObject } from "react-router";

//pages
const Home = lazy(() => import("./pages/Home"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];
