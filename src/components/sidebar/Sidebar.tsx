import { useEffect, useState } from "react";
import { useSidebarStore } from "./themeStore";
import { sidebarItems } from "./sidebarConfig";
import { Link, useLocation } from "react-router";
import { settingsSidebarItems } from "./settingsSidebarConfig";
import SidebarItem from "./SidebarItem";
import CollapsedItem from "./CollapsedItem";

export default function Sidebar() {
  const { isOpen } = useSidebarStore();
  const location = useLocation();

  const isSettingLayout = location.pathname.startsWith("/settings");

  const currentSidebarItems = isSettingLayout
    ? settingsSidebarItems
    : sidebarItems;

  const getDefaultOpen = () =>
    currentSidebarItems.find(
      (item) =>
        item.type === "accordion" &&
        item.items.some((sub) => location.pathname.startsWith(sub.to))
    )?.label || null;

  const [open, setOpen] = useState<string | null>(getDefaultOpen);

  useEffect(() => {
    setOpen(getDefaultOpen());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <aside
      className={`h-[100vh] bg-white shadow-[0_0.75rem_1.5rem_rgba(18,38,63,0.03)] fixed top-0 left-0 z-10 ${
        isOpen ? "w-[80px]" : "w-[250px]"
      }`}
    >
      <Link to="/" className="h-[70px] px-6 bg-white w-full flex items-center">
        <img
          src={isOpen ? "/images/fav.png" : "/images/logo.png"}
          alt="logo"
          className="h-[40px]"
          loading="lazy"
        />
      </Link>

      {isOpen ? (
        <div className="h-[calc(100vh-70px)] flex flex-col">
          {currentSidebarItems.map((item) => (
            <div key={item.label} className="relative">
              <CollapsedItem item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-70px)] overflow-y-auto flex flex-col">
          {currentSidebarItems.map((item) => (
            <div key={item.label} className="relative">
              <SidebarItem item={item} open={open} setOpen={setOpen} />
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
