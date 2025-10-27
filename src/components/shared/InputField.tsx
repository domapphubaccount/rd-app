type InputFieldProps = {
  label?: string;
  error?: string;
  canReset?: boolean;
  onReset?: React.MouseEventHandler<HTMLButtonElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  error,
  canReset,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between  gap-2 w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="text-[16px] text-[#344155] font-bold"
          >
            {label}
          </label>
        )}
        {canReset && (
          <button onClick={props.onReset} className="text-[var(--second)]">
            Reset
          </button>
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
