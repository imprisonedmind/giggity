export default function ItemDescription({description, height}) {
  const descriptionWords = description.split(" ");

  const usernameRegex = /\B@[a-zA-Z0-9_.-]+\b/;

  return <div className={`h-${height} text-xs text-neutral-500/70 mt-4 whitespace-pre-wrap  
              overflow-hidden"`}>
    <p>
      {descriptionWords.map((word, index) => {
        if (usernameRegex.test(word)) {
          const username = word.replace("@", "");
          return (
              <a key={index} href={`https://www.instagram.com/${username}`}
                 target="_blank" rel="noopener noreferrer" className={"text-sky-500/40" +
                  " hover:text-sky-500"}
              >{word}</a>
          );
        } else {
          return word + " ";
        }
      })}
    </p>
  </div>
}
