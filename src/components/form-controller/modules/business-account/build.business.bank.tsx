"use client";
// @ts-ignore
import React, { useState } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Button, Input } from "@mui/material";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { BlogCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";
import { GeneralCard } from "@/components/cards/general.cad";
const headerContent = {
  step: "STPE1",
  title: "Fundability Foundation",
  subTitle: "BUSINESS BANK ACCOUNT",
};

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/address.png",
  content: "USE CORRECT BUSINESS INFORMATION",
};

const records = {
  title: "Required:",
  method: "Edit",
  invidualRecords: [
    {
      title: "My Bank Name",
      icon: "",
      contents: [
        {
          recordName: "Chase",
          iconName: "edit",
        },
      ],
    },
  ],
};

const contentBlogCardLeft = {
  picture: "/business-account/estho.png",
  title: "SET UP YOUR BUSINESS BANK ACCOUNT",
  content:
    "All businesses big or small, new or established should set up a business bank account. A business bank account opens up financing options. Additionally, a business bank account affects the business in both accounting and legal departments.",
};

const informationResuorce = {
  title: "RESOURCES",
  content:
    "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
  color: "blue",
};

const footerContent = {
  content: "Return To Business Credit Builder",
  previous: true,
  next: true,
  url: "/step1/build-business-merchant",
  preUrl: "/step1/build-business-license",
};

export const BuildBusinessBank = () => {
  const [value, setValue] = useState<number | string | undefined | any>();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    if (setValue) {
      setValue(e.target.value);
    }
  };
  const handleOnSave = () => {
    console.log(value);
    setValue({});
  };
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">
        <div className="flex flex-col w-[76%] justify-start mt-6">
          <SubHeader content={headerContent} />
          <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
            <ArrowLineText
              type="flex flex-col w-[80%] text-center text-gray-700"
              content="DO YOU HAVE A BUSINESS BANK ACCOUNT?"
            />
            {/* Vidio card */}
            <VideoCard videoContent={videoConten} />

            {/* Bolg section */}
            <div className="flex w-[80%] my-12">
              <BlogCardLeft content={contentBlogCardLeft} />
            </div>

            {/* edit your details */}
            <div className="flex flex-col w-[85%]">
              <EditableContentRecord
                records={records}
                handleOnChange={handleOnChange}
                value={value}
              />
            </div>

            {/* save buttong */}
            <div className="flex w-52 mt-4 ml-80">
              <Button
                placeholder="save the address"
                color="success"
                onClick={handleOnSave}
              >
                SAVE
              </Button>
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-2 ">
              <ImportantInformation information={informationResuorce} />
            </div>

            {/* Website cards */}

            <div className="flex w-full my-24 justify-center">
              <GotoWebsiteThreeCard
                content="Varies"
                icon="/business-account/MyCorporation.svg"
              />
            </div>

            {/* footer  */}
            <SubFormFooter content={footerContent} />
          </div>
        </div>
        <div className="flex w-[24%]">
          <MonitorReportForm />
        </div>
      </div>
    </>
  );
};
