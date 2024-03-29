"use client";
// @ts-ignore
import React, { useState } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { LineAxis } from "@mui/icons-material";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Button, Input, InputAdornment } from "@mui/material";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFooter } from "@/components/footer/footer";
import { useMutation } from "@tanstack/react-query";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
// @ts-ignore
import { ApiCalls } from "@/api/calls/calls";
// @ts-ignore
import { Calls } from "@/app/api/calls/type";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";
import { staticId } from "@/components/const/cookies";

const headerContent = {
  step: "Step 1",
  title: "Fundability Foundation",
  subTitle: "CREATE A BUSINESS NAME",
};

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/Rectangle 115.png",
  content: "BUSINESS CREDIBILITY",
};
const videoContent = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/address.png",
  content: "WHAT SHOULD BE YOUR BUSINESS NAME",
};
const information = {
  title: "INFO",
  content:
    "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
  color: "green",
};

const informationResuorce = {
  title: "RESOURCES",
  content:
    "We hope you love the products and services we recommend! We research and update these on a regular basis. Just so you know, we may receive a commission from links on this page. We are diligent to ensure any compensation we receive does not affect the price or level of service offered to you.",
  color: "blue",
};

const footerContent = {
  content: "Return To Business Credit Builder",
  previous: false,
  next: true,
  url: "/step1/build-business-address",
  preUrl: "/business-account",
};
interface Option {
  label: string;
}
export const BuildBusinessCredit = () => {
  const multiVideoCard = "Multi Video Card";
  const [value, setValue] = useState<number | string | undefined | any>();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessName
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessName(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
const informationResourceProps = "Information Resource";
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = await mutateAsync({
      name: value,
      id: staticId,
    });
    return data;
  };
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl  gap-6 business-main business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6   business-page-inner-mobileview ">
          <SubHeader content={headerContent} />
          <div
            style={{
              boxShadow: "2px 4px 12px 0px #a3a3a324",
            }}
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white  business-page-namesection-mobileview"
          >
            <ArrowLineText
              type="flex flex-col w-[auto] pt-6 text-center text-gray-700"
              content="DO YOU HAVE A BUSINESS NAME?"
            />
            {/* Vidio card */}
            <div className="flex flex-row flex-wrap justify-center business-page-grid-gap-50 w-full mt-[38px]  business-credit-video-card">
              <div className="flex  justify-start">
                <VideoCard
                  videoContent={videoConten}
                  multiVideoCard={multiVideoCard}
                />
              </div>
              <div className="flex justify-end">
                <VideoCard
                  videoContent={videoContent}
                  multiVideoCard={multiVideoCard}
                />
              </div>
            </div>

            {/* import data */}
            <div className="flex w-full my-12">
              <ImportantInformation information={information} />
            </div>

            {/* line string */}
            <div className="flex w-full my-12 justify-center px-5">
              <ArrowLineText
                type="flex flex-col w-[] text-center text-gray-500 px-5"
                content="ENTER BUSINESS NAME?"
              />
            </div>
            <Input
              placeholder="Type your business name here"
              name="business_name"
              className="flex w-[80%] my-8 text-gray-500"
              aria-hidden
              onChange={handleOnChange}
              value={value}
              style={{ padding: "25px 19px ", gap: "35px" }}
startAdornment={
                <InputAdornment position="start">
                  <img src="/credit-input-icon.png" alt="" />
                </InputAdornment>
              }
            />

            <div className="flex  max-w-xs  w-full business-save-btn  mt-4">
              <Button type="button" onClick={onSubmit} color="success">
                {isPending ? <Spinner /> : "SAVE"}
              </Button>
            </div>

            {/* general cards */}
            <div className="flex flex-row flex-wrap justify-center business-page-grid-gap-124 w-full mt-12 business-credit-general-card">
              <div className="flex  justify-center">
                <GeneralCard
                  icon="/business-account/search.svg"
                  content="Search secretary of state records"
                />
              </div>
              <div className="flex  justify-center">
                <GeneralCard
                  icon="/business-account/Card.svg"
                  content="View Finance restricted industries"
                />
              </div>
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-12">
              <ImportantInformation
                information={informationResuorce}
                informationResourceProps={informationResourceProps}
              />
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full mt-12 flex-wrap justify-center gap-20 business-credit-website-card">
              <div className="flex justify-center">
                <GotoWebsiteCard content="Varies" icon="/northwest-logo.png" />
              </div>
              <div className="flex  justify-center">
                <GotoWebsiteCard
                  content="Varies"
                  icon="/business-account/MyCorporation.svg"
                />
              </div>
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
