"use client";
import SettingsItem from "@/components/settings/settingsItem";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { signOut } from "../../../lib/utilities";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/context/auth";

export default function SignOutSettingsItem() {
  const router = useRouter();

  const session = useSupabase();
  const user = session?.user?.user_metadata;

  if (user)
    return (
      <SettingsItem
        title={"Sign Out"}
        icon={<ArrowTrendingUpIcon />}
        callBack={() => signOut(router)}
      />
    );
}
