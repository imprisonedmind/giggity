"use client";
import NavBack from "@/components/gigOverview/navBack";
import ProfileContent from "@/components/profile/profileContent";
import { useSupabase } from "@/context/auth";
import { useEffect, useState } from "react";
import { supabaseAdmin } from "../../../lib/supabaseClient";

export default function FetchProfileContent({ params }) {
  const session = useSupabase();
  const user = session?.user;
  const [data, setData] = useState(user?.user);

  const uid = params?.uid;

  useEffect(() => {
    if (uid) {
      supabaseAdmin.auth.admin.getUserById(uid).then((res) => {
        setData(res.data.user);
      });
    } else {
      setData(user);
    }
  }, [uid]);

  return (
    <>
      <NavBack title={`${data.user_metadata.username}'s profile`} />
      <ProfileContent data={data} uid={uid} />
    </>
  );
}
