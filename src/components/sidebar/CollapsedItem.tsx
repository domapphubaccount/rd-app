import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import type { SidebarItemType } from "./sidebarConfig";

type Props = { item: SidebarItemType };

export default function CollapsedItem({ item }: Props) {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  if (item.type === "link") {
    const Icon = item.icon;

    return (
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <NavLink
          to={item.to}
          className={() =>
            `flex items-center justify-center py-4 px-6 
             text-[var(--text)] hover:text-[var(--main)] 
             ${hovered ? "bg-[#f5f5f5]" : ""} 
             `
          }
        >
          {({ isActive }) => (
            <Icon
              className={`w-5 h-5 ${
                isActive ? "text-[var(--main)]" : "text-[var(--text)]"
              }`}
            />
          )}
        </NavLink>

        {hovered && (
          <div className="absolute left-full h-full w-[200px] shadow-sm flex items-center top-1/2 -translate-y-1/2 ps-5 bg-[#f5f5f5] text-sm font-medium whitespace-nowrap z-20">
            {item.label}
          </div>
        )}
      </div>
    );
  }

  if (item.type === "accordion") {
    const Icon = item.icon;

    const isSubActive = item.items.some((sub) =>
      location.pathname.startsWith(sub.to)
    );

    return (
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`flex items-center justify-center py-4 px-6 
          text-[var(--text)] hover:text-[var(--main)] 
          ${hovered ? "bg-[#f5f5f5]" : ""} 
          `}
        >
          <Icon
            className={`w-5 h-5 ${
              isSubActive ? "text-[var(--main)]" : "text-[var(--text)]"
            }`}
          />
        </div>

        {hovered && (
          <div className="absolute left-full top-0 bg-white min-w-[200px] z-20 shadow-sm">
            <div className="px-3 py-2 flex items-center text-[var(--main)] h-[52px] bg-[#f5f5f5]">
              {item.label}
            </div>

            <div className="flex flex-col">
              {item.items.map((sub) => (
                <NavLink
                  key={sub.label}
                  to={sub.to}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm 
                     ${
                       isActive
                         ? "text-[var(--main)] bg-gray-100 font-medium"
                         : "text-[var(--text)]"
                     } 
                     hover:bg-gray-100`
                  }
                >
                  {sub.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
