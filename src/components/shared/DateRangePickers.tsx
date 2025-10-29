import { useEffect, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

type DateRangePickerWithIconProps = {
  startName: string;
  endName: string;
  label?: string;
  canReset?: boolean;
  onChange?: (field: string, value: Date | undefined) => void;
  startValue?: string;
  endValue?: string;
  onReset?: () => void;
};

export default function DateRangePickerWithIcon({
  startName,
  endName,
  onChange,
  startValue,
  canReset,
  endValue,
  onReset,
}: DateRangePickerWithIconProps) {
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(
    startValue ? new Date(startValue) : undefined
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    endValue ? new Date(endValue) : undefined
  );

  useEffect(() => {
    setStartDate(startValue ? new Date(startValue) : undefined);
    setEndDate(endValue ? new Date(endValue) : undefined);
  }, [startValue, endValue]);

  return (
    <div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-full relative ">
          <Label className="text-sm" htmlFor={startName}>
            from
          </Label>

          <Popover open={startOpen} onOpenChange={setStartOpen}>
            <div className="relative w-full">
              <Input
                id={startName}
                name={startName}
                value={startDate ? format(startDate, "PPP") : ""}
                placeholder="Placeholder"
                readOnly
                className="bg-[#fafafa] border border-[#f4f4f4] text-[14px] rounded-[8px] px-3 py-1 h-[44px] shadow-none"
              />
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute end-2 top-1/2 -translate-y-1/2 p-1"
                  onClick={() => setStartOpen(!startOpen)}
                >
                  <div className="p-2">
                    <CalendarIcon className="h-5 w-5 text-[#555E67]" />
                  </div>
                </Button>
              </PopoverTrigger>
            </div>

            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) => {
                  setStartDate(date);
                  setStartOpen(false);
                  if (onChange) onChange(startName, date);
                  if (endDate && date && endDate < date) setEndDate(undefined);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-2 w-full relative">
          <Label
            className="text-sm flex items-center justify-between"
            htmlFor={endName}
          >
           to
            {canReset && (
              <button className="text-[var(--second)]" onClick={onReset}>
                Reset
              </button>
            )}
          </Label>

          <Popover open={endOpen} onOpenChange={setEndOpen}>
            <div className="relative w-full flex ">
              <Input
                id={endName}
                name={endName}
                value={endDate ? format(endDate, "PPP") : ""}
                placeholder="Placeholder"
                readOnly
                className="bg-[#fafafa] border border-[#f4f4f4]  text-[14px] rounded-[8px] px-3 py-1 h-[44px] shadow-none"
              />

              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute end-2 top-1/2 -translate-y-1/2 p-1"
                  onClick={() => setEndOpen(!endOpen)}
                >
                  <div className="p-2">
                    <CalendarIcon className="h-5 w-5 text-[#555E67]" />
                  </div>
                </Button>
              </PopoverTrigger>
            </div>

            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={(date) => {
                  setEndDate(date);
                  setEndOpen(false);
                  if (onChange) onChange(endName, date);
                }}
                disabled={(date) => (startDate ? date < startDate : false)}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
