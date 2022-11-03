import { RouteObject, Navigate } from "react-router-dom";

import { routes } from "shared/config/routes";
import { App } from "./app/app";
import { Home } from "./app/home/home";
import { Tasks } from "./app/tasks/tasks";

export const privateRoutesConfig: RouteObject[] = [
  {
    path: routes.privateRoutes.APP + "*",
    element: <App />,
    children: [
      {
        path: routes.privateRoutes.HOME,
        element: <Home />,
        children: [
          {
            path: "",
            element: <>tut zaglushka</>,
          },
          {
            path: routes.privateRoutes.CATEGORIES + ":categoryid",
            element: <Tasks />,
          },
          {
            path: "*",
            element: <Navigate to={routes.privateRoutesForNavigation.HOME} />,
          },
        ],
      },

      {
        path: "*",
        element: <Navigate to={routes.privateRoutesForNavigation.HOME} />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={routes.privateRoutesForNavigation.HOME} />,
  },
];
