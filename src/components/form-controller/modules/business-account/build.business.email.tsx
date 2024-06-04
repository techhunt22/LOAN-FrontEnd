"use client";
// @ts-ignore
import React, { useState } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { CheckBox, LineAxis } from "@mui/icons-material";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import {  Input } from "@mui/material";
import { Button } from "antd";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { BlogEmailCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";
import { staticId } from "@/components/const/cookies";

const headerContent = {
  step: "Step 1",
  title: "Fundability Foundation",
  subTitle: "YOUR WEBSITE & EMAIL",
};

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/phone-img.png",
  content: "WEBSITE FOR BUSINESS",
};

const records = {
  title: "Required:",
  method: "Edit",
  invidualRecords: [
    {
      title: "Business Website",
      icon: "",
      contents: [
        {
          recordName: "swurvin.com",
          iconName: "edit",
          name: "Website",
        },
      ],
    },
    {
      title: "Business Email",
      icon: "",
      contents: [
        {
          recordName: "payment@swuvin.com",
          iconName: "edit",
          name: "BusinessEmail",
        },
      ],
    },
  ],
};

const contentBlogCardLeft = {
  picture: "/business-account/image illustration for business address (1).png",
  title: "What Are Your Business Phone Priorities?",
  website: "george@mybusinessname.com",
  email: "george@gmail.com",
  content1:
    "Does your business have a phone number? Creditors prefer to see actual business phone numbers opposed to personal cell phones or residential phones. It’s important to also list your business phone number in the National 411 directory. Keep in mind that unfortunately cell phone numbers can’t be listed in the National 411 directory.",
  content2:
    "We can list your Business Phone number if you choose one of our recommendations below. The companies we recommend allow us to list your number in the National 411 directory. All you have to do is choose Yes below and fill in the information requested.",
};

const informationResuorce = {
  title: "RESOURCES",
  content:
    "We hope you love the products and services we recommend! We research and update these on a regular basis. Just so you know, we may receive a commission from links on this page. We are diligent to ensure any compensation we receive does not affect the price or level of service offered to you.",
  color: "blue",
};

const footerContent = {
  content: "Return To Business Credit Builder",
  previous: true,
  next: true,
  url: "/step1/build-business-license",
  preUrl: "/step1/build-business-phone",
};

export const BuildBusinessEmail = () => {
  const invidualRecord: any = records.invidualRecords.map(
    (record) => record.contents
  );
  const title: any = records.invidualRecords.map((item: any) => item.title);
  const names: any = invidualRecord.map((item: any, key: any) => item[0].name);
  const [values, setValues] = useState<number | string | undefined | any>({
    Website: "",
    BusinessEmail: "",
  });
  const buildBusinessPhone = "BuildBusinessPhone";
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessEmail
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessEmail(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  console.log(values, "values");

  const informationResourceProps = "Information Resource";
  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const data = await mutateAsync({
      website: values.Website,
      email: values.BusinessEmail,
      id: staticId,
    });
    return data;
  };
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl  gap-6 business-main business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6  business-page-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            style={{
              boxShadow: "2px 4px 12px 0px #a3a3a324",
            }}
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white  business-page-namesection-mobileview"
          >
            <ArrowLineText
              type="flex flex-col w-[auto] pt-6 text-center text-gray-700"
              content="DOES YOUR BUSINESS HAVE A WEBSITE & EMAIL?"
            />
            {/* Vidio card */}
            <VideoCard videoContent={videoConten} />

            {/* Bolg section */}
            <div className="flex w-[100%]  bg-white business-page-banner-bg-color my-12">
              <BlogEmailCardLeft content={contentBlogCardLeft} />
            </div>

            {/* edit your details */}
            <div className="flex flex-col w-[85%]">
              <EditableContentRecord
                records={records}
                value={values}
                handleOnChange={handleInputChange}
                name={names}
                buildBusinessPhone={buildBusinessPhone}
              />
            </div>

            {/* save buttong */}
            <div className="flex  max-w-xs  w-full business-save-btn mt-4 mb-8 ml-80 buiness-page-savebtn-mobileview">
             
              <Button
              className="bg-green-600 w-[350px] h-[50px] text-white"
                // placeholder="save the address"
                // loading={true}
                onClick={handleOnSave}
              >
                  SAVE
              </Button>
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-2">
              <ImportantInformation
                information={informationResuorce}
                informationResourceProps={informationResourceProps}
              />
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full flex-wrap justify-center  business-page-grid-gap-22 mt-12">
              <div className="flex justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/GoDaddy svg.svg"
                />
              </div>
              <div className="flex  justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/webpaz logo.svg"
                />
              </div>
              <div className="flex  justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/MyWebChef - png.svg"
                />
              </div>
            </div>
            <div className="flex flex-row w-full flex-wrap justify-center business-page-grid-gap-22  mt-8">
              <div className="flex  justify-">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/Squarespace.svg"
                />
              </div>
              <div className="flex  justify-start">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/google app icon and logo.svg"
                />
              </div>
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
