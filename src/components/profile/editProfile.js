import { useState } from "react";
import FormInput from "@/components/form/input";
import Image from "next/image";
import GreenButton from "@/components/buttons/greenButton";
import { supabaseAdmin } from "../../../lib/supabaseClient";
import { FormikProvider, useFormik } from "formik";

export default function EditProfile({ user }) {
  const [bannerImage, setBannerImage] = useState(user.banner_img);
  const [profileImage, setProfileImage] = useState(user.profile_img);

  const handleBannerImageUpload = async (event) => {
    const file = event.target.files[0];
    const fileName = `${user.username}_banner`; // Desired file name

    try {
      const { data, error } = await supabaseAdmin.storage
        .from("user-images")
        .upload(fileName, file);

      if (error?.statusCode === "409") {
        // Remove the original file
        await supabaseAdmin.storage.from("user-images").remove([fileName]);

        // Upload again
        const { error: uploadError } = await supabaseAdmin.storage
          .from("user-images")
          .upload(fileName, file);
      }

      const {
        data: { publicUrl },
      } = supabaseAdmin.storage.from("user-images").getPublicUrl(fileName);
      setProfileImage(publicUrl);

      // Update Supabase user metadata with the image URL
      await supabaseAdmin.auth.updateUser({
        data: {
          banner_img: publicUrl,
        },
      });
    } catch (error) {
      // Handle exceptions
      console.error(error);
    }
  };

  const handleProfileImageUpload = async (event) => {
    const file = event.target.files[0];
    const fileName = `${user.username}_profile`; // Desired file name

    try {
      const { data, error } = await supabaseAdmin.storage
        .from("user-images")
        .upload(fileName, file);

      if (error?.statusCode === "409") {
        // Remove the original file
        await supabaseAdmin.storage.from("user-images").remove([fileName]);

        // Upload again
        const { error: uploadError } = await supabaseAdmin.storage
          .from("user-images")
          .upload(fileName, file);
      }

      const {
        data: { publicUrl },
      } = supabaseAdmin.storage.from("user-images").getPublicUrl(fileName);
      setProfileImage(publicUrl);

      // Update Supabase user metadata with the image URL
      await supabaseAdmin.auth.updateUser({
        data: {
          profile_img: publicUrl,
        },
      });
    } catch (error) {
      // Handle exceptions
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: user.username,
      firstName: user.first_name,
      lastName: user.last_name,
      bio: user.bio,
      link: user.link,
      location: user.location,
    },
    onSubmit: async (values) => {
      // Update Supabase user metadata with the form values
      await supabaseAdmin.auth.updateUser({
        data: {
          username: values.username,
          first_name: values.firstName,
          last_name: values.lastName,
          bio: values.bio,
          link: values.link,
          location: values.location,
        },
      });
    },
  });

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
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="flex w-full flex-col gap-2 p-4"
        >
          <FormInput
            id={"username"}
            name={"username"}
            placeholder={user.username ?? "Enter a Username"}
            onChange={formik.handleChange}
          />
          <FormInput
            id={"firstName"}
            name={"firstName"}
            placeholder={user.first_name ?? "Enter a First Name"}
            onChange={formik.handleChange}
          />
          <FormInput
            id={"lastName"}
            name={"lastName"}
            placeholder={user.last_name ?? "Enter a Last Name"}
            onChange={formik.handleChange}
          />
          <FormInput
            id={"bio"}
            name={"bio"}
            placeholder={user.bio ?? "Enter a bio"}
            onChange={formik.handleChange}
          />
          <FormInput
            id={"link"}
            name={"link"}
            placeholder={user.link ?? "Enter a link"}
            onChange={formik.handleChange}
          />
          <FormInput
            id={"location"}
            name={"location"}
            placeholder={user.location ?? "Enter a location"}
            onChange={formik.handleChange}
          />
          <div className="mt-4">
            <GreenButton title="Save" callBack={formik.submitForm} />
          </div>
        </form>
      </FormikProvider>
    </div>
  );
}
