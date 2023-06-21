import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import SettingsItem from "@/components/settings/settingsItem";
import { copyRightDate } from "../../../lib/utilities";

export default function CopyRightSettingsItem() {
  return (
    <SettingsItem title={`Copyright © 2023 - ${copyRightDate.getFullYear()}`} />
  );
}
