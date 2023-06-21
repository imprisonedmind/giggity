export default function ListWrapper({ children }) {
  return (
    <div className={"h-[92%] overflow-y-auto pb-10 md:h-full md:pb-0"}>
      {children}
    </div>
  );
}
