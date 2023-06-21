"use client";
import NavBack from "@/components/gigOverview/navBack";
import ProfileContent from "@/components/profile/profileContent";
import { useEffect, useState } from "react";
import { supabaseAdmin } from "../../../lib/supabaseClient";
import { useSupabase } from "@/context/auth";

export default function FetchProfileContent({ params }) {
  const session = useSupabase();
  const currentUserUid = session?.user.id;

  const [data, setData] = useState(null);
  const uid = params?.uid;

  useEffect(() => {
    if (uid) {
      supabaseAdmin.auth.admin.getUserById(uid).then((res) => {
        setData(res.data.user);
      });
    }
  }, [uid]);

  if (data)
    return (
      <>
        <NavBack title={`${data.user_metadata.username}'s profile`} />
        <ProfileContent data={data} uid={currentUserUid} />
      </>
    );
}
