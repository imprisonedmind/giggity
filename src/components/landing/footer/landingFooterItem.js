import Link from "next/link";

export default function LandingFooterItem({ title, link, copyright }) {
  return (
    <>
      {link && title && (
        <Link
          href={link}
          target={"_blank"}
          className={"underline-offset-4 hover:underline"}
        >
          {title}
        </Link>
      )}
      {copyright && <p>{copyright}</p>}
    </>
  );
}
