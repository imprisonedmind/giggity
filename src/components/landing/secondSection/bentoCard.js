import BentoHeader from "@/components/landing/secondSection/bentoHeader";

export default function BentoCard({
  icon,
  content,
  large,
  title,
  description,
}) {
  return (
    <div
      className={`${large ? "col-span-1 md:col-span-2" : "col-span-1"} flex`}
    >
      <div
        className={`${
          large ? "p-4" : "max-h-[350px] pl-4 pt-4 "
        } flex w-1/2 grow overflow-hidden rounded-lg border 
          border-neutral-700 bg-neutral-800 `}
      >
        <div
          className={`${
            large
              ? "flex-wrap items-center justify-between md:flex-nowrap"
              : "flex-col"
          } flex w-full gap-8 overflow-hidden`}
        >
          <div className="flex w-fit flex-col gap-2">
            {icon && icon}
            <BentoHeader title={title} description={description} />
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}
