"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TermsAndConditions() {
  const pathname = usePathname();
  const action = pathname.includes("onboard") ? "logging in" : "signing up";
  return (
    <p className={"text-center text-xs text-neutral-500"}>
      By {action} you are agreeing to the{" "}
      <Link
        href={"/terms"}
        className={"text-green-500 underline underline-offset-4"}
      >
        Terms and Conditions
      </Link>{" "}
      as well as the{" "}
      <Link
        href={"/app/privacy"}
        className={"text-green-500 underline underline-offset-4"}
      >
        Privacy Policy
      </Link>
      , upheld by Giggity.co.za
    </p>
  );
}
