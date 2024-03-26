"use client";
import { useAuth } from "@/context/guard/guard.context";
import React from "react";
import { useRouter } from "next/navigation";
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAdmin} = useAuth();
  if (!isAdmin) {
    router.push("/");
  }
  return (
    <>
      {children}
    </>
  );
}
