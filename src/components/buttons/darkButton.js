import Link from "next/link";

export default function DarkButton({ title, link }) {
  return (
    <Link
      href={link}
      className={
        "flex items-center justify-center gap-[2px] rounded-xl border border-stone-700" +
        "  bg-neutral-800 px-4 py-2 backdrop-blur-[2px] hover:bg-neutral-700"
      }
    >
      <div className="text-[14px] font-medium text-neutral-400">{title}</div>
    </Link>
  );
}
