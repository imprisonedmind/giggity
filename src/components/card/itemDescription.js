export default function ItemDescription({description}) {
  const descriptionWords = description.split(" ");

  const usernameRegex = /\B@[a-zA-Z0-9_.-]+\b/;

  return <div className={"flex flex-grow text-sm text-neutral-500 overflow-y-auto"}>

    <p className={"whitespace-pre-wrap"}>{descriptionWords.map((word, index) => {
      if (usernameRegex.test(word)) {
        const username = word.replace("@", "");
        return (
            <a key={index} href={`https://www.instagram.com/${username}`}
               target="_blank" rel="noopener noreferrer" className={"text-sky-500/40" +
                " hover:text-sky-500"}
            >{word + " "}</a>
        );
      } else {
        return word + " ";
      }
    })
    }</p>

  </div>
}
