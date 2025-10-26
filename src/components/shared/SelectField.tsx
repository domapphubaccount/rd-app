import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  label: string;
  id: string;
  value?: string;
  onChange: (value: string) => void;
  canReset?: boolean;
  onReset?: () => void;
  options: Option[];
  placeholder?: string;
  error?: string;
};

export default function SelectField({
  label,
  id,
  value ,
  onChange,
  options,
  canReset,
  placeholder,
  error,
  onReset,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-sm flex items-center justify-between">
        {label}
        {canReset && (
          <button
            type="button"
            onClick={onReset}
            className="text-[var(--second)]"
          >
            Reset
          </button>
        )}
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id={id}
          className="w-full px-4 !h-[48px] rounded-[8px] border-[#f4f4f4] bg-[#fafafa]"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && <p className="text-[12px] text-red-500">{error}</p>}
    </div>
  );
}
