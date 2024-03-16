"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/guard/guard.context";
import { TypeofServiceScreen } from "@/screen/service_types/typeof.service.screen";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function Home() {
  debugger
  const router = useRouter();
  const { isAdmin } = useAuth();
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
