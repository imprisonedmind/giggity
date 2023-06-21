import UserCard from "@/components/settings/userCard";
import ListWrapper from "@/components/wrappers/listWrapper";
import SettingsItemWrapper from "@/components/settings/settingsItemWrapper";

export default function Settings() {
  return (
    <ListWrapper>
      {/*<NavBack title={"Settings"} />*/}
      <div className={"flex flex-col gap-4 p-2"}>
        <UserCard />
        <SettingsItemWrapper />
      </div>
    </ListWrapper>
  );
}
