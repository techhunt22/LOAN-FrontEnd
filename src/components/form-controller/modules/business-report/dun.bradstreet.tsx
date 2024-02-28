"use client";
// @ts-ignore
import React, { useState } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Button, Input } from "@mui/material";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { BlogCardLeft, BlogCustomCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";
import { SelectCard, SelectCardInvidual } from "@/components/cards/select.card";
import { Alert } from "@/components/business-account-elements/alert";

const headerContent = {
  step: "STPE2",
  title: "Establish Business Reports",
  subTitle: "D & B NUMBER",
};

const headerString = "DOES YOUR BUSINESS HAVE A DUNS # WITH DUN & BRADSTREET?";

const alertContent =
  "The Goal of Step 2.1 is to apply for your DUNS number if you don’t already have it, and to verify the address listed for your D&B account";

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/init/movie.png",
  content: "HOW TO APPLY FOR DUNS NO#",
};

const contentBlogCardLeft = {
  picture: "/report/init/imageillustrationforbusinessaddress.png",
  title: "ESTABLISH YOUR DUNS #",
  contents: [
    {
      dataString:
        "It’s important for a business to have a business address. In order to have a strong business foundation, your business should use a physical business address. Most lenders prefer that you have a business address but, you can use your residential address.",
      dataColor: "",
      dataSize: "",
    },
    {
      dataString:
        "VERY IMPORTANT when applying for your DUNS number to use the exact same company name and business address as the Secretary of State and IRS. Creditors will check the business information on your report against public record. If there are any variances, it can lead to a decline.",
      dataColor: "text-blue-500",
      dataSize: "text-lg",
    },
  ],
};

const records = {
  title: "Required:",
  method: "Edit",
  invidualRecords: [
    {
      title: "Entity Type:",
      icon: "/report/init/file.svg",
      contents: [
        {
          recordName: "116779722",
          iconName: "edit",
        },
      ],
    },
  ],
};

const contentSelect = {
  contents1:
    "Does dun &bradstreet list the exact same company name and business address as the secretary  of state and irs ? ",
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
  url: "/step2/experian",
  preUrl: "/step2/dun-bradstreet",
};

export const BusinessReportDunBradstreet = () => {
  const [value, setValue] = useState<number | string | undefined | any>();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };
  const handleOnSave = () => {
    setValue("");
    console.log(value);
  };
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">
        <div className="flex flex-col w-[76%] justify-start mt-6">
          <SubHeader content={headerContent} />
          <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
            <ArrowLineText
              type="flex flex-col w-[80%] text-center text-gray-700"
              content={headerString}
            />

            {/* Alert Section */}
            <Alert
              icon="/report/init/Shield-DoneVerifiedIcon.svg"
              content={alertContent}
            />

            {/* Vidio card */}
            <VideoCard videoContent={videoConten} />

            {/* Bolg section */}
            <div className="flex w-[90%] my-12">
              <BlogCustomCardLeft content={contentBlogCardLeft} />
            </div>

            {/* edit your details */}
            <div className="flex flex-col w-[85%]">
              <EditableContentRecord
                records={records}
                handleOnChange={handleOnChange}
                value={value}
              />
            </div>

            {/* import Select Card */}
            <div className="flex flex-col w-[85%] mt-0 justify-center content-center items-center">
              <SelectCardInvidual content={contentSelect} />
            </div>

            {/* Warning section */}
            <div className="flex w-[60%] mt-8">
              <span className="inline-box">If no, </span>
              <a href="#" className="inline-box ml-1 text-blue-400">
                click here
              </a>
              <span className="inline-box ml-1">
                {" "}
                to update your business name & address with
              </span>
              {/* <span className="inline-block">to update your business name & address with D&B so it matches exactly with the Secretary of State & IRS</span> */}
            </div>
            <div className="flex w-[60%]">
              <span className="inline-block">
                so it matches exactly with the Secretary of State & IRS
              </span>
            </div>

            {/* save buttong */}
            <div className="flex w-52 mt-8">
              <Button
                placeholder="save the address"
                color="success"
                onClick={handleOnSave}
              >
                SAVE
              </Button>
            </div>

            {/* general card */}
            <div className="flex flex-row w-[85%] mt-12">
              <div className="flex w-[50%] justify-center">
                <GeneralCard
                  icon="/report/init/Export.svg"
                  content="Apply for a D&N Number"
                />
              </div>
              <div className="flex w-[50%] justify-center">
                <GeneralCard
                  icon="/report/init/Chart.svg"
                  content="D&N basic report information"
                />
              </div>
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-2">
              <ImportantInformation information={informationResuorce} />
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full mt-12 justify-center">
              <GotoWebsiteCard
                content="Varies"
                icon="/report/init/Groupdun&bradstreet.svg"
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
