"use client";
// @ts-ignore
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
interface Option {
  label: string;
}
export const UsersList = () => {
  return (
    <>
      <div className="flex w-[80%] ml-[10%] mt-10 justify-center content-center items-center">
        <div className="flex flex-col w-full h-max px-4 justify-start border-2 border-blue-600 rounded-2xl pt-8  mobileview">
          <h2>Admin</h2>
          {/* <MonitorReportForm /> */}
        </div>
      </div>
    </>
  );
};
