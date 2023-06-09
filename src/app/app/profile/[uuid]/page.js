import { supabaseAdmin } from "../../../../../lib/supabaseClient";
import ProfileBanner from "@/components/profile/banner";
import ProfileInformation from "@/components/profile/information";

export default async function Profile({ params }) {
  const { uuid } = params;
  const { data } = await supabaseAdmin
    .from("users")
    .select()
    .match({ uuid: uuid });

  const user = data[0];

  return (
    <div className={"flex w-full flex-col gap-4 px-4 text-neutral-500"}>
      {/*container */}
      <div
        className={
          "flex h-full w-full flex-col gap-4 rounded-xl border border-neutral-700" +
          " bg-neutral-800 p-4"
        }
      >
        <ProfileBanner user={user} />
        <ProfileInformation user={user} />
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
