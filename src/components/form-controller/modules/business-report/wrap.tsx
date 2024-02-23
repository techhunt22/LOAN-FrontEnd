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
    step: "STPE2",
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
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-[80%] text-center text-gray-700" content={headerString} />

                        {/* Alert Section */}
                        <Alert icon="/report/init/Shield-DoneVerifiedIcon.svg" content={alertContent} />
                        <Alert icon="/report/init/warning.svg" content={alertContent1} />

                        {/* Vidio card */}
                        <VideoCard videoContent={videoConten} />

                        <div className="flex text-[5rem] text-green-400">TAHNK YOU!</div>
                        <div className="flex text-2xl text-blue-400 my-4">INFORMATION RECEIVED</div>
                        <div className="flex text-xl text-green-400 mb-12">You Can Success Fully Move To 3nd Step</div>

                        {/* Bolg section */}
                        <div className="flex w-[90%] my-12">
                            <BlogCustomCardLeft content={contentBlogCardLeft} />
                        </div>

                        {/* save buttong */}
                        <div className="flex w-52 mt-0">
                            <Button placeholder="save the address" color="success" >SAVE</Button>
                        </div>

                        {/* general card */}
                        <div className="flex flex-row w-[90%] my-12 justify-center gap-6">
                            <div className="flex"><GeneralCardSmall icon="/business-account/search.svg" content="Search for a business Equifax Report" /></div>
                            <div className="flex mt-24"><GeneralCardSmall icon="/business-account/search.svg" content="Search for a business Equifax Report" /></div>
                            <div className="flex"><GeneralCardSmall icon="/business-account/search.svg" content="Search for a business Equifax Report" /></div>
                        </div>

                        {/* Resuouces importante */}
                        <div className="flex w-full my-2">
                            <ImportantInformation information={informationResuorce} />
                        </div>

                        {/* Website cards */}
                        <div className="flex flex-row w-full my-14">
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/report/init/equifaxVideocard.svg" />
                            </div>
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/report/init/experianVideoCard.svg" />
                            </div>
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/report/init/Groupdun&bradstreet.svg" />
                            </div>
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
