"use client";
import Image from "next/image";
import GreenButton from "@/components/buttons/greenButton";
import { UseQuickViewContext } from "@/context/quickView";
import EditProfile from "@/components/profile/editProfile";

export default function ProfileBanner({ user }) {
  const { setIsOpen, setContent } = UseQuickViewContext();

  return (
    <div className={"relative mb-12"}>
      <div
        className={
          "relative h-60 w-full overflow-hidden border border-neutral-700 bg-neutral-900"
        }
      >
        <Image
          src={
            user
              ? user.banner_img
              : "https://source.unsplash.com/random/?hardcore"
          }
          alt={"Profile cover image"}
          fill={true}
          sizes={"100%"}
          className={"object-cover"}
        />
      </div>
      {/*Bio container*/}
      <div
        className={
          "absolute -bottom-12 flex w-full items-center justify-between px-2 md:px-4"
        }
      >
        {/*Image*/}
        <div
          className={
            "relative h-24 w-24 overflow-hidden rounded-2xl border" +
            " border-neutral-700 bg-neutral-900 shadow-xl"
          }
        >
          <Image
            src={
              user
                ? user.profile_img
                : "https://source.unsplash.com/random/?punkrock"
            }
            alt={"User profile Image"}
            fill={true}
            sizes={"100%"}
            className={"object-cover"}
          />
        </div>
        {/*Edit*/}
        <GreenButton
          title={"Edit Profile"}
          callBack={() => {
            setContent(<EditProfile user={user} />);
            setIsOpen(true);
          }}
        />
      </div>
    </div>
  );
}
