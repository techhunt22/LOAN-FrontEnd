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
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";
import { staticId } from "@/components/const/cookies";

const headerContent = {
  step: "Step 1",
  title: "Fundability Foundation",
  subTitle: "BUSINESS MERCHANT ACCOUNT",
};

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/address.png",
  content: "DOING MORE TO YOUR BUSINESS",
};

const records = {
  title: "Required:",
  method: "Edit",
  invidualRecords: [
    {
      title: "My Merchant Card Processor",
      icon: "",
      contents: [
        {
          recordName: "",
          iconName: "edit",
        },
      ],
    },
  ],
};

const contentBlogCardLeft = {
  picture: "/business-account/estho.png",
  title: "MERCHANT ACCOUNT",
  content:
    "A Merchant accounts allows your business to accept credit cards and debit cards. Statistically customers will spend more if they can purchase by card. Merchant processing under your business name alse increases your finance options.",
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
  url: "/step1/build-business-wrap",
  preUrl: "/step1/build-business-bank",
};

export const BuildBusinessMerchant = () => {
  const [value, setValue] = useState<number | string | undefined | any>();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessMerchant
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessMerchant(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const data = await mutateAsync({ account: value, id: staticId });
    return data;
  };
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl bg-[#f9f9f9] gap-6 business-main  business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6   business-page-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            style={{
              boxShadow: "2px 4px 12px 0px #a3a3a324",
            }}
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white  business-page-namesection-mobileview"
          >
            <ArrowLineText
              type="flex flex-col w-[auto] pt-6 text-center text-gray-700"
              content="DO YOU HAVE A BUSINESS MERCHANT ACCOUNT?"
            />
            {/* Vidio card */}
            <VideoCard videoContent={videoConten} />

            {/* Bolg section */}
            <div className="flex w-[95%] my-12">
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
            <div className="flex  max-w-xs  w-full business-save-btn  mt-4 ml-80 buiness-page-savebtn-mobileview">
              <Button
                placeholder="save the address"
                color="success"
                onClick={handleOnSave}
              >
                {isPending ? <Spinner /> : "SAVE"}
              </Button>
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-12 ">
              <ImportantInformation information={informationResuorce} />
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full my-14 flex-wrap justify-center  business-page-grid-gap-22 ">
              <div className="flexjustify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/FireShot.svg"
                />
              </div>
              <div className="flex justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/Capital.svg"
                />
              </div>
              <div className="flex justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/Square.svg"
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
