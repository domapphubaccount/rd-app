import UserMenu from "./UserMenu";
import BreadCrumb from "./BreadCrumb";
import { Link } from "react-router";
import { useSidebarStore } from "../sidebar/themeStore";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

export default function Navbar() {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <div className="sticky z-20 top-0 left-0 right-0 h-[70px] bg-white ps-8 pe-6 flex justify-between items-center shadow-[0_0.75rem_1.5rem_rgba(18,38,63,0.03)]">
      <button
        className="absolute left-[-14px] w-6 h-6 flex items-center justify-center rounded-full border border-[#e2e8f0] bg-white"
        onClick={toggle}
      >
        {isOpen ? (
          <ChevronRight className="w-4 h-4 text-[var(--main)] font-bold" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-[var(--main)] font-bold" />
        )}
      </button>

      <BreadCrumb />

      <div className="flex items-center gap-4">
        <Link
          to="/settings/general-settings"
          className="w-9 h-9 rounded-full border border-[#f4f4f4] flex items-center justify-center"
        >
          <Settings className="w-5 h-5 text-[var(--text)]" />
        </Link>

        <UserMenu />
      </div>
    </div>
  );
}
