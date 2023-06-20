"use client";
import { useEffect, useState } from "react";

function getUsernameRegex() {
  let regex;
  if (typeof window !== "undefined") {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    regex = isSafari
      ? new RegExp(`(?:^|\\W)@[a-zA-Z0-9_.-]+(?:\\b|\\W)`)
      : /(?<!\S)@[a-zA-Z0-9_.-]+\b/;
  } else {
    regex = /(?<!\S)@[a-zA-Z0-9_.-]+\b/;
  }
  return regex;
}

export default function ItemDescription({ description }) {
  let descriptionWords = description?.split(" ");

  const usernameRegex = getUsernameRegex();

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={
        "flex h-full w-full grow flex-col overflow-auto text-sm text-neutral-500"
      }
    >
      <div>
        <p
          className={`${
            show ? "" : "h-14 overflow-hidden"
          } whitespace-pre-wrap`}
        >
          {descriptionWords
            ? descriptionWords.map((word, index) => {
                if (usernameRegex.test(word)) {
                  const username = word.replace("@", "");
                  return (
                    <a
                      key={index}
                      href={`https://www.instagram.com/${username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"text-sky-500/40" + " hover:text-sky-500"}
                    >
                      {word + " "}
                    </a>
                  );
                } else {
                  return word + " ";
                }
              })
            : description}
        </p>
      </div>
      <div
        onClick={() => handleClick()}
        className={
          "flex h-fit w-full justify-center rounded-md border bg-neutral-900 p-2" +
          " border-1 mt-2 cursor-pointer border-neutral-600 md:hidden"
        }
      >
        <p>{show ? "Show Less" : "Show More"}</p>
      </div>
    </div>
  );
}
