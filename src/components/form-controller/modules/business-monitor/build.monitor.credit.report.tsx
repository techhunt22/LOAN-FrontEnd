"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { Input, InputAdornment } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import { ArrowDown2 } from "iconsax-react";

const headerContent = {
  step: "Step 4",
  title: "Moniter Business Reports",
  subTitle: "MONITORING CREDIT",
};

const arrowLineCotent = "MONITOR BUSINESS CREDIT BUREAUS";

const footerContent = {
  content: "Return To Business Credit Builder",
  previous: true,
  next: true,
  url: "/step4/dun-bradstreet",
  preUrl: "/step7/page1-min",
};
interface Option {
  label: string;
}
export const BuildMonitorCreditReport = () => {
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl  gap-6 business-main business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6 business-page-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white business-page-namesection-mobileview"
            style={{ boxShadow: "2px 4px 12px 0px #a3a3a324" }}
          >
            <ArrowLineText
              type="flex flex-col w-[auto] text-center text-gray-700  "
              content={arrowLineCotent}
            />

            <div className="flex flex-row gap-6 justify-center content-center items-center mt-16 mb-8 flex-wrap">
              <Input
                id="input-with-icon-adornment "
                className="flex px-4 py-2  text-white text-lg rounded-3xl business-page-seaechdate-section"
                style={{ border: " 1px solid #3A35413B", color: "#3A354161" }}
                placeholder="Search by date"
                endAdornment={
                  <InputAdornment position="end">
                    <ArrowDown2 />
                  </InputAdornment>
                }
              ></Input>
              <button className="flex px-4 py-2 bg-blue-400 text-white text-lg rounded-3xl">
                GET NEW REPORT
              </button>
            </div>

            <img src={"/report-img.png"} alt="" />

            <div className="flex w-full justify-center items-center content-center mb-8">
              <button
                className="flex px-3 py-2 mt-6 mb-24 text-gray-300 rounded-3xl"
                style={{ color: " #3A354161", border: "1px solid  #3A35413B" }}
              >
                View full report
              </button>
            </div>

            {/* footer  */}
            <SubFormFooter content={footerContent} />
          </div>
        </div>
        <div className="flex w-[24%] business-page-mobileview-width">
          <MonitorReportForm />
        </div>
      </div>
    </>
  );
};
