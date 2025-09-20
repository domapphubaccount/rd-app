import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { DateRange } from "react-day-picker";

export default function TimeRange() {
  const [searchParams, setSearchParams] = useSearchParams();

  const from = searchParams.get("start_date");
  const to = searchParams.get("end_date");

  const [range, setRange] = useState<DateRange | undefined>(undefined);

  useEffect(() => {
    if (from && to) {
      setRange({
        from: new Date(from),
        to: new Date(to),
      });
    } else {
      setRange(undefined);
    }
  }, [from, to]);

  const handleChange = (val: DateRange | undefined) => {
    setRange(val ?? undefined);

    if (val?.from && val?.to && val.from.getTime() !== val.to.getTime()) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("page", "1");
        params.set("start_date", val?.from?.toISOString().split("T")[0] ?? "");
        params.set("end_date", val?.to?.toISOString().split("T")[0] ?? "");
        return params;
      });
    }
  };

  const handleRemoveDates = () => {
    setRange(undefined);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", "1");
      params.delete("start_date");
      params.delete("end_date");
      return params;
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="bg-white rounded shadow-md p-2 relative">
          <CalendarDays className="w-4 h-4" />
          {from && to && (
            <span
              className="text-red-500 absolute top-[-8px] right-[-8px] cursor-pointer z-10 w-4 h-4 bg-white shadow rounded flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveDates();
              }}
            >
              <X className="w-3 h-3" />
            </span>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range}
          captionLayout="dropdown"
          onSelect={handleChange}
        />
      </PopoverContent>
    </Popover>
  );
}
