export default function LandingFooterElement({ children, title, logo }) {
  return (
    <div className={"flex flex-col gap-4"}>
      {title && <p className={"font-bold"}>{title}</p>}
      {logo && logo}
      <div className={"flex flex-col gap-1"}>{children}</div>
    </div>
  );
}
