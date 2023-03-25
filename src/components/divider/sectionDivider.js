import DividerLine from "@/components/line/dividerLine";

export default function SectionDivider({ title }) {
  return (
    <div className={"mt-8 flex w-full flex-nowrap items-center"}>
      <DividerLine />
      <h1
        className={
          "flex-shrink-0 px-4 text-sm font-normal uppercase tracking-wider" +
          " text-neutral-500"
        }
      >
        {title}
      </h1>
      <DividerLine />
    </div>
  );
}
