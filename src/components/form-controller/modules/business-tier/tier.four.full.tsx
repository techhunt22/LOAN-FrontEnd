"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
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
import Modal from "@/components/business-account-elements/modal";
const headerContent = {
  step: "STPE7",
  title: "Revoling Accounts",
  subTitle: "TIER4",
};

const arrowLineCotent = "Welcome to Tier 4!";

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

export const TierFourFull = () => {
  const router = useRouter();
  const fileName = "startBuildingTierFourFile";
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessStartBuildingTierFour
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessStartBuildingTierFour(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  const { mutateAsync: image } = useMutation<
    Calls.IResponse.BusinessFile,
    Error,
    Calls.IRequest.ModulesBusinessStartBuildingTierFourFile
  >({
    mutationFn: (variables) =>
      ApiCalls.Module.startBuildingTierFourFile(variables),
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
    startBuildingTierFourFile: null,
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
                  <b className="text-gray-700">at least 12 trade accounts</b>{" "}
                  reporting on your business credit reports to move to, “Tier
                  3”. Please scroll apply for trade accounts.
                </p>
              </div>

              <Modal />
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
              url="/client-dashboard"
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
