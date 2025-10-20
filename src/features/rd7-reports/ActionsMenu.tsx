import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, UserCog, MessageSquare } from "lucide-react";

const ActionsMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Open actions menu"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-white p-2 rounded-md shadow-lg"
        side="right"
        align="start"
        sideOffset={8}
      >
        <DropdownMenuItem className="cursor-pointer text-sm text-gray-700 p-2 hover:bg-gray-100 hover:rounded-md flex items-center gap-2">
          <UserCog className="w-4 h-4 text-gray-500" />
          Transfer To
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer text-sm text-gray-700 p-2 hover:bg-gray-100 hover:rounded-md flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-gray-500" />
          RD7 History
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionsMenu;
