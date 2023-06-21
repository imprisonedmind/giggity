export default function ListWrapper({ children }) {
  return (
    <div className={"flex h-[92%] flex-col overflow-y-auto md:h-full md:pb-0"}>
      {children}
    </div>
  );
}
