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
import { TierDetailCard } from "@/components/cards/tier.detail.card";
import { useMutation } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// @ts-ignore
import useForm from "new-react-use-form";
import video from "@/video/step6.mp4"

const headerContent = {
  step: "STEP6",
  title: "Advance Building",
  subTitle: "TIER4",
};

const videoContent = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/reports/v-2.png",
  content: "ADVANCED BUILDING",
  src: video,
};


const arrowLineCotent = "Welcome to Tier 3!";

const informationImportant = {
  title: "IMPORTANT",
  content:
    "Don’t proceed to the next  step  until trade accounts are reporting.",
  color: "gray",
};

const tierContents = {
  title: "APPLY FOR 3 MORE TRADE ACCOUNTS",
  description:
    "YOU CURRENTLY HAVE AT LEAST 3 TRADE ACCOUNTS REPORTING, BUT NOW IT IS TIME TO ESTABLISH YOUR BUSINESS CREDIT REPORTS EVEN FURTHER. PLEASE SELECT AND APPLY FOR 3 MORE TRADE ACCOUNTS.",
  details: [
    {
      detail:
        "Remember to use your correct business information when applying, as all information should match your business records perfectly.",
    },
    {
      detail:
        "When you make a purchase, do so on your net /credit terms. It is payments on net / credit terms that are reported.",
    },
    {
      detail:
        " It typically takes <b>30-90 days</b> to complete this step and for your payments to report on your business credit reports. ",
    },
  ],
};

const monitorCardGroup = [
  {
    price: "50",
    recommeded: true,
    icon: "/monitor/step 6/FireShot Capture 173 - COAST TO COAST - coasttocoastofficesupply 1.png",
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
    icon: "/monitor/step 6/Capital on Tap - png 0.png",
    contents: [
      {
        record: "Experian",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be upto revolving",
      },
    ],
  },
 
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/KleerCard - png 0.png",
    contents: [
      {
        record: "D&B",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $30 ",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Layer 2.png",
    contents: [
      {
        record: "D&B",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $30 ",
      },
    ],
  },
  {
    price: "40",
    recommeded: true,
    icon: "/monitor/step 6/crownofficesupplies.com - png 0.png",
    contents: [
      {
        record: "D&B and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $30 ",
      },
    ],
  },
  {
    price: "50",
    recommeded: true,
    icon: "/monitor/step 6/Clark Crown _ Lisle IL - png 0.png",
    contents: [
      {
        record: "D&B and Experian",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be $15",
      },
    ],
  },
  {
    price: "25",
    recommeded: true,
    icon: "/monitor/step 6/FleetCardsUSA - png.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $7,$10 or $14",
      },
    ],
  },
  {
    price: "45",
    recommeded: true,
    icon: "/monitor/step 6/Ryder - png 0.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be $7,$10 or $14",
      },
    ],
  },
  {
    price: "40",
    recommeded: true,
    icon: "/monitor/step 6/Nevada State bank - png 0.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/bellbanksretirement.com - png.png",
    contents: [
      {
        record: "D&B",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Citizens Business Bank svg.png",
    contents: [
      {
        record: "D&B",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be revolving",
      },
    ],
  },
  {
    price: "100",
    recommeded: true,
    icon: "/monitor/step 6/Comerica Bank svg.png",
    contents: [
      {
        record: "D&B",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be revolving",
      },
    ],
  },
  
  {
    price: "65",
    recommeded: true,
    icon: "/monitor/step 6/JetBlue svg.png",
    contents: [
      {
        record: "Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Wintrust - png.png",
    contents: [
      {
        record: "D&B",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "public/monitor/step 6/FNBO - png 0.png",
    contents: [
      {
        record: "D&B(Reports Quartely)",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be $20 or  revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Columbus Promos LLC _ Columbus OH svg.png",
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
    price: "80",
    recommeded: true,
    icon: "/monitor/step 6/arco fleet card logog.png",
    contents: [
      {
        record: "D&B and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be only $30",
      },
    ],
  },

  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/GEMPLER'S _ Janesville WI - png.png",
    contents: [
      {
        record: "D&B",
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
    icon: "/monitor/step 6/Sunoco svg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be only $15 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Speedway - png 0.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be only $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Sinclair Oil svg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be only $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/bp svg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $7,$10,$14 OR $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Lands' End svg.png",
    contents: [
      {
        record: "D&B",
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
    icon: "/monitor/step 6/Tractor Supply Co. svg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax (Report will show up after Thasadith, they report monthly)",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $30,$45",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/shell logo.png",
    contents: [
      {
        record: "D&B and Experian and Equifax ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be $22 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/public/monitor/step 6/FireShot Capture 197 - SUMMA OFFICE SUPPLIES - summaofficesupplies 1.png",
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
    icon: "/monitor/step 6/Royal Farms svg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/FireShot Capture 198 - Umpqua Bank_ Together for better - www.umpquabank 1.png",
    contents: [
      {
        record: "D&B",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Stripes - png.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Mapco Rewards svg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/Platt Electric Supply - png 0.png",
    contents: [
      {
        record: "D&B and Experian",
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
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/CITGO svg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 6/thespinxcompany - png.png",
    contents: [
      {
        record: "D&B and Experian and Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be $15",
      },
    ],
  },
];

export const TierThreeFull = () => {
  const router = useRouter();
  const fileName = "startBuildingTierThreeFile";
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessStartBuildingTierThree
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessStartBuildingTierThree(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  const { mutateAsync: image } = useMutation<
    Calls.IResponse.BusinessFile,
    Error,
    Calls.IRequest.ModulesBusinessStartBuildingTierThreeFile
  >({
    mutationFn: (variables) =>
      ApiCalls.Module.startBuildingTierThreeFile(variables),
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
    startBuildingTierThreeFile: null,
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
                  <b className="text-gray-700">at least 9 trade accounts</b>{" "}
                  reporting on your business credit reports to move to, “Tier
                  3”. Please scroll apply for trade accounts.
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

              {/* tier detail section */}
              <TierDetailCard contents={tierContents} />

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
                    src="/monitor/bt-less.svg"
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
            <button className="flex  text-white text-2xl px-5 py-4 rounded-3xl" style={{background: 'linear-gradient(94.55deg, #1380FF -9.18%, #9FC9EB 104.32%)',
}}>
              APPROVED ACCOUNT
            </button>
            <button className="flex text-white text-2xl px-5 py-4 rounded-3xl" style={{background: 'linear-gradient(90deg, #EB6B7A 0%, rgba(251, 111, 146, 0.76) 103.62%)',
}}>
              DENED ACCOUNT
            </button>
          </div>
          <div className="flex w-full mt-10">
            <MonitorFooter
              url="/step7/page4-full"
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
