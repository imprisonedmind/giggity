"use client";
import { useEffect, useState } from "react";

function getUsernameRegex() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    return /(?<!\\S)@[a-zA-Z0-9_.-]+\\b/;
  } else {
    return /(?<!\S)@[a-zA-Z0-9_.-]+\b/;
  }
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
    <div className={"flex flex-col text-sm text-neutral-500 md:max-h-[190px]"}>
      <div
        className={`${show ? "h-full overflow-y-auto" : "h-0 overflow-hidden"}`}
      >
        <p className={"whitespace-pre-wrap"}>
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
        <p>{show ? "Hide Description" : "Show Description"}</p>
      </div>
    </div>
  );
}
