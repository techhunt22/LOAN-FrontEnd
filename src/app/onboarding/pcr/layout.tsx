"use client";
import React from "react";
import { PCRContextProvider } from "@/context/onboarding/personal.credit.repair.context";
import { useAuth } from "@/context/guard/guard.context";
import { TypeofServiceScreen } from "@/screen/service_types/typeof.service.screen";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function PCRLayout({ children }: { children: React.ReactNode }) {
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
    <PCRContextProvider>
      <div
        style={{ margin: "0 !important" }}
        className={"pb-20"}
      >
        {" "}
        {children}
      </div>
    </PCRContextProvider>
  );
}
