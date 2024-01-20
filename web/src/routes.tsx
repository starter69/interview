import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

const Dashboard = React.lazy(() => import("./components/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
