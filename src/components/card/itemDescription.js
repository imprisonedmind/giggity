export default function ItemDescription({ description }) {
  let descriptionWords = description.split(" ");

  const usernameRegex = /(?<!\S)@[a-zA-Z0-9_.-]+\b/;

  return (
    <div
      className={
        "md:max-h-auto flex max-h-[350px] flex-grow overflow-y-auto text-sm" +
        " text-neutral-500"
      }
    >
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
    </div>
  );
}
