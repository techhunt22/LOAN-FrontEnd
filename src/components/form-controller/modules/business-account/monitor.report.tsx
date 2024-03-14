"use client";
// @ts-ignore
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { MonitorBusinessReportForm } from "@/components/business-account-elements/monitor.business.report.form";
interface Option {
  label: string;
}
export const MonitorReport = () => {
  return (
    <>
      <div className="flex flex-col w-[80%]">
        <div className="flex  ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl ">
          <p
            style={{ textAlign: "center", color: "#2196F3", fontSize: "22px" }}
          >
            Thank you for your purchase A TGI Specialist will contact you to
            start your application.
          </p>
        </div>
        <div className="flex ml-[10%] mt-10 justify-center content-center items-center">
          <MonitorBusinessReportForm />
        </div>
      </div>
    </>
  );
};
