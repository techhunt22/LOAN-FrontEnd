"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Button, Input } from "@mui/material";
import { GeneralCard, GeneralCardSmall } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { BlogCardLeft, BlogCustomCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";
import { SelectCard, SelectCardInvidual } from "@/components/cards/select.card";
import { Alert } from "@/components/business-account-elements/alert";

const headerContent = {
    step: "Step 2",
    title: "Establish Business Reports",
    subTitle: "FIXING REDIT REPORT",
}

const headerString = "Is everything listed correctly with your Business Credit reports?";

const alertContent = "Goal for this Step  is to understand how trade accounts to report. Also to fix inaccuracies with the Business Credit Bureaus.";
const alertContent1 = "It is important to watch the video below before going to Step 3(Round 1) to ensure smooth sailing in that Step.";

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/report/init/wrap.png",
    content: "FIX CREDIT REPORT",
}

const contentBlogCardLeft = {
    picture: "/report/init/cuatewrap.png",
    title: "FIX ANY INACCURACIES ON YOUR BUSINESS CREDIT REPORTS",
    contents: [
        {
            dataString: "Just like personal credit, sometimes credit information is reported incorrectly onto your business credit reports. The process to update and correct your reports is different than personal credit. Business credit reports aren’t regulated like personal credit reporting is, but you’ll find that the business credit bureaus are fairly responsive.",
            dataColor: "",
            dataSize: "",
        },
        {
            dataString: "It’s always important to make sure any information reporting on your credit reports is correct. It is worth taking the time to correct any inaccuracies.",
            dataColor: "",
            dataSize: "",
        },
    ],
}

const informationResuorce = {
    title: "RESOURCES",
    content: "We hope you love the products and services we recommend! We research and update these on a regular basis. Just so you know, we may receive a commission from links on this page. We are diligent to ensure any compensation we receive does not affect the price or level of service offered to you.",
    color: "blue",
}

const footerContent = {
    content: "Return To Business Credit Builder",
    previous: true,
    next: true,
    url: "/step4/credit",
    preUrl: "/step2/equifax",
}

export const BusinessReportWrap = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl bg-[#f9f9f9] gap-6 business-main business-page-rightsection-mobileview ">

                <div className="flex flex-col w-[76%] justify-start mt-6 business-page-inner-mobileview">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white" style={{boxShadow:'rgba(163, 163, 163, 0.14) 2px 4px 12px 0px;',}}>
                        <ArrowLineText type="flex flex-col w-[auto] text-center text-gray-700" content={headerString} />

                        {/* Alert Section */}
                        <Alert icon="/report/init/Shield-DoneVerifiedIcon.svg" content={alertContent} />
                        <Alert icon="/report/init/warning.svg" content={alertContent1} />

                        {/* Vidio card */}
                        <VideoCard videoContent={videoConten} />

                        <div className="flex font-85 " style={{color:' rgba(56, 176, 0, 1)',}}>TAHNK YOU!</div>
                        <div className="flex text-2xl my-4" style={{color:' rgba(38, 132, 255, 1);',}} >INFORMATION RECEIVED</div>
                        <div className="flex text-xl  mb-12 text-center" style={{color:' rgba(56, 176, 0, 1)',}}>You Can Success Fully Move To 3nd Step</div>

                        {/* Bolg section */}
                        <div className="flex w-[90%] my-12">
                            <BlogCustomCardLeft content={contentBlogCardLeft} />
                        </div>

                        {/* save buttong */}
                        <div className="flex  max-w-xs  w-full business-save-btn  mt-4">
                            <Button placeholder="save the address" color="success" >SAVE</Button>
                        </div>

                        {/* general card */}
                        <div className="flex flex-row w-[90%] my-12 justify-center gap-6  business-credit-general-card flex-wrap">
                            <div className="flex  justify-center business-page-dn-number"><GeneralCardSmall icon="/business-account/search.svg" content="Search for a business Equifax Report" /></div>
                            <div className="flex  justify-center business-page-dn-number mt-24 mt-0"><GeneralCardSmall icon="/business-account/search.svg" content="Search for a business Equifax Report" /></div>
                            <div className="flex  justify-center business-page-dn-number"><GeneralCardSmall icon="/business-account/search.svg" content="Search for a business Equifax Report" /></div>
                        </div>

                        {/* Resuouces importante */}
                        <div className="flex w-full my-2">
                            <ImportantInformation information={informationResuorce} />
                        </div>

                        {/* Website cards */}
                        <div className="flex flex-row flex-wrap justify-center business-page-grid-gap-22  mt-12">
                            <div className="flex  justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/report/init/equifaxVideocard.svg" />
                            </div>
                            <div className="flex  justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/report/init/experianVideoCard.svg" />
                            </div>
                            <div className="flex  justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/report/init/Groupdun&bradstreet.svg" />
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
