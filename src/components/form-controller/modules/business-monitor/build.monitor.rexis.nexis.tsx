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
import { Alert, AlertURL } from "@/components/business-account-elements/alert";

const headerContent = {
    step: "STPE4",
    title: "Moniter Business Reports",
    subTitle: "LEXIS NEXIS REPORT",
}

const arrowLineCotent = "REQUEST LEXIS NEXIS REPORT";

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/report/reports/v-7.png",
    content: "REQUEST FOR NEXIS LEXIS REPORT",
}

const blogCustomContent = {
    picture: "/report/reports/b-4.svg",
    title: "REQUEST LEXIS NEXIS REPORT",
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

const notesContent = "Aready Recieved Lexis Report?"

const alertContent = "If inaccuarate information on your Lexis report please click the below link to follow their instructions to resolve the inaccuuracy:"
const alertURLContent = "https://personalrepoerts.lexisnexis.com/dispute.jsp";

const informationResuorce = {
    title: "RESOURCES",
    content: "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
    color: "blue",
}

const footerContent = {
    content: "Return To Business Credit Builder",
    previous: true,
    next: true,
    url: "/step4/chex",
    preUrl: "/step4/equifax",
}
interface Option {
    label: string;
}
export const BuildMonitorRexisNexis = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-[80%] text-center text-gray-700" content={arrowLineCotent} />
                        {/* Vidio card */}
                        <div className="flex flex-row w-full">
                                <VideoCard videoContent={videoConten} />
                        </div>

                        {/* blog section */}

                        <BlogCustomCardLeft content={blogCustomContent} />

                        {/*  */}
                        <Notes content={notesContent} />
                        {/*  */}
                        <div className="flex w-[90%] justify-center text-center text-md text-gray-500 my-6">
                            <p>IF SO, PLEASE UPLOAD YOUR REPORT HERE SO A BUSINESS CREDIT ADVISOR CAN REVIEW IT WITH YOU.</p>
                        </div>

                        {/* download section */}
                        <DownloadCard />
                        
                        {/* save buttong */}
                        <div className="flex w-72 h-12 mt-8">
                            <Button placeholder="save the address" color="success" size="large" >SAVE</Button>
                        </div>
                        
                        <AlertURL icon="/report/init/warning.svg" content={alertContent} url={alertURLContent} />

                        {/* Resuouces importante */}
                        <div className="flex w-full my-12">
                            <ImportantInformation information={informationResuorce} />
                        </div>

                        {/* Website cards */}
                        <div className="flex flex-row w-full mt-12 justify-center">
                            <GotoWebsiteCard content="Varies" icon="/report/reports/vc-1.svg" />
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
