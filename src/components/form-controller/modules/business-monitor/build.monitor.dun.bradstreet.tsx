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

const headerContent = {
    step: "STPE4",
    title: "Moniter Business Reports",
    subTitle: "MONITOR D&B",
}

const arrowLineCotent = "IS YOUR BUSINESS MONITORING ITS DUN & BRADSTREEET(D & B) REPORT?";

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/report/reports/v-1.png",
    content: "MONITOR D&B",
}

const videoConten1 = {
    title: "Watch Video Transcript:",
    videoUrl: "/report/reports/v-1.png",
    content: "BUSINESS CREDIBILITY",
}

const blogCustomContent = {
    picture: "/report/reports/b-2.svg",
    title: "MONITOR D & B REPORT",
    contents: [
      {
        dataString: "Every business credit bureau has their own monitoring and scoring models. It's important to monitor your business credit reports regularly so you are aware of any changes that could impact your business. Monitoring business credit is different than monitoring personal credit reports",
        dataColor: "text-gray-500",
        dataSize: "",
      },
      {
        dataString: "To monitor your D & B report there are 2 strong options.",
        dataColor: "text-gray-500",
        dataSize: "",
      },
      {
        dataString: "Directly with D & B (Most expensie option but most comprehensive report)",
        dataColor: "text-gray-500",
        dataSize: "",
      },
      {
        dataString: "Integrated NAV monitiring(Least expensive, not as comprehensive but enough data)",
        dataColor: "text-gray-500",
        dataSize: "",
      },
    ]
  }

const paymentTitle = " Need to Set Up D & B Business Credit Report Monitoring?"
const paymentCard1 = {
  title: "Olny Pay One",
  price: "69",
  recommeded: true,
  contents: [
    {
      record: "Integrated D & B & Experian",
    },
    {
      record: "Least Expensive Report",
    },
    {
      record: "including Paydex score",
    },
    {
      record: "Monitoring Through Bureau Insights",
    },
  ]
}
const paymentCard2 = {
  title: "Extra Charges",
  price: "85",
  recommeded: false,
  contents: [
    {
      record: "Monitoring directly with D & B",
    },
    {
      record: "Most Expensive But Most Comprehensive Report",
    },
    {
      record: "D & B offers 2 monitoring options",
    },
    {
      record: "You Can Pay D & B Monthly And Cancel At Any Time",
    },
  ]
}

const informationResuorce = {
    title: "RESOURCES",
    content: "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
    color: "blue",
}

const footerContent = {
    content: "Return To Business Credit Builder",
    previous: true,
    next: true,
    url: "/step4/experian",
    preUrl: "/step4/credit",
}
interface Option {
    label: string;
}
export const BuildMonitorDunBradstreet = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-[80%] text-center text-gray-700" content={arrowLineCotent} />
                        {/* Vidio card */}
                        <div className="flex flex-row w-full">
                            <div className="flex w-[50%] justify-start">
                                <VideoCard videoContent={videoConten} />
                            </div>
                            <div className="flex w-[50%] justify-end">
                                <VideoCard videoContent={videoConten1} />
                            </div>
                        </div>

                        {/* blog section */}

                        <BlogCustomCardLeft content={blogCustomContent} />

                        {/*  */}
                        <div className="flex w-[90%] justify-center text-center text-md text-gray-500 my-6">
                            <p>ALREADY MONITORING YOUR D & B REPORT? IF SO, PLEASE UPLOAD YOUR REPORT HERE SO A BUSINESS CREDIT ADVISOR CAN REVIEW IT WITH YOU.</p>
                        </div>

                        {/* download section */}
                        <DownloadCard />
                        
                        {/* save buttong */}
                        <div className="flex w-72 h-12 mt-8">
                            <Button placeholder="save the address" color="success" size="large" >SAVE</Button>
                        </div>
                        
                        <div className="flex w-full mt-14 flex-col">
                            <PaymentCard title={paymentTitle} paymentContents1={paymentCard1} paymentContents2={paymentCard2}/>
                        </div>

                        {/* Resuouces importante */}
                        <div className="flex w-full my-12">
                            <ImportantInformation information={informationResuorce} />
                        </div>

                        {/* Website cards */}
                        <div className="flex flex-row w-full mt-12 justify-center">
                            <GotoWebsiteCard content="Varies" icon="/report/init/Groupdun&bradstreet.svg" />
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
