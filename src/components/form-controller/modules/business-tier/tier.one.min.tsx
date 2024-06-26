"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { LineAxis } from "@mui/icons-material";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Button, Input } from "@mui/material";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFooter } from "@/components/footer/footer";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { BlogCustomCardLeft } from "@/components/cards/blog.card";
import { DownloadCard } from "@/components/business-account-elements/dwonload.card";
import { PaymentCard } from "@/components/cards/payment.card";
import { MonitorCardGroup } from "@/components/cards/monitor.card.group";
import { MonitorFooter } from "@/components/business-account-elements/monitor.footer";
import { useMutation } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// @ts-ignore
import useForm from "new-react-use-form";
import video from "@/video/step3.mp4";

const headerContent = {
  step: "STEP 3",
  title: "Start Building",
  subTitle: "TIER1",
};

const arrowLineCotent = "Welcome to Tier 1!";

const informationImportant = {
  title: "IMPORTANT",
  content:
    "Keep in mind the items discussed in Step 1 so that you can have the best success in approvals with the below trade accounts and success with them reporting.",
  color: "gray",
};

const blogCustomContent = {
  picture: "/monitor/b-1.svg",
  title: "WHAT IS A TRADE ACCOUNT?",
  contents: [
    {
      dataString:
        "A trade account (sometimes referred to as a vendor account) is typically a store account. As you set up your accounts with various vendors make sure you are working towards or setting up net terms. Payments on net terms are reported to the business credit bureaus.",
      dataColor: "text-gray-500",
      dataSize: "",
    },
    {
      dataString:
        "When applying for trade accounts make sure you use your correct business information as it matches on all of your business records.",
      dataColor: "text-blue-500",
      dataSize: "text-md",
    },
    {
      dataString:
        "To make sure your vendors report make sure you purchase is <b>over $50</b>. It typically takes <b>30-90 days</b> to complete this step and for your payments to report on your business credit reports. Continue to search your reports regularly so you are aware when they start reporting.",
      dataColor: "text-gray-500",
      dataSize: "",
    },
  ],
};

const monitorCardGroup = [
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-credable.svg",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One TimePayment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-uline.svg",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One TimePayment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-brex.svg",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One TimePayment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-murphy.svg",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One TimePayment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-kum&go.svg",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One TimePayment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-grainger.svg",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One TimePayment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/ceo.png",
    contents: [
      {
        record: "Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/wex.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be only $15,$22 or revolving ",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/Marathon - jpeg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be only $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/Group.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be only $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/Vector.png",
    contents: [
      {
        record: "D&B ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be revolving",
      },
    ],
  },
  {
    price: "100",
    recommeded: true,
    icon: "/monitor/creative analysis logo.png",
    contents: [
      {
        record: "Equifax ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $30",
      },
    ],
  },
  {
    price: "65",
    recommeded: true,
    icon: "/monitor/advance auto logo.png",
    contents: [
      {
        record: "D&B ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $30 OR $7 ",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/Pilot Flying J  svg.png",
    contents: [
      {
        record: "D&B ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $1",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/g12.png",
    contents: [
      {
        record: "D&B ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/KeyBank svg.png",
    contents: [
      {
        record: "Experian and Equifax ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "80",
    recommeded: true,
    icon: "/monitor/FireShot Capture 169 - Step 3 – Start Building_ Tier 1 – SuiteLogin.com - suitelogin 1.png",
    contents: [
      {
        record: "D&B and Equifax ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $30",
      },
    ],
  },
  {
    price: "80",
    recommeded: true,
    icon: "/monitor/documentRent ..png",
    contents: [
      {
        record: "D&B   ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $30",
      },
    ],
  },
];

const videoContent = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/Rectangle 115.png", // This seems to be an unrelated image URL
  content: "START BUILDING",
  src: video,
};

interface Option {
  label: string;
}
export const TierOneMin = () => {
  const router = useRouter();
  const fileName = "startBuildingTierOneFile";
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessStartBuildingTierOne
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessStartBuildingTierOne(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  const { mutateAsync: image } = useMutation<
    Calls.IResponse.BusinessFile,
    Error,
    Calls.IRequest.ModulesBusinessStartBuildingTierOneFile
  >({
    mutationFn: (variables) =>
      ApiCalls.Module.startBuildingTierOneFile(variables),
    onSuccess: (r) => {
      toast.success(r.message);
      if (r?.urlPath != null) {
        router.replace(r?.urlPath);
      }
    },
    onError: (e) => {
      toast.error(e?.message);
    },
  });

  const form = useForm({
    startBuildingTierOneFile: null,
  });
  return (
    <>
      <div className="flex flex-col w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6  gap-6 rounded-2xl business-main business-page-rightsection-mobileview">
        <div className="flex flex-row w-full justify-center gap-6">
          <div className="flex flex-col w-[74%] align-center mt-6 business-page-inner-mobileview">
            <SubHeader content={headerContent} />
            <div
              style={{
                boxShadow: "0px 14px 50px 20px #a3a3a324",
              }}
              className="flex flex-col w-full p-9 align-center items-center content-center mt-6 bg-white"
            >
              <ArrowLineText
                type="flex flex-col w-[auto] text-center text-gray-700"
                content={arrowLineCotent}
              />

              {/* other datas */}
              <div className="flex w-full text-gray-500 justify-center text-center mt-4 ">
                <p>
                  You need{" "}
                  <b className="text-gray-700">at least 3 trade accounts</b>{" "}
                  reporting on your business credit reports to qualify for the
                  accounts in the next tier, “Tier 2”. Please scroll down to
                  apply and make purchases with trade accounts that report to
                  the business credit bureaus if you have not already.
                </p>
              </div>

              {/* Resuouces importante */}
              <div className="flex w-full my-12">
                <ImportantInformation information={informationImportant} />
              </div>

              <VideoCard
                title={videoContent.title}
                videoUrl={videoContent.videoUrl}
                content={videoContent.content}
                src={videoContent.src}
              />

              {/* blog section */}
              <div className="flex w-[90%] my-12 business-page-banner-bg-color">
                <BlogCustomCardLeft content={blogCustomContent} />
              </div>
              {/*  */}
              <div className="flex w-[90%] justify-center text-center text-md text-gray-500 my-6">
                <p>
                  If you have any questions reach out to our{" "}
                  <b className="text-blue-400">Advisor Team</b>. Once you have
                  applied for your trade accounts submit the information by
                  clicking on the button below.
                </p>
              </div>

              {/* Card group */}
              <div className="flex flex-col w-[95%] flex-wrap">
                <MonitorCardGroup paymentContents={monitorCardGroup} />
              </div>

              {/* show button */}
              <div className="flex w-full my-20 justify-center items-center content-center">
                <button>
                  <img
                    src="/monitor/bt-showmore.svg"
                    alt=""
                    className=" flex w-36 h-36 "
                  />
                </button>
              </div>

              {/* button section */}
            </div>
          </div>

          <div className="flex w-[24%] business-page-mobileview-width">
            <MonitorReportForm />
          </div>
        </div>
        <div
          style={{
            paddingTop: "50px",
            position: "relative",
          }}
        >
          <div className="flex w-[95%]  content-center text-center mb-6 tier-mobile-text">
            <p>
              Once you have applied for trade accounts please indicate which
              ones by using the buttons below:
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: "999",
              top: "84px",
              left: "60px",
            }}
            className="flex w-[95%] gap-12  content-center text-center tier-mobile-button"
          >
            <button
              className="flex text-white text-2xl px-5 py-4 rounded-3xl"
              style={{
                background:
                  "linear-gradient(94.55deg, #1380FF -9.18%, #9FC9EB 104.32%)",
              }}
            >
              APPROVED ACCOUNT
            </button>
            <button
              className="flex  text-white text-2xl px-5 py-4 rounded-3xl"
              style={{
                background:
                  "linear-gradient(90deg, #EB6B7A 0%, rgba(251, 111, 146, 0.76) 103.62%)",
              }}
            >
              DENED ACCOUNT
            </button>
          </div>
          <div className="flex w-full mt-10">
            <MonitorFooter
              url="/step4/credit"
              image={image}
              form={form}
              fileName={fileName}
              mutateAsync={mutateAsync}
            />
          </div>
        </div>
      </div>
    </>
  );
};
