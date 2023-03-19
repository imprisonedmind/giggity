'use client';

import {createContext, useContext, useState} from 'react';

const QuickViewContext = createContext(null);

export function QuickView({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null)

  return (
      <QuickViewContext.Provider value={{isOpen, setIsOpen, setContent, content}}>
        {isOpen &&
            <div className={"absolute top-0 left-0 h-screen w-screen z-50"}>
              <div className={"flex relative w-full h-full justify-center items-center"}>
                <div className={"absolute z-50"}>{content}</div>
                <div onClick={() => setIsOpen(!isOpen)}
                     className={"relative flex w-full h-full bg-neutral-900/80"}>
                </div>
              </div>
            </div>
        }
        {children}
      </QuickViewContext.Provider>
  );
}

export const UseQuickViewContext = () => {
  return useContext(QuickViewContext);
};

