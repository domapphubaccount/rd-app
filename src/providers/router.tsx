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
import Modules from "@/routes/settings/Modules";
import UserRoles from "@/routes/settings/UserRoles";
import UnitControl from "@/routes/settings/UnitControl";
import FAQCategory from "@/routes/settings/FAQCategory";
import FAQQuestions from "@/routes/settings/FAQQuestions";
import Stages from "@/routes/settings/Stages";
import Companies from "@/routes/settings/Companies";
import Category from "@/routes/settings/Category";
import TaxRates from "@/routes/settings/TaxRates";
import Insurance from "@/routes/settings/Insurance";
import WeirdPeople from "@/routes/settings/WeirdPeople";
import SuspendFilters from "@/routes/settings/SuspendFilters";
import QuestionsList from "@/routes/settings/QuestionsList";
import Sections from "@/routes/settings/Sections";

import SuspendedProjects from "@/routes/settings/SuspendedProjects";

import Email from "@/routes/settings/Templates/Email";
import SMS from "@/routes/settings/Templates/SMS";
import WhatsApp from "@/routes/settings/Templates/WhatsApp";

import EmailLog from "@/routes/settings/log/EmailLog";
import SMSLog from "@/routes/settings/log/SMSLog";
import WhatsAppLog from "@/routes/settings/log/WhatsAppLog";

import EmailQueue from "@/routes/settings/queue/EmailQueue";
import SMSQueue from "@/routes/settings/queue/SMSQueue";
import WhatsAppQueue from "@/routes/settings/queue/WhatsAppQueue";

import EmailSetting from "@/routes/settings/setting-email-sms-ws/EmailSetting";
import SMSSetting from "@/routes/settings/setting-email-sms-ws/SMSSetting";
import WhatsAppSetting from "@/routes/settings/setting-email-sms-ws/WhatsAppSetting";
// end user
import EditEndUser from "@/routes/settings/EditEndUser";
import Currency from "@/routes/settings/Currency";
import CronJob from "@/routes/settings/CronJob";

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
          { path: "faq-categories/:id", element: <FAQQuestions /> },
          { path: "companies", element: <Companies /> },
          { path: "stages", element: <Stages /> },
          { path: "tax-rates", element: <TaxRates /> },
          { path: "weird-people", element: <WeirdPeople /> },
          { path: "category", element: <Category /> },
          { path: "insurance-companies", element: <Insurance /> },
          
          { path: "suspend-filters", element: <SuspendFilters /> },
          { path: "suspended-projects", element: <SuspendedProjects /> },

          { path: "sections", element: <Sections /> ,},
          { path: "sections/:id", element: <QuestionsList /> },

          { path: "email-templates", element: <Email /> },
          { path: "sms-templates", element: <SMS /> },
          { path: "whatsApp-templates", element: <WhatsApp /> },

          { path: "email-log", element: <EmailLog /> },
          { path: "sms-log", element: <SMSLog /> },
          { path: "whatsApp-log", element: <WhatsAppLog /> },
          
          { path: "email-queue", element: <EmailQueue /> },
          { path: "sms-queue", element: <SMSQueue /> },
          { path: "whatsApp-queue", element: <WhatsAppQueue /> },
          
          { path: "email-settings", element: <EmailSetting /> },
          { path: "sms-settings", element: <SMSSetting /> },
          { path: "whatsApp-settings", element: <WhatsAppSetting /> },

          { path: "edit-end-user", element: <EditEndUser /> },
          
          { path: "currency", element: <Currency /> },

          { path: "cron-job-settings", element: <CronJob /> },
        ],
      },
    ],
  },
]);
