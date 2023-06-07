"use client";
import { useSupabase } from "@/context/auth";

export default function Profile() {
  const session = useSupabase();
  const user = session?.user;

  if (user)
    return (
      <div className={"h-[100svh] w-full p-4"}>
        <div></div>
      </div>
    );
}
