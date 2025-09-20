import { ChevronDown, LogOut, User } from "lucide-react";
import { Link } from "react-router";
import { useCookies } from "react-cookie";
import { useAuthStore } from "@/features/auth/store";
import { useQueryClient } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserMenu() {
  const { user, logout } = useAuthStore();
  const queryClient = useQueryClient();
  const [, , removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    logout();
    queryClient.clear();
    removeCookie("token");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={user?.image || "/icons/user.svg"}
            alt={user?.name}
            className="w-9 h-9 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <h6 className="text-[var(--main)] text-[14px] font-bold">
              {user?.name}
            </h6>
            <span className="text-[var(--text)] text-[12px]">
              {user?.role.name}
            </span>
          </div>

          <ChevronDown className="w-4 h-4 text-[var(--text)]" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-44 flex flex-col gap-1">
        <DropdownMenuRadioItem value="profile" className="pl-4">
          <Link to="/profile" className="flex gap-2 items-center w-full">
            <User className="w-4 h-4" /> Profile
          </Link>
        </DropdownMenuRadioItem>

        <DropdownMenuRadioItem
          value="profile"
          onClick={handleLogout}
          className="pl-4 flex gap-2 items-center cursor-pointer"
        >
          <LogOut className="w-4 h-4 text-[#f44336]" /> Logout
        </DropdownMenuRadioItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
