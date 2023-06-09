import { useState } from "react";
import FormInput from "@/components/form/input";
import Image from "next/image";
import GreenButton from "@/components/buttons/greenButton";

export default function EditProfile({ user }) {
  const [bannerImage, setBannerImage] = useState(user.banner_img);
  const [profileImage, setProfileImage] = useState(user.profile_img);

  const handleBannerImageUpload = (event) => {
    const file = event.target.files[0];
    // Perform any necessary validation or processing of the uploaded file
    // Replace the following line with your logic to handle the file upload and obtain the image source (blob URL or base64 string)
    const imageSrc = URL.createObjectURL(file);
    setBannerImage(imageSrc);
  };

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    // Perform any necessary validation or processing of the uploaded file
    // Replace the following line with your logic to handle the file upload and obtain the image source (blob URL or base64 string)
    const imageSrc = URL.createObjectURL(file);
    setProfileImage(imageSrc);
  };

  return (
    <div className="min-w-[300px] overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800">
      <div className="relative mb-12">
        <label htmlFor="bannerImageInput">
          <input
            id="bannerImageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleBannerImageUpload}
          />
          <div className="relative h-40 w-full cursor-pointer">
            <Image
              src={bannerImage}
              alt="User Banner Image"
              fill={true}
              className={"cursor-pointer object-cover"}
            />
          </div>
        </label>
        <div className="absolute -bottom-10 left-1/2 right-0 h-20 w-20 -translate-x-1/2 transform transform overflow-hidden rounded-xl border border-neutral-700 shadow-md">
          <label htmlFor="profileImageInput">
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfileImageUpload}
            />
            <Image
              src={profileImage}
              alt={"User profile Image"}
              fill={true}
              className={"cursor-pointer object-cover"}
            />
          </label>
        </div>
      </div>
      <form className="flex w-full flex-col gap-2 p-4">
        <FormInput placeholder={user.first_name ?? "Enter a Name"} />
        <FormInput placeholder={user.last_name ?? "Enter a Last Name"} />
        <FormInput placeholder={user.bio ?? "Enter a bio"} />
        <FormInput placeholder={user.link ?? "Enter a link"} />
        <FormInput placeholder={user.location ?? "Enter a location"} />
        <div className="mt-4">
          <GreenButton title="Save" />
        </div>
      </form>
    </div>
  );
}
