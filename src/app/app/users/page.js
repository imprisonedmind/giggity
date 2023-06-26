import { supabaseAdmin } from "../../../../lib/supabaseClient";
import Link from "next/link";
import ProfileFirstLastName from "@/components/profile/profileFirstLastName";
import ProfileUsername from "@/components/profile/profileUsername";
import ProfileBio from "@/components/profile/profileBio";
import ProfileLink from "@/components/profile/profileLink";
import ProfileLocation from "@/components/profile/profileLocation";
import ProfileJoined from "@/components/profile/profileJoined";
import ProfileBannerImg from "@/components/profile/profileBannerImg";
import ProfilePictureImg from "@/components/profile/profilePictureImg";
import ListWrapper from "@/components/wrappers/listWrapper";

export const revalidate = 120;

export default async function UsersPage() {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();

  if (data)
    return (
      <ListWrapper>
        <div className={"grid grid-cols-1 gap-4 px-4 md:grid-cols-3"}>
          {data.users.map((userItem) => {
            const userId = userItem?.id;
            const metaData = userItem?.user_metadata;
            return (
              <Link
                href={`/app/profile/${userId}`}
                key={userId}
                className={
                  "group relative col-span-1 w-full overflow-hidden text-neutral-500" +
                  " rounded-lg border border-neutral-700 bg-neutral-800 hover:border-green-500 hover:shadow-xl"
                }
              >
                <div className={"relative mb-14 h-fit w-full"}>
                  <div className={"relative h-32 w-full"}>
                    <ProfileBannerImg user={metaData} />
                  </div>
                  <div
                    className={
                      "absolute h-24 w-24 overflow-hidden rounded-2xl border" +
                      " bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform" +
                      " border-neutral-700 bg-neutral-900 shadow-xl" +
                      " group-hover:border-green-500 group-hover:shadow-xl"
                    }
                  >
                    <ProfilePictureImg user={metaData} />
                  </div>
                </div>
                <div className={"flex flex-col gap-2 px-2 pb-4"}>
                  <div className={"flex flex-col"}>
                    <ProfileFirstLastName user={metaData} />
                    <ProfileUsername user={metaData} />
                  </div>
                  <ProfileBio user={metaData} />
                  <div className={"flex flex-col"}>
                    <ProfileLink user={metaData} />
                    <ProfileLocation user={metaData} />
                    <ProfileJoined user={metaData} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </ListWrapper>
    );
}
