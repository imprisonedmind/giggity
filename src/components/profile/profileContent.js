import ProfileBanner from "@/components/profile/banner";
import ProfileInformation from "@/components/profile/information";

export default function ProfileContent({ data, uid }) {
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
        <ProfileBanner userObj={data} userUid={uid} />
        <ProfileInformation userObj={data} />
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
