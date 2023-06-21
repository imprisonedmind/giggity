export default function SettingsItemWrapper({ children }) {
  return (
    <div
      className={
        " flex flex-col divide-y rounded-xl border border-neutral-700" +
        " divide-neutral-700 bg-neutral-800 p-2 text-neutral-500"
      }
    >
      {children}
    </div>
  );
}
