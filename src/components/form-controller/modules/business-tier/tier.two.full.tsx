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
import video from "@/video/step5.mp4"

const headerContent = {
  step: "STEP5",
  title: "Building Credit",
  subTitle: "TIER2",
};

const videoContent = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/reports/v-2.png",
  content: "BUILDING CREDIT",
  src: video,
};



const arrowLineCotent = "Welcome to Tier 2!";

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
    icon: "/monitor/step 5/atoB.svg",
    contents: [
      {
        record: "  Experian",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $7",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/g28596.svg",
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
        record: "Net will be only $30 or $7",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/path1.svg",
    contents: [
      {
        record: "D&B",
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
    icon: "/monitor/step 5/Layer 1.svg",
    contents: [
      {
        record: "Equifax",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: " Personal Guarantee Required",
      },
      {
        record: "Net will be $30",
      },
    ],
  },
  {
    price: "40",
    recommeded: true,
    icon: "/monitor/step 5/CEFCO Stores - png.svg",
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
        record: "Net will be only $7,&10,&14,$30",
      },
    ],
  },
  {
    price: "50",
    recommeded: true,
    icon: "/monitor/step 5/namynotinc - png.svg",
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
    price: "25",
    recommeded: true,
    icon: "/monitor/step 5/RoadFlex svg.svg",
    contents: [
      {
        record: "EXPERIAN",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "No Personal Guarantee Required",
      },
      {
        record: "Net will be only $7",
      },
    ],
  },
  {
    price: "45",
    recommeded: true,
    icon: "/monitor/step 5/Office Garner - png.png",
    contents: [
      {
        record: "EQUIFAX",
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
    price: "40",
    recommeded: true,
    icon: "/monitor/step 5/maverickofficesupplies.com - png.png",
    contents: [
      {
        record: "EQUIFAX",
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
    icon: "/monitor/step 5/layer1.png",
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
    icon: "/monitor/step 5/Maverik svg.png",
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
    price: "100",
    recommeded: true,
    icon: "/monitor/step 5/Bank of Albuquerque svg.png",
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
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "65",
    recommeded: true,
    icon: "/monitor/step 5/Group.png",
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
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/Group (1).png",
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
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/FireShot Capture 171 - Bank of Southern California N.A. - Community Business Bank_ - www.banksocal 1.png",
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
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/Bremer Bank svg.png",
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
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "80",
    recommeded: true,
    icon: "/monitor/step 5/Kwik Trip svg.png",
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
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/gulffleetcard.com svg.png",
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
    icon: "/monitor/step 5/Wayfair svg.png",
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
        record: "Net will be only $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/First Collinsville Bank - png.png",
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
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/enterprose bank logo.png",
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
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/Zoro svg.png",
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
        record: "Net will be upto revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/Page-1.png",
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
        record: "Net will be $30 ",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/United Rentals svg.png",
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
        record: "Net will be only $30, $45 ",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/officedeport.png",
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
        record: "Net will be only $30, $60 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/CSIglobalfleet - png.png",
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
        record: "Net will be only $30 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/ExxonMobil svg.png",
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
        record: "Net will be only $15 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/The Home Depot svg.png",
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
        record: "Net will be only $30,$60 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/quiktripfleetoffers.com svg.png",
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
        record: "Net will be  $15 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/v.png",
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
        record: "Net will be  $15 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/Lowe's svg.png",
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
        record: "Net will be  $25,$30,$60 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/Hisco - png.png",
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
        record: "Net will be  $30",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/Associated Bank - png.png",
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
    icon: "/monitor/step 5/Northern Tool svg.png",
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
    icon: "/monitor/step 5/sheetz.png",
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
        record: "Net will be $15,$20 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/7 svg.png",
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
    icon: "/monitor/step 5/QuickChek svg.png",
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
    icon: "/monitor/step 5/holiday.png",
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
    icon: "/monitor/step 5/DigiKey - png.png",
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
        record: "Net will be $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "public/monitor/step 5/hsuplly.png",
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
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/cdw.png",
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
        record: "Net will be $15",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/wwa.png",
    contents: [
      {
        record: "D&B and Experian and Equifax ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be $15 or revolving",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/Electronic Funds Source svg.png",
    contents: [
      {
        record: "D&B and Experian and Equifax ",
      },
      {
        record: "One Time Payment Only",
      },
      {
        record: "Personal Guarantee Required",
      },
      {
        record: "Net will be $7",
      },
    ],
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/step 5/INTRUST Bank svg.png",
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






  
 
 
];

export const TierTwoFull = () => {
  const router = useRouter();
  const fileName = "startBuildingTierTwoFile";
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessStartBuildingTierTwo
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessStartBuildingTierTwo(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  const { mutateAsync: image } = useMutation<
    Calls.IResponse.BusinessFile,
    Error,
    Calls.IRequest.ModulesBusinessStartBuildingTierTwoFile
  >({
    mutationFn: (variables) =>
      ApiCalls.Module.startBuildingTierTwoFile(variables),
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
    startBuildingTierTwoFile: null,
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
                  <b className="text-gray-700">at least 6 trade accounts</b>{" "}
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
          <div className="flex w-[95%] content-center text-center mb-6 tier-mobile-text">
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
            <button className="flex  text-white text-2xl px-5 py-4 rounded-3xl" style={{background: 'linear-gradient(90deg, #EB6B7A 0%, rgba(251, 111, 146, 0.76) 103.62%)',
}}>
              DENED ACCOUNT
            </button>
          </div>
          <div className="flex w-full mt-10">
            <MonitorFooter
              url="/step7/page3-full"
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
