import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import AuthGuard from "./AuthGuard";

import Login from "@/routes/Login";
import Error from "@/routes/Error";
import Users from "@/routes/Users";

// prjects
import ProjectsList from "@/routes/projects/ProjectsList";
import CostEstimation from "@/routes/projects/CostEstimation";

// reports
import Rd0Reports from "@/routes/reports/Rd0Reports";
import Rd1Reports from "@/routes/reports/Rd1Reports";
import Rd2Reports from "@/routes/reports/Rd2Reports";
import Rd3Reports from "@/routes/reports/Rd3Reports";
import Rd5Reports from "@/routes/reports/Rd5Reports";
import Rd6Reports from "@/routes/reports/Rd6Reports";
import Rd7Reports from "@/routes/reports/Rd7Reports";
import DrReports from "@/routes/reports/DrReports";
import InspectionReports from "@/routes/reports/InspectionReports";
// Visits
import Visit from "@/routes/visits/Visit";

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
      {
        path: "/rd0-reports",
        element: <Rd0Reports />,
      },
      {
        path: "/rd1-reports",
        element: <Rd1Reports />,
      },
      {
        path: "/rd2-reports",
        element: <Rd2Reports />,
      },
      {
        path: "/rd3-reports",
        element: <Rd3Reports />,
      },
      {
        path: "/rd5-reports",
        element: <Rd5Reports />,
      },
      {
        path: "/rd6-reports",
        element: <Rd6Reports />,
      },
      {
        path: "/rd7-reports",
        element: <Rd7Reports />,
      },
      {
        path: "/dr-reports",
        element: <DrReports />,
      },
      {
        path: "/inspection-reports",
        element: <InspectionReports />,
      },
      {
        path: "/visits",
        element: <Visit />,
      },
    ],
  },
]);
