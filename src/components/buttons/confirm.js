import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ForwardIcon } from "@heroicons/react/20/solid";

export default function Confirm({ callback, spotifyArtists }) {
  const hasArtists = spotifyArtists.length > 0;
  const title = hasArtists ? "Confirm" : "Skip Adding Artists";
  return (
    <div
      onClick={callback}
      className={`${hasArtists ? "bg-green-500 " : "bg-blue-500"} 
             sticky bottom-1 mt-8 flex w-full cursor-pointer justify-between rounded-lg 
             p-4 text-white shadow-lg`}
    >
      <p className={"text-xl"}>{title}</p>
      {hasArtists ? (
        <CheckBadgeIcon className={"h-8 w-8"} />
      ) : (
        <ForwardIcon className={"h-8 w-8"} />
      )}
    </div>
  );
}
