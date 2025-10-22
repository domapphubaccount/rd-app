import { createBrowserRouter, Navigate } from "react-router";

import RootLayout from "@/layouts/RootLayout";
import AuthGuard from "./AuthGuard";

import Login from "@/routes/Login";
import Error from "@/routes/Error";

// Projects
import ProjectsList from "@/routes/projects/ProjectsList";
import CostEstimation from "@/routes/projects/CostEstimation";

// Users
import Users from "@/routes/users/Users";
import Enduser from "@/routes/users/Enduser";

// Reports
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

// Quotations
import AdditionalVisit from "@/routes/quotations/AdditionalVisit";
import ProjectQuotations from "@/routes/quotations/ProjectQuotations";
import RD7Quotations from "@/routes/quotations/RD7Quotations";

// Tickets
import TicketList from "@/routes/tickets/TicketList";

// Settings
import GeneralSettings from "@/routes/settings/GeneralSettings";
import Modules from "@/routes/settings/Modules/Modules";
import UserRoles from "@/routes/settings/userRoles/UserRoles";
import UnitControl from "@/routes/settings/unitControl/UnitControl";
import FAQCategory from "@/routes/settings/FAQ/FAQCategory";
import Companies from "@/routes/settings/Companies/Companies";

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
      { index: true, element: <Navigate to="projects-list" replace /> },

      // Projects
      { path: "projects-list", element: <ProjectsList /> },
      { path: "cost-estimation", element: <CostEstimation /> },

      // Users
      { path: "users", element: <Users /> },
      { path: "end-users", element: <Enduser /> },

      // Reports
      { path: "rd0-reports", element: <Rd0Reports /> },
      { path: "rd1-reports", element: <Rd1Reports /> },
      { path: "rd2-reports", element: <Rd2Reports /> },
      { path: "rd3-reports", element: <Rd3Reports /> },
      { path: "rd5-reports", element: <Rd5Reports /> },
      { path: "rd6-reports", element: <Rd6Reports /> },
      { path: "rd7-reports", element: <Rd7Reports /> },
      { path: "dr-reports", element: <DrReports /> },
      { path: "inspection-reports", element: <InspectionReports /> },

      // Visits
      { path: "visits", element: <Visit /> },

      // Quotations
      { path: "rd7-quotations", element: <RD7Quotations /> },
      { path: "additional-visit", element: <AdditionalVisit /> },
      { path: "projects-quotations", element: <ProjectQuotations /> },

      // Tickets
      { path: "tickets", element: <TicketList /> },

      // Settings
      {
        path: "settings",
        children: [
          { index: true, element: <Navigate to="general-settings" replace /> },
          { path: "general-settings", element: <GeneralSettings /> },
          { path: "modules", element: <Modules /> },
          { path: "user-role", element: <UserRoles /> },
          { path: "units-control", element: <UnitControl /> },
          { path: "faq-categories", element: <FAQCategory /> },
          { path: "companies", element: <Companies /> },
        ],
      },
    ],
  },
]);
