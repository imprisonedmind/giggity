import Link from "next/link";
import {
  CalendarDaysIcon,
  LinkIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { convertToMonthYear } from "../../../lib/utilities";

export default function ProfileInformation({ user }) {
  return (
    <div className={"flex flex-col gap-4"}>
      <div>
        {user.first_name && user.last_name ? (
          <p className={"text-lg"}>
            {user.first_name} {user.last_name}
          </p>
        ) : (
          <p>Edit your profile and give yourself a name.</p>
        )}
      </div>
      <div className={"flex flex-col gap-1"}>
        {user.bio && (
          <div className={"text-sm"}>
            <p>{user.bio}</p>
          </div>
        )}
        <div className={"flex flex-nowrap gap-2 text-xs"}>
          {user.link && (
            <div
              className={
                "flex flex-nowrap gap-1 text-green-500 underline-offset-4 hover:underline"
              }
            >
              <LinkIcon className={"h-4 w-4"} />
              <Link target={"_blank"} href={`https://${user.link}`}>
                {user.link}
              </Link>
            </div>
          )}
          {user.location && (
            <div className={"flex flex-nowrap gap-1"}>
              <MapPinIcon className={"h-4 w-4"} />
              <p>{user.location}</p>
            </div>
          )}
          <div className={"flex flex-nowrap gap-1"}>
            <CalendarDaysIcon className={"h-4 w-4"} />
            <p>Joined {convertToMonthYear(user.created_at)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
