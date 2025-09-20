type InputFieldProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  error,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={props.id} className="text-[14px] text-[var(--main)]">
          {label}
        </label>
      )}
      <input
        {...props}
        className="bg-[#fafafa] border-[1px] text-[14px] border-[#f4f4f4] rounded-[8px] px-2 py-1 h-[48px]"
      />
      {error && <span className="text-[12px] text-[red]">{error}</span>}
    </div>
  );
}
