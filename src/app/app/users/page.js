import { supabaseAdmin } from "../../../../lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";

export default async function UsersPage() {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();

  console.log(data);

  return (
    <div className={"flex flex-wrap gap-4 px-4"}>
      {data.users.map((item) => {
        // console.log(item);
        return (
          <Link
            href={`/app/profile/${item.id}`}
            key={item?.id}
            className={
              "relative w-full rounded-lg border border-neutral-700 md:w-1/4" +
              " overflow-hidden bg-neutral-800 text-neutral-500 md:max-w-[300px]"
            }
          >
            <div className={"relative mb-14 h-fit w-full"}>
              <div className={"relative h-32 w-full"}>
                <Image
                  src={item.user_metadata.banner_img}
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
                  " border-neutral-700 bg-neutral-900 shadow-xl"
                }
              >
                <Image
                  src={item.user_metadata.profile_img}
                  alt={"User profile Image"}
                  fill={true}
                  sizes={"100%"}
                  className={"object-cover"}
                />
              </div>
            </div>
            <div className={"px-2 pb-4"}>
              <p className={"capitalize"}>
                {item.user_metadata.first_name} {item.user_metadata.last_name}
              </p>
              <p className={"text-sm"}>@{item.user_metadata.username}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
