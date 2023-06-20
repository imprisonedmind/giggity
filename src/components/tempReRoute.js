"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TempReRoute() {
  const router = useRouter();

  useEffect(() => {
    router.push("/app");
    // const isMobileDevice = window.innerWidth < 768; // Adjust the screen width breakpoint as needed
    //
    // if (isMobileDevice) {
    //   router.push("/app"); // Replace "/app" with the desired route for mobile devices
    // }
  }, []);

  return <div></div>;
}
