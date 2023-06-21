import UserCard from "@/components/settings/userCard";
import ListWrapper from "@/components/wrappers/listWrapper";
import SettingsItemWrapper from "@/components/settings/settingsItemWrapper";
import SettingsItem from "@/components/settings/settingsItem";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import SignOutSettingsItem from "@/components/settings/signOutSettingsItem";
import CopyRightSettingsItem from "@/components/settings/copyRightSettingsItem";
import AppVersionSettingsItem from "@/components/settings/appVersionSettingsItem";

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
          <SettingsItem
            title={"Terms and Conditions"}
            icon={<MusicalNoteIcon />}
          />
          <SettingsItem title={"Privacy Policy"} icon={<MusicalNoteIcon />} />
          <CopyRightSettingsItem />
          <AppVersionSettingsItem />
        </SettingsItemWrapper>
      </div>
    </ListWrapper>
  );
}
