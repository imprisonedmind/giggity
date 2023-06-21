"use client";
import SettingsItem from "@/components/settings/settingsItem";
import Image from "next/image";
import openAi from "../../../public/logos/openai.svg";
import cloud from "../../../public/logos/cloud-vision-api.svg";
import supa from "../../../public/logos/supabase.svg";
import next from "../../../public/logos/next.svg";
import vercel from "../../../public/logos/vecel.svg";
import SettingsItemWrapper from "@/components/settings/settingsItemWrapper";
import { useRouter } from "next/navigation";

export default function TechnologySettingsWrapper() {
  const router = useRouter();

  return (
    <SettingsItemWrapper>
      <SettingsItem title={"Technology this website uses"} />
      <SettingsItem
        icon={<Image src={openAi} alt={"Open Ai Logo"} />}
        title={"Open AI gpt-3"}
        callBack={() => router.push("https://openai.com/gpt-4")}
      />
      <SettingsItem
        title={"Google Cloud Vision"}
        icon={<Image src={cloud} alt={"Cloud Vision Logo"} />}
        callBack={() => router.push("https://cloud.google.com/vision")}
      />
      <SettingsItem
        title={"Supabase"}
        icon={<Image src={supa} alt={"Suapbase Logo"} />}
        callBack={() => router.push("https://supabase.com/")}
      />
      <SettingsItem
        title={"NextJs"}
        icon={<Image src={next} alt={"NextJs Logo"} />}
        callBack={() => router.push("https://nextjs.org/")}
      />{" "}
      <SettingsItem
        title={"Vercel"}
        icon={<Image src={vercel} alt={"NextJs Logo"} />}
        callBack={() => router.push("https://vercel.com/")}
      />
    </SettingsItemWrapper>
  );
}
