import {
  BriefcaseBusiness,
  Calendar,
  ClipboardMinus,
  FileChartColumn,
  Folder,
  Network,
  Ticket,
  UserCog,
  UsersRound,
} from "lucide-react";

export type SidebarLink = {
  type: "link";
  label: string;
  to: string;
  icon: React.ElementType;
};

export type SidebarAccordion = {
  type: "accordion";
  label: string;
  icon: React.ElementType;
  items: { label: string; to: string }[];
};

export type SidebarItemType = SidebarLink | SidebarAccordion;

export const sidebarItems: SidebarItemType[] = [
  {
    type: "accordion",
    label: "Projects",
    icon: BriefcaseBusiness,
    items: [
      { label: "Projects List", to: "/projects-list" },
      { label: "Project Cost Estimation", to: "/cost-estimation" },
    ],
  },
  {
    type: "link",
    label: "Users",
    to: "/users",
    icon: UsersRound,
  },
  {
    type: "accordion",
    label: "Reports",
    icon: ClipboardMinus,
    items: [
      { label: "RD-0 Reports", to: "/rd0-reports" },
      { label: "RD-1 Reports", to: "/rd1-reports" },
      { label: "RD-2 Reports", to: "/rd2-reports" },
      { label: "RD-3 Reports", to: "/rd3-reports" },
      { label: "RD-5 Reports", to: "/rd5-reports" },
      { label: "DR Reports", to: "/dr-reports" },
      { label: "Inspections Reports", to: "/inspections-reports" },
      { label: "RD-6 Reports", to: "/rd6-reports" },
      { label: "RD-7 Reports", to: "/rd7-reports" },
    ],
  },
  { type: "link", label: "Tickets", to: "/tickets", icon: Ticket },
  { type: "link", label: "Visits", to: "/visits", icon: Calendar },
  {
    type: "accordion",
    label: "Quotations",
    icon: FileChartColumn,
    items: [
      { label: "Projects Quotations", to: "/projects-quotations" },
      { label: "RD7 Quotations", to: "/rd7-quotations" },
      { label: "Additional Visit", to: "/additional-visit" },
    ],
  },
  { type: "link", label: "End Users", to: "/end-users", icon: UserCog },
  {
    type: "link",
    label: "Contractor Guide",
    to: "/contractor-guide",
    icon: Folder,
  },
  {
    type: "link",
    label: "Company Structure",
    to: "/company-structure",
    icon: Network,
  },
];
