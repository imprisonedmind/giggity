import { MapPinIcon } from "@heroicons/react/24/solid";

export default function ProfileLocation({ user }) {
  if (user?.location)
    return (
      <div className={"flex flex-nowrap items-center gap-1"}>
        <MapPinIcon className={"h-4 w-4"} />
        <p>{user?.location}</p>
      </div>
    );
}
