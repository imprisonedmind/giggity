import UserCard from "@/components/settings/userCard";
import ListWrapper from "@/components/wrappers/listWrapper";
import SettingsItemWrapper from "@/components/settings/settingsItemWrapper";
import SettingsItem from "@/components/settings/settingsItem";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import SignOutSettingsItem from "@/components/settings/signOutSettingsItem";
import CopyRightSettingsItem from "@/components/settings/copyRightSettingsItem";
import AppVersionSettingsItem from "@/components/settings/appVersionSettingsItem";
import Image from "next/image";
import openAi from "public/logos/openai.svg";
import cloud from "public/logos/cloud-vision-api.svg";
import supa from "public/logos/supabase.svg";
import next from "public/logos/next.svg";
import vercel from "public/logos/vecel.svg";

export default function Settings() {
  return (
    <ListWrapper>
      {/*<NavBack title={"Settings"} />*/}
      <div className={"flex flex-col gap-4 p-2"}>
        <UserCard />
        <SettingsItemWrapper>
          <SettingsItem title={"Add a Gig"} icon={<MusicalNoteIcon />} />
          <SignOutSettingsItem />
        </SettingsItemWrapper>
        <SettingsItemWrapper>
          <SettingsItem title={"Terms and Conditions"} />
          <SettingsItem title={"Privacy Policy"} />
          <CopyRightSettingsItem />
          <AppVersionSettingsItem />
        </SettingsItemWrapper>
        <SettingsItemWrapper>
          <SettingsItem title={"Technology this website uses"} />
          <SettingsItem
            title={"Open AI gpt-3"}
            icon={<Image src={openAi} alt={"Open Ai Logo"} />}
          />
          <SettingsItem
            title={"Google Cloud Vision"}
            icon={<Image src={cloud} alt={"Cloud Vision Logo"} />}
          />
          <SettingsItem
            title={"Supabase"}
            icon={<Image src={supa} alt={"Suapbase Logo"} />}
          />
          <SettingsItem
            title={"NextJs"}
            icon={<Image src={next} alt={"NextJs Logo"} />}
          />{" "}
          <SettingsItem
            title={"Vercel"}
            icon={<Image src={vercel} alt={"NextJs Logo"} />}
          />
        </SettingsItemWrapper>
      </div>
    </ListWrapper>
  );
}
