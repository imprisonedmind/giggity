import SettingsItem from "@/components/settings/settingsItem";

export default function AppVersionSettingsItem() {
  const version = process.env.APP_VERSION;

  return <SettingsItem title={`Version - ${version}`} />;
}
