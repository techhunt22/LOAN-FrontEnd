"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/guard/guard.context";
import { TypeofServiceScreen } from "@/screen/service_types/typeof.service.screen";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function Home() {
  const router = useRouter();
  const { isAdmin, setIsAdmin } = useAuth();
  useEffect(() => {
    const loginRole = Cookies.get("role");
    if (loginRole == "PCR:Admin") {
      setIsAdmin(true);
    } else if (loginRole === undefined) {
      setIsAdmin(false);
      router.push("/");
    }
  }, [Cookies.get("role")]);

 
  const loginRole = Cookies.get("role");
  if (isAdmin) {
    router.replace("/client-dashboard");
  }
  if (loginRole == "PCR:Admin") {
    router.replace("/client-dashboard");
  }

  return (
    <>
      <TypeofServiceScreen />
    </>
  );
}
