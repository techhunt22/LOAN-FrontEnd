"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/guard/guard.context";
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="step-layout">{children}</div>
    </>
  );
}
