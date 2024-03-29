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

const headerContent = {
  step: "STPE3",
  title: "Start Building",
  subTitle: "TIER1",
}

const arrowLineCotent = "Welcome to Tier 1!";

const informationImportant = {
  title: "IMPORTANT",
  content: "Keep in mind the items discussed in Step 1 so that you can have the best success in approvals with the below trade accounts and success with them reporting.",
  color: "gray",
}

const blogCustomContent = {
  picture: "/monitor/b-1.svg",
  title: "WHAT IS A TRADE ACCOUNT?",
  contents: [
    {
      dataString: "A trade account (sometimes referred to as a vendor account) is typically a store account. As you set up your accounts with various vendors make sure you are working towards or setting up net terms. Payments on net terms are reported to the business credit bureaus.",
      dataColor: "text-gray-500",
      dataSize: "",
    },
    {
      dataString: "When applying for trade accounts make sure you use your correct business information as it matches on all of your business records.",
      dataColor: "text-blue-500",
      dataSize: "text-md",
    },
    {
      dataString: "To make sure your vendors report make sure you purchase is <b>over $50</b>. It typically takes <b>30-90 days</b> to complete this step and for your payments to report on your business credit reports. Continue to search your reports regularly so you are aware when they start reporting.",
      dataColor: "text-gray-500",
      dataSize: "",
    },
  ]
}

const monitorCardGroup = [
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-credable.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-uline.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-brex.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-murphy.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-kum&go.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-grainger.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-credable.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-uline.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-brex.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-murphy.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-kum&go.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-grainger.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-credable.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-uline.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-brex.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-murphy.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-kum&go.svg",
    contents:
      [
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
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-grainger.svg",
    contents:
      [
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
      ]
  },
]

interface Option {
  label: string;
}
export const TierOneFull = () => {
  return (
    <>
      <div className="flex flex-col w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-[76%] justify-start mt-6">
            <SubHeader content={headerContent} />
            <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
              <ArrowLineText type="flex flex-col w-[80%] text-center text-gray-700" content={arrowLineCotent} />

              {/* other datas */}
              <div className="flex w-full text-gray-500 justify-center text-center mt-4">
                <p>You need <b className="text-gray-700">at least 3 trade accounts</b> reporting on your business credit reports to qualify for the accounts in the next tier, “Tier 2”. Please scroll down to apply and make purchases with trade accounts that report to the business credit bureaus if you have not already.</p>
              </div>

              {/* Resuouces importante */}
              <div className="flex w-full my-12">
                <ImportantInformation information={informationImportant} />
              </div>

              {/* blog section */}

              <BlogCustomCardLeft content={blogCustomContent} />

              {/*  */}
              <div className="flex w-[100%]  bg-white justify-center text-center text-md text-gray-500 my-6">
                <p>If you have any questions reach out to our <b className="text-blue-400">Advisor Team</b>. Once you have applied for your trade accounts submit the information by clicking on the button below.</p>
              </div>

              {/* Card group */}
              <div className="flex flex-col w-[95%]">
                <MonitorCardGroup paymentContents={monitorCardGroup} />
              </div>

              {/* show button */}
              <div className="flex w-full my-20 justify-center items-center content-center">
                <button><img src="/monitor/bt-less.svg" alt="" className=" flex w-36 h-36 " /></button>
              </div>

              {/* button section */}
              <div className="flex w-[95%] justify-center content-center text-center mb-6">
                <p>Once you have applied for trade accounts please indicate which ones by using the buttons below:</p>
              </div>
              <div className="flex w-[95%] gap-12 justify-center content-center text-center">
                <button className="flex bg-gradient-to-r from-blue-400 to-blue-200 text-white text-2xl px-5 py-4 rounded-3xl">APPROVED ACCOUNT</button>
                <button className="flex bg-gradient-to-r from-pink-400 to-pink-200 text-white text-2xl px-5 py-4 rounded-3xl">DENED ACCOUNT</button>

              </div>
            </div>
          </div>
          <div className="flex w-[24%]">
            <MonitorReportForm />
          </div>
        </div>
        <div className="flex w-full mt-6">
          <MonitorFooter  url="/step7/page2-full" />
        </div>
      </div>
    </>
  );
};
