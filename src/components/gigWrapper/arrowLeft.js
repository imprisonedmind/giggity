import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function ArrowLeft({ dragPosition, handleLeftArrowClick }) {
  return (
    <div
      className={`${
        dragPosition > 0 ? "w-[50px] md:w-[100px]" : "w-0 opacity-0"
      } transition-width pointer-events-none z-30 flex h-full items-center justify-start 
          from-neutral-900/0 to-neutral-900 duration-700 ease-in-out md:pointer-events-auto md:bg-gradient-to-l`}
    >
      <div
        onClick={() => handleLeftArrowClick()}
        className={`hover:p-4" border1 border-1 z-50 hidden aspect-square
              cursor-pointer items-center justify-center rounded-lg border border-neutral-600 
              bg-neutral-700 p-2 text-neutral-500 md:flex`}
      >
        <ChevronLeftIcon className={"h-8 w-8"} />
      </div>
    </div>
  );
}
