"use client";
import { useSupabase } from "@/context/auth";
import { useRouter } from "next/navigation";

export default function UserCircle() {
  const router = useRouter();
  const session = useSupabase();

  const initials = session?.user.email.charAt(0).toUpperCase();

  if (!session) {
    return (
      <div
        className={
          "flex h-11 w-11 items-center justify-center rounded-md border" +
          " animate-pulse cursor-pointer border-neutral-700 bg-neutral-700"
        }
      ></div>
    );
  }

  if (session == null) return;

  return (
    <div
      onClick={() => router.push("app/profile")}
      className={
        "flex h-11 w-11 items-center justify-center rounded-md border" +
        " cursor-pointer border-neutral-700 bg-neutral-900 text-neutral-600"
      }
    >
      <p>{initials}</p>
    </div>
  );
}
