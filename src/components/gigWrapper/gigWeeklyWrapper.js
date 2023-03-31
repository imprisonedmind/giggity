"use client";
import ItemCard from "@/components/card/itemCard";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function GigWeeklyWrapper({ data, m, title, link }) {
  const containerRef = useRef(null);
  const [dragPosition, setDragPosition] = useState(0);
  const [maxScrollPosition, setMaxScrollPosition] = useState(712);

  useEffect(() => {
    setMaxScrollPosition(
      containerRef.current.scrollWidth - containerRef.current.offsetWidth
    );
  }, [containerRef]);

  const handleScroll = () => {
    setDragPosition(containerRef.current.scrollLeft);
  };

  const handleLeftArrowClick = () => {
    const newScrollPosition = containerRef.current.scrollLeft - 380;
    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
    setDragPosition(newScrollPosition);
  };

  const handleRightArrowClick = () => {
    const newScrollPosition = containerRef.current.scrollLeft + 380;
    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
    setDragPosition(newScrollPosition);
  };

  return (
    <div className={`${m} relative flex w-full flex-col gap-2`}>
      <div
        className={
          "z-10 flex w-full flex-nowrap items-center justify-between text-neutral-500"
        }
      >
        <h3 className={""}>{title}</h3>
        <Link
          href={link}
          className={
            "cursor-pointer text-xs tracking-wide underline underline-offset-2" +
            " hover:text-green-500 "
          }
        >
          SEE ALL
        </Link>
      </div>

      <div
        className={
          "absolute flex h-full w-full select-none justify-between pt-8"
        }
      >
        <div
          className={`${
            dragPosition > 0 ? "w-[50px] md:w-[100px]" : "w-0 opacity-0"
          } transition-width pointer-events-none z-30 flex h-full items-center justify-start 
          bg-gradient-to-l from-neutral-900/0 to-neutral-900 duration-700 ease-in-out md:pointer-events-auto`}
        >
          <div
            onClick={() => handleLeftArrowClick()}
            className={`hover:p-4" border1 border-1 z-50 hidden aspect-square
              cursor-pointer items-center justify-center rounded-lg border border-neutral-600 
              bg-neutral-700 p-2 text-neutral-500 md:flex`}
          >
            <ArrowLeftIcon className={"h-8 w-8"} />
          </div>
        </div>
        <div
          className={`${
            dragPosition < maxScrollPosition
              ? "w-[50px] md:w-[100px]"
              : "w-0 opacity-0"
          } transition-width pointer-events-none z-30 flex h-full items-center justify-end bg-gradient-to-r 
          from-neutral-900/0 to-neutral-900 duration-700 ease-in-out md:pointer-events-auto`}
        >
          <div
            onClick={() => handleRightArrowClick()}
            className={`hover:p-4" border1 border-1 z-50 hidden aspect-square cursor-pointer
              items-center justify-center rounded-lg border border-neutral-600 bg-neutral-700 
              p-2 text-neutral-500 md:flex`}
          >
            <ArrowRightIcon className={"h-8 w-8"} />
          </div>
        </div>
      </div>

      <div
        className={"relative flex w-full flex-nowrap gap-4 overflow-auto pb-4"}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {data.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
