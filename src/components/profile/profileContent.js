"use client";
import ProfileBanner from "@/components/profile/banner";
import ProfileInformation from "@/components/profile/information";
import { useSupabase } from "@/context/auth";
import { supabaseAdmin } from "../../../lib/supabaseClient";
import { useEffect, useState } from "react";

export default function ProfileContent({ params }) {
  const session = useSupabase();
  const user = session?.user;
  const [data, setData] = useState(user?.user);

  const uid = params?.uid;

  useEffect(() => {
    if (uid) {
      supabaseAdmin.auth.admin
        .getUserById(uid ? uid : "8e0b48e6-ba2c-431f-98ab-c82c8d4d182d")
        .then((res) => {
          setData(res.data.user);
        });
    } else {
      setData(user);
    }
  }, [uid]);

  return (
    <div
      className={
        "flex w-full flex-col gap-4 p-2 text-neutral-500 md:px-4 md:py-0"
      }
    >
      {/*container */}
      <div
        className={
          "flex h-full w-full flex-col gap-4 rounded-xl border border-neutral-700" +
          " overflow-hidden bg-neutral-800"
        }
      >
        <ProfileBanner userObj={data} userUid={uid} />
        <ProfileInformation userObj={data} />
      </div>
      {/*<div*/}
      {/*  className={*/}
      {/*    "flex h-full w-full flex-col gap-4 rounded-xl border border-neutral-700" +*/}
      {/*    " bg-neutral-800 p-4"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <ProfileSpotify user={user} />*/}
      {/*</div>*/}
    </div>
  );
}
