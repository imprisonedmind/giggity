import Image from "next/image";

export default function ProfilePictureImg({ user }) {
  return (
    <Image
      src={user?.profile_img}
      alt={"User profile Image"}
      fill={true}
      sizes={"100%"}
      className={"object-cover"}
    />
  );
}
