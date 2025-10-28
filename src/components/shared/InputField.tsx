type InputFieldProps = {
  label?: string;
  error?: string;
  id?:string;
  canReset?: boolean;
  onReset?: React.MouseEventHandler<HTMLButtonElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  id,
  error,
  canReset,
  onReset,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between  gap-2 w-full">
        {label && (
          <label
            htmlFor={id}
            className="flex items-center justify-between text-[14px] text-[var(--main)] font-semibold"
          >
            {label}

            {canReset && (
              <button
                onClick={onReset}
                className="text-[var(--second)] font-normal"
              >
                Reset
              </button>
            )}
          </label>
        )}
      </div>
      <input
        {...props}
        className="bg-[#fafafa] border-[1px] text-[14px] border-[#f4f4f4] rounded-[8px] px-2 py-1 h-[48px]"
      />
      {error && <span className="text-[12px] text-[red]">{error}</span>}
    </div>
  );
}
