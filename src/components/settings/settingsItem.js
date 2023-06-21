export default function SettingsItem({ title, icon, callBack }) {
  return (
    <div
      onClick={callBack}
      className={"flex flex-nowrap items-center gap-2 py-2"}
    >
      {icon && <div className={"h-4 w-4"}>{icon}</div>}
      <p>{title}</p>
    </div>
  );
}
