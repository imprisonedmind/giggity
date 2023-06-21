"use client";
import SettingsItem from "@/components/settings/settingsItem";
import SettingsItemWrapper from "@/components/settings/settingsItemWrapper";
import { useRouter } from "next/navigation";

export default function CreatorSettingsWrapper() {
  const router = useRouter();

  return (
    <SettingsItemWrapper>
      <SettingsItem
        title={"Made with ♥ by Luke Stephens"}
        callBack={() => router.push("http://lukestephens.co.za")}
      />
    </SettingsItemWrapper>
  );
}
