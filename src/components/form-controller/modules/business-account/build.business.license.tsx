"use client";
// @ts-ignore
import React from "react";
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
  step: "Step 1",
  title: "Fundability Foundation",
  subTitle: "GET BUSINESS LICENSE",
};

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/address.png",
  content: "WHY A BUSINESS LICENSE",
};

const records = {
  title: "Required:",
  method: "Edit",
  invidualRecords: [
    {
      title: "bUSINESS lICENSE(If Any)",
      icon: "",
      contents: [
        {
          recordName: "",
          iconName: "",
        },
      ],
    },
  ],
};

const contentBlogCardLeft = {
  picture: "/business-account/businessaddress.png",
  title: "GET YOUR REQUIRED BUSINESS LICENSES",
  content:
    "Every city, state and country within the United States has different licensing requirements. Make sure you have all the required licenses.",
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
  url: "/step1/build-business-bank",
  preUrl: "/step1/build-business-email",
};

export const BuildBusinessLicense = () => {
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl bg-[#f9f9f9] gap-6 business-main business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6  business-page-inner-mobileview ">
          <SubHeader content={headerContent} />
          <div
            style={{
              boxShadow: "2px 4px 12px 0px #a3a3a324",
            }}
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white business-page-namesection-mobileview"
          >
            <ArrowLineText
              type="flex flex-col w-[auto] pt-6 text-center text-gray-700"
              content="DO YOU HAVE ALL REQUIRED BUSINESS LICENSES?"
            />
            {/* Vidio card */}
            <VideoCard videoContent={videoConten} />

            {/* Bolg section */}
            <div className="flex w-[80%] my-12">
              <BlogCardLeft content={contentBlogCardLeft} />
            </div>

            {/* edit your details */}
            <div className="flex flex-col w-[85%]">
              <EditableContentRecord records={records} />
            </div>

            {/* save buttong */}
            <div className="flex w-80 business-save-btn mt-4 ml-80 flex  max-w-xs  w-full business-save-btn  mt-4 ml-80 buiness-page-savebtn-mobileview">
              <Button placeholder="save the address" color="success">
                SAVE
              </Button>
            </div>

            {/* back ground image */}
            <div className="flex w-full h-max mt-[-5rem]">
              <div className="flex flex-col w-full m-4 h-full relative">
                <img
                  src="/business-account/bussinessAdreess2.png"
                  alt=""
                  className="flex w-full h-[50rem] object-contain"
                />
              </div>
              <div className="flex w-[56%] h-full justify-center content-center items-center  mt-[3rem] absolute  business-page-mobileview-displaynone  ">
                <GeneralCard
                  icon="/business-account/search.svg"
                  content="Search secretary of state records"
                />
              </div>
            </div>
            {/* Resuouces importante */}
            <div className="flex w-full my-2 mt-[-14.5rem]">
              <ImportantInformation information={informationResuorce} />
            </div>

            {/* Website cards */}

            <div className="flex w-full my-24 justify-center">
              <GotoWebsiteThreeCard
                content="Varies"
                icon="/business-account/City Applications - png.png"
              />
            </div>

            {/* footer  */}
            <SubFormFooter content={footerContent} />
          </div>
        </div>
        <div className="flex w-[24%]  business-page-mobileview-width">
          <MonitorReportForm />
        </div>
      </div>
    </>
  );
};
