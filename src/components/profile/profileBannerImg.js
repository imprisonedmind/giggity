import Image from "next/image";

export default function ProfileBannerImg({ user }) {
  return (
    <Image
      src={user?.banner_img}
      alt={"Profile cover image"}
      fill={true}
      sizes={"100%"}
      className={"object-cover"}
      loading={"lazy"}
      quality={70}
    />
  );
}
