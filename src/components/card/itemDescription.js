"use client";
import { useState } from "react";

export default function ItemDescription({ description }) {
  let descriptionWords = description.split(" ");

  const usernameRegex = /(?<!\S)@[a-zA-Z0-9_.-]+\b/;

  const [show, setShow] = useState(true);

  const handleClick = () => {
    console.log("clicked");
    setShow(!show);
    console.log(show);
  };

  return (
    <div
      className={` 
        md:max-h-auto flex h-fit flex-grow flex-col text-sm text-neutral-500
        `}
    >
      {show && (
        <p className={"whitespace-pre-wrap"}>
          {descriptionWords.map((word, index) => {
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
          })}
        </p>
      )}
      <div
        onClick={() => handleClick()}
        className={
          "flex h-fit w-full justify-center rounded-md border bg-neutral-900 p-2" +
          " border-1 mt-2 cursor-pointer border-neutral-600"
        }
      >
        <p>{show ? "Hide Description" : "Show Description"}</p>
      </div>
    </div>
  );
}
