export const revalidate = 0;

export default function SingleGigLayout({ children }) {
  return (
    <div className={"relative h-[92%] overflow-y-auto md:overflow-y-visible"}>
      {children}
    </div>
  );
}
