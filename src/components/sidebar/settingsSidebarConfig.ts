import { BriefcaseBusiness, Settings } from "lucide-react";
import type { SidebarItemType } from "./sidebarConfig";

export const settingsSidebarItems: SidebarItemType[] = [
  {
    type: "link",
    label: "General",
    to: "/settings/general-settings",
    icon: Settings,
  },
  {
    type: "accordion",
    label: "Projects",
    icon: BriefcaseBusiness,
    items: [
      { label: "Projects List", to: "/projects-list" },
      { label: "Project Cost Estimation", to: "/cost-estimation" },
    ],
  },
];
