"use client";

import { createContext, useContext, useState } from "react";

const QuickViewContext = createContext(null);

export function QuickView({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  return (
    <QuickViewContext.Provider
      value={{ isOpen, setIsOpen, setContent, content }}
    >
      {isOpen && (
        <div className={"fixed top-0 left-0 z-50 h-screen w-screen"}>
          <div
            className={
              "relative flex h-full w-full items-center justify-center"
            }
          >
            <div className={"absolute z-50"}>{content}</div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={"relative flex h-full w-full bg-neutral-900/80"}
            >
              <div className={"h-full w-full bg-green-600/[2%]"} />
            </div>
          </div>
        </div>
      )}
      {children}
    </QuickViewContext.Provider>
  );
}

export const UseQuickViewContext = () => {
  return useContext(QuickViewContext);
};
