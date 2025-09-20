import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { X } from "lucide-react";

const options = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
];

export function MultiSelect() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const removeOption = (value: string) => {
    setSelected((prev) => prev.filter((v) => v !== value));
  };

  return (
    <div className="flex flex-col gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-[300px] justify-between"
          >
            {selected.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {selected.map((val) => {
                  const opt = options.find((o) => o.value === val);
                  return (
                    <span
                      key={val}
                      className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-sm"
                    >
                      {opt?.label}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeOption(val);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            ) : (
              "Select frameworks..."
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  onSelect={() => toggleOption(opt.value)}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(opt.value)}
                    readOnly
                    className="mr-2"
                  />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
