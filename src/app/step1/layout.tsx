"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname  } from 'next/navigation'
import { useAuth } from "@/context/guard/guard.context";
export default function Layout({ children }: { children: React.ReactNode }) {
  // const params = usePathname()
  // const router = useRouter();
  // const { isAdmin} = useAuth();
  // useEffect(() => {
  //   if (!isAdmin) {
  //     const parts = params.split('/');
  //     const lastSentence = parts[parts.length - 1];
  //     if(lastSentence !== "monitor-report"){
  //       router.push("/");
  //     }
  //   }
  // }, []);

  return (
    <>
        <div className="step-layout">
            {children}
        </div>
    </>

  );
}
