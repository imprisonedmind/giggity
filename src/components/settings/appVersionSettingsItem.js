import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import SettingsItem from "@/components/settings/settingsItem";

export default function AppVersionSettingsItem() {
  const version = process.env.APP_VERSION;

  return (
    <SettingsItem title={`Version - ${version}`} icon={<MusicalNoteIcon />} />
  );
}
