export default function BentoHeader({ title, description }) {
  return (
    <div className="flex flex-col items-start justify-start gap-[4px] p-[0px]">
      <div className="text-[24px] font-bold text-neutral-300">{title}</div>
      <div className="text-[16px] text-neutral-300">{description}</div>
    </div>
  );
}
