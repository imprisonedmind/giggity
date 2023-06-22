export default function SectionHeader({ title }) {
  return (
    <div
      className={
        "max-w-[800px] text-center text-[24px] font-bold md:text-start" +
        " text-neutral-300 md:text-[50px]"
      }
    >
      {title}
    </div>
  );
}
