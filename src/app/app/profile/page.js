"use client";
import ProfileBanner from "@/components/profile/banner";
import ProfileInformation from "@/components/profile/information";
import { useSupabase } from "@/context/auth";

export const revalidate = 0;

export default function Profile() {
  const session = useSupabase();
  const user = session?.user;
  const data = user?.user_metadata;

  return (
    <div className={"flex w-full flex-col gap-4 px-4 text-neutral-500"}>
      {/*container */}
      <div
        className={
          "flex h-full w-full flex-col gap-4 rounded-xl border border-neutral-700" +
          " bg-neutral-800 p-4"
        }
      >
        <ProfileBanner user={data} />
        <ProfileInformation user={data} />
      </div>
      {/*<div*/}
      {/*  className={*/}
      {/*    "flex h-full w-full flex-col gap-4 rounded-xl border border-neutral-700" +*/}
      {/*    " bg-neutral-800 p-4"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <ProfileSpotify user={user} />*/}
      {/*</div>*/}
    </div>
  );
}
