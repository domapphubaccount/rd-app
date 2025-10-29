interface TableHeaderProps {
  title: string;
  description: string;
}

export default function TableHeader({ title, description }: TableHeaderProps) {
  return (
    <div className="bg-[#f6f8fb] px-6 py-4 border-b border-[#eee] rounded-t-[12px]">
      <h2 className="text-[20px] font-semibold text-[#344155]">{title}</h2>
      <p className="text-[#667085] text-[15px] mt-1">{description}</p>
    </div>
  );
}