"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export const PcrHeader = () => {
  const router = useRouter();
  const clearRefreshToken = () => {
    Cookies.remove("accessToken", { path: "/" });
    Cookies.remove("refreshToken", { path: "/" });
    Cookies.remove("role", { path: "/" });
    router.push("/");
  };
  return (
    <div
      className={
        " bg-white md:px-[80px] md:flex hidden flex-row w-full h-[60px] justify-between items-center border-b-[1px] border-gray-200"
      }
    >
      <div className={"flex flex-row justify-between items-center gap-12"}>
        <div className={"text-[24px] font-bold  w-fit"}>Logo</div>
        <div
          className={
            "font-medium flex flex-row justify-between gap-6 items-center  w-fit"
          }
        >
          <Link href={"#"}>Dashboard</Link>
          <Link href={"#"}>Billing</Link>
          <Link href={"#"}>Documents</Link>
          <Link href={"#"}>Account</Link>
          <Link href={"#"}>Support</Link>
        </div>
      </div>
      <div className={" w-fit"}>
        <Button color={"blue"} variant={"outlined"} onClick={clearRefreshToken}>
          Logout
        </Button>
      </div>
    </div>
  );
};
