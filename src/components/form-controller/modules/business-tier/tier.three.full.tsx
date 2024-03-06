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
import useForm from "new-react-use-form";

const headerContent = {
  step: "STPE6",
  title: "Advance Building",
  subTitle: "TIER4",
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
      <div className="flex flex-col w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-[76%] justify-start mt-6">
            <SubHeader content={headerContent} />
            <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
              <ArrowLineText
                type="flex flex-col w-[80%] text-center text-gray-700"
                content={arrowLineCotent}
              />

              {/* other datas */}
              <div className="flex w-full text-gray-500 justify-center text-center mt-4">
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
              <div className="flex flex-col w-[95%]">
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
              <div className="flex w-[95%] justify-center content-center text-center mb-6 text-gray-600">
                <p>
                  Once you have applied for trade accounts please indicate which
                  ones by using the buttons below:
                </p>
              </div>
              <div className="flex w-[95%] gap-12 justify-center content-center text-center">
                <button className="flex bg-gradient-to-r from-blue-400 to-blue-200 text-white text-2xl px-5 py-4 rounded-3xl">
                  APPROVED ACCOUNT
                </button>
                <button className="flex bg-gradient-to-r from-pink-400 to-pink-200 text-white text-2xl px-5 py-4 rounded-3xl">
                  DENED ACCOUNT
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-[24%]">
            <MonitorReportForm />
          </div>
        </div>
        <div className="flex w-full mt-6">
          <MonitorFooter
            url="/step7/page4-start"
            image={image}
            form={form}
            fileName={fileName}
            mutateAsync={mutateAsync}
          />
        </div>
      </div>
    </>
  );
};
