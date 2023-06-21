import { supabaseAdmin } from "../../../../lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import ProfileFirstLastName from "@/components/profile/profileFirstLastName";
import ProfileUsername from "@/components/profile/profileUsername";
import ProfileBio from "@/components/profile/profileBio";
import ProfileLink from "@/components/profile/profileLink";
import ProfileLocation from "@/components/profile/profileLocation";
import ProfileJoined from "@/components/profile/profileJoined";

export default async function UsersPage() {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();

  console.log(data);

  return (
    <div className={"flex flex-wrap gap-4 px-4"}>
      {data.users.map((userItem) => {
        return (
          <Link
            href={`/app/profile/${userItem.id}`}
            key={userItem?.id}
            className={
              "relative w-full rounded-lg border border-neutral-700 md:w-1/4" +
              " group overflow-hidden bg-neutral-800 text-neutral-500 md:max-w-[300px]" +
              " hover:border-green-500 hover:shadow-xl"
            }
          >
            <div className={"relative mb-14 h-fit w-full"}>
              <div className={"relative h-32 w-full"}>
                <Image
                  src={userItem.user_metadata.banner_img}
                  alt={"Profile cover image"}
                  fill={true}
                  sizes={"100%"}
                  className={"object-cover"}
                />
              </div>
              <div
                className={
                  "absolute h-24 w-24 overflow-hidden rounded-2xl border" +
                  " bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform" +
                  " border-neutral-700 bg-neutral-900 shadow-xl" +
                  " group-hover:border-green-500 group-hover:shadow-xl"
                }
              >
                <Image
                  src={userItem.user_metadata.profile_img}
                  alt={"User profile Image"}
                  fill={true}
                  sizes={"100%"}
                  className={"object-cover"}
                />
              </div>
            </div>
            <div className={"flex flex-col gap-2 px-2 pb-4"}>
              <div className={"flex flex-col"}>
                <ProfileFirstLastName user={userItem.user_metadata} />
                <ProfileUsername user={userItem.user_metadata} />
              </div>
              <ProfileBio user={userItem.user_metadata} />
              <div className={"flex flex-col"}>
                <ProfileLink user={userItem.user_metadata} />
                <ProfileLocation user={userItem.user_metadata} />
                <ProfileJoined user={userItem.user_metadata} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
