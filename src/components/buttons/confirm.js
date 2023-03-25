import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Confirm({ callback, spotifyArtists }) {
  return (
    <div
      onClick={callback}
      className={`${spotifyArtists.length > 0 ? "flex" : "hidden"} 
             sticky bottom-1 mt-8 w-full cursor-pointer justify-between rounded-lg bg-green-500 
             p-4 text-white shadow-lg`}
    >
      <p className={"text-xl"}>Confirm</p>
      <CheckBadgeIcon className={"h-8 w-8"} />
    </div>
  );
}
