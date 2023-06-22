"use client";
import Image from "next/image";
import GreenButton from "@/components/buttons/greenButton";
import { UseQuickViewContext } from "@/context/quickView";
import EditProfile from "@/components/profile/editProfile";
import { copyToClipboard } from "../../../lib/utilities";
import ProfileBannerImg from "@/components/profile/profileBannerImg";
import ProfilePictureImg from "@/components/profile/profilePictureImg";

export default function ProfileBanner({ userObj, userUid }) {
  const { setIsOpen, setContent } = UseQuickViewContext();

  const user = userObj?.user_metadata;

  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Giggity user profile",
          text: `Check out this user's profile on Giggity.`,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully."))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className={"relative mb-12"}>
      <div className={"relative h-60 w-full overflow-hidden"}>
        <ProfileBannerImg user={user} />
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
            "relative h-24 w-24 overflow-hidden rounded-2xl border border-neutral-700" +
            " bg-neutral-900 shadow-xl"
          }
        >
          <ProfilePictureImg user={user} />
        </div>
        {/*Edit*/}
        {userUid && userUid !== userObj?.id ? (
          <GreenButton title={"Share Profile"} callBack={() => share()} />
        ) : (
          <GreenButton
            title={"Edit Profile"}
            callBack={() => {
              setContent(<EditProfile user={user} />);
              setIsOpen(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
