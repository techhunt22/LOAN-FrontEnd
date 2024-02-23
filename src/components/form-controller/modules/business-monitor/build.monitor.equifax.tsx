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
import { Notes } from "@/components/business-account-elements/notes";

const headerContent = {
    step: "STPE4",
    title: "Moniter Business Reports",
    subTitle: "MONITOR EQUIFAX",
}

const arrowLineCotent = "DOES YOUR BUSINESS HAVE BUSINESS EQUIFAX MONITORING?";

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/report/reports/v-6.png",
    content: "BUSINESS EQUIFAX REPORT",
}

const videoConten1 = {
    title: "Watch Video Transcript:",
    videoUrl: "/report/reports/v-6.png",
    content: "MONITOR BUSINESS EQUIFAX",
}

const blogCustomContent = {
    picture: "/report/reports/b-3.svg",
    title: "READ YOUR BUSINESS EQUIFAX REPORT",
    contents: [
      {
        dataString: "Just as it is important for an individual to understan their personal credit reports. It is importand for businesses to understand what is on their business credit report. Every business credit bureau has their own scoring models and monitoring serveice. Brush up on your skills and read your business Equifas report.",
        dataColor: "text-gray-500",
        dataSize: "",
      },
      {
        dataString: "Be proactie, identify what your goals are with your business credit reports. Do you want to get more financing in the future? Get higher credit limits?",
        dataColor: "text-gray-500 pl-3",
        dataSize: "text-sm",
      },
    ]
  }

const notesContent = "Do you have Equifax monitoring already?"

const paymentTitle = "Want To Obtain Monitoring With Equifax? Equifax Offers Multiple Plans And You Can Choose To Set Up Per Monthly Or For A Lower Cost If Annually."
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
      record: "Monitoring directly with Experian",
    },
    {
      record: "Choose To Set Up Per Monthly",
    },
    {
      record: "For A Lower Cost If Annually.",
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
    url: "/step4/lexis-nexis",
    preUrl: "/step4/experian",
}
interface Option {
    label: string;
}
export const BuildMonitorEquifax = () => {
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
                        <Notes content={notesContent} />
                        {/*  */}
                        <div className="flex w-[90%] justify-center text-center text-md text-gray-500 my-6">
                            <p>WANT TO OBTAIN MONITORING WITH EQUIFAX? YOU CAN SIGN UP THROUGH THE LINK BELOW:</p>
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
                            <GotoWebsiteCard content="Varies" icon="/report/init/equifaxVideocard.svg" />
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
