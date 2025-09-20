import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import AuthGuard from "./AuthGuard";

import Login from "@/routes/Login";
import Error from "@/routes/Error";
import Users from "@/routes/Users";
import ProjectsList from "@/routes/ProjectsList";
import CostEstimation from "@/routes/CostEstimation";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <AuthGuard>
        <RootLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/projects-list" replace />,
      },
      {
        path: "projects-list",
        element: <ProjectsList />,
      },
      {
        path: "/cost-estimation",
        element: <CostEstimation />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
