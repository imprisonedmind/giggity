"use client";
import NavBack from "@/components/gigOverview/navBack";
import ProfileContent from "@/components/profile/profileContent";
import { useSupabase } from "@/context/auth";

export default function FetchOwnProfile() {
  const session = useSupabase();
  const data = session?.user;

  if (data)
    return (
      <>
        <NavBack title={`${data.user_metadata.username}'s profile`} />
        <ProfileContent data={data} />
      </>
    );
}
