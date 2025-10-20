import { NavLink } from "react-router";
import type { SidebarItemType } from "./sidebarConfig";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Props = {
  item: SidebarItemType;
  open: string | null;
  setOpen: (val: string | null) => void;
};

export default function SidebarItem({ item, open, setOpen }: Props) {
  if (item.type === "link") {
    const Icon = item.icon;
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `flex items-center gap-3 text-[14px] font-bold py-4 px-6 whitespace-nowrap ${
            isActive
              ? "text-[var(--main)]"
              : "text-[var(--text)] hover:text-[var(--main)]"
          }`
        }
      >
        <Icon className="w-5 h-5" />
        {item.label}
      </NavLink>
    );
  }

  if (item.type === "accordion") {
    const Icon = item.icon;
    const isAccordionOpen = open === item.label;

    return (
      <Accordion
        type="single"
        collapsible
        value={isAccordionOpen ? item.label : ""}
        onValueChange={(val) => setOpen(val || null)}
        className="w-full whitespace-nowrap"
      >
        <AccordionItem value={item.label} className="border-0 py-4 px-6">
          <AccordionTrigger className="decoration-none [&[data-state=open]>div]:text-[var(--main)]">
            <div
              className={`flex items-center gap-3 text-[14px] font-bold ${
                isAccordionOpen
                  ? "text-[var(--main)]"
                  : "text-[var(--text)] hover:text-[var(--main)]"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-3 ps-3 pt-4 pb-0">
            {item.items.map((sub, index) => (
              <NavLink
                key={sub.label}
                to={sub.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-[12px] font-bold ${
                    isActive
                      ? "text-[var(--main)]"
                      : "text-[var(--text)] hover:text-[var(--main)]"
                  } ${
                    index !== item.items.length - 1
                      ? `relative after:content-[""] after:absolute after:left-[3px] after:top-[calc(100%-4px)] after:w-[2px] after:h-[19px] after:bg-[#99a2b3] ${
                          isActive ? "after:bg-[var(--text)]" : ""
                        }`
                      : ""
                  }`
                }
              >
                <span className="w-2 h-2 bg-[#99a2b3] rounded-full z-[1]" />
                {sub.label}
              </NavLink>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return null;
}
