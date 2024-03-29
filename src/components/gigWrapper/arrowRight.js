import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ArrowRight({
  dragPosition,
  maxScrollPosition,
  handleRightArrowClick,
}) {
  return (
    <div
      className={`${
        dragPosition < maxScrollPosition
          ? "w-[50px] md:w-[100px]"
          : "w-0 opacity-0"
      } transition-width pointer-events-none z-30 flex h-full items-center justify-end from-neutral-900/0 
          to-neutral-900 duration-700 ease-in-out md:pointer-events-auto md:bg-gradient-to-r`}
    >
      <div
        onClick={() => handleRightArrowClick()}
        className={`hover:p-4" border1 border-1 z-50 hidden aspect-square cursor-pointer
              items-center justify-center rounded-lg border border-neutral-600 bg-neutral-700 
              p-2 text-neutral-500 md:flex`}
      >
        <ChevronRightIcon className={"h-8 w-8"} />
      </div>
    </div>
  );
}
