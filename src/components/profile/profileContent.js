import ProfileBanner from "@/components/profile/banner";
import ProfileInformation from "@/components/profile/information";
import { useSupabase } from "@/context/auth";

export default function ProfileContent() {
  const session = useSupabase();
  const user = session?.user;
  const data = user?.user_metadata;

  return (
    <div
      className={
        "flex w-full flex-col gap-4 p-2 text-neutral-500 md:px-4 md:py-0"
      }
    >
      {/*container */}
      <div
        className={
          "flex h-full w-full flex-col gap-4 rounded-xl border border-neutral-700" +
          " overflow-hidden bg-neutral-800"
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
