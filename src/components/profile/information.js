import Link from "next/link";
import {
  CalendarDaysIcon,
  LinkIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { convertToMonthYear } from "../../../lib/utilities";
import ProfileFirstLastName from "@/components/profile/profileFirstLastName";
import ProfileUsername from "@/components/profile/profileUsername";
import ProfileBio from "@/components/profile/profileBio";
import ProfileLink from "@/components/profile/profileLink";
import ProfileLocation from "@/components/profile/profileLocation";
import ProfileJoined from "@/components/profile/profileJoined";

export default function ProfileInformation({ userObj }) {
  const user = userObj?.user_metadata;

  return (
    <div className={"flex flex-col gap-4 px-2 pb-4 md:px-4"}>
      <div className={"flex flex-col "}>
        <ProfileFirstLastName user={user} />
        <ProfileUsername user={user} />
      </div>
      <div className={"flex flex-col gap-1"}>
        <ProfileBio user={user} />
        <div className={"flex flex-nowrap gap-2 text-xs"}>
          <ProfileLink user={user} />
          <ProfileLocation user={user} />
          <ProfileJoined user={user} />
        </div>
      </div>
    </div>
  );
}
