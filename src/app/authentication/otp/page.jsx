"use client";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import OtpForm from "@/components/form-controller/authentication/OtpForm";

export default function Otp() {
  const router = useRouter(); // Move useRouter hook outside return

  return (
    <section className={"flex min-h-screen w-full justify-center items-center"}>
      <div
        className={
          "rounded-lg flex flex-col items-center justify-start md:p-[1rem] p-[1.5rem]  bg-white md:w-[450px] md:h-[600px] lg:w-[600px] w-full h-full"
        }
      >
        <div className={"mt-3 md:w-[90%] w-full h-[500px]"}>
          <Tooltip title="Back">
            <button
              onClick={() => router.back()}
              className={
                "select-none flex flex-row items-center justify-start gap-2 rounded-lg w-[30%] h-[40px]"
              }
            >
              <ArrowBackIcon />
              <p>Back</p>
            </button>
          </Tooltip>
          <div
            className={
              "select-none flex flex-row items-center justify-start rounded-lg w-full h-[60px]"
            }
          >
            <h4 className={"text-2xl font-semibold"}>Change Password</h4>
          </div>
          <OtpForm />
        </div>
      </div>
    </section>
  );
}
