import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { convertToMonthYear } from "../../../lib/utilities";

export default function ProfileJoined({ user }) {
  const date = convertToMonthYear(user?.createdAt);

  if (!date.includes("Invalid"))
    return (
      <div className={"flex flex-nowrap items-center gap-1"}>
        <CalendarDaysIcon className={"h-4 w-4"} />
        <p>Joined {date}</p>
      </div>
    );
}
