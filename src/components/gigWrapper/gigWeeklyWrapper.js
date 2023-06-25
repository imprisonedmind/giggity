"use client";
import ItemCard from "@/components/card/itemCard";
import { useEffect, useRef, useState } from "react";
import ArrowLeft from "@/components/gigWrapper/arrowLeft";
import ArrowRight from "@/components/gigWrapper/arrowRight";
import TitleHandler from "@/components/gigWrapper/titleHandler";

export default function GigWeeklyWrapper({ data, m, title, link, pos }) {
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
      <TitleHandler
        title={title}
        link={link}
        seeAll={data.length > 1}
        pos={pos}
      />
      <div
        className={
          "absolute flex h-full w-full select-none justify-between pt-8"
        }
      >
        <ArrowLeft
          dragPosition={dragPosition}
          handleLeftArrowClick={handleLeftArrowClick}
        />
        <ArrowRight
          dragPosition={dragPosition}
          maxScrollPosition={maxScrollPosition}
          handleRightArrowClick={handleRightArrowClick}
        />
      </div>

      <div
        className={
          "relative flex w-full flex-nowrap gap-4 overflow-auto px-2 pb-4 md:px-0" +
          " scrollbar-hidden md:scrollbar-show"
        }
        ref={containerRef}
        onScroll={handleScroll}
      >
        {data.map((item) => (
          <ItemCard
            item={item}
            key={item.id}
            full={data.length === 1}
            pos={pos}
          />
        ))}
      </div>
    </div>
  );
}
