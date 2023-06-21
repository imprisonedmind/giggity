"use client";
import SettingsItem from "@/components/settings/settingsItem";
import {
  ArrowTrendingUpIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "../../../lib/utilities";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/context/auth";

export default function SettingsItemWrapper() {
  const router = useRouter();

  const session = useSupabase();
  const user = session?.user?.user_metadata;

  return (
    <div
      className={
        " flex flex-col divide-y rounded-xl border border-neutral-700" +
        " divide-neutral-700 bg-neutral-800 p-2 text-neutral-500"
      }
    >
      <SettingsItem title={"Add a Gig"} icon={<MusicalNoteIcon />} />
      {user && (
        <SettingsItem
          title={"Sign Out"}
          icon={<ArrowTrendingUpIcon />}
          callBack={() => signOut(router)}
        />
      )}
    </div>
  );
}
