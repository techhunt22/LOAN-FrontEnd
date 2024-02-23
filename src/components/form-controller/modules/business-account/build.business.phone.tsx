"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { CheckBox, LineAxis } from "@mui/icons-material";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Button, Input } from "@mui/material";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { BlogCardLeft, BlogMultiCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";

const headerContent = {
    step: "STPE1",
    title: "Fundability Foundation",
    subTitle: "SET UP BUSINESS PHONE NO",
}

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/business-account/address.png",
    content: "BUSINESS PHONE NUMBER",
}

const records = {
    title: "Required:",
    method: "Edit",
    invidualRecords: [
        {
            title: "Business Phone Number / Toll Free Number",
            icon: "",
            contents: [
                {
                    recordName: "(877)-427-5549",
                    iconName: "edit",
                },
            ]
        },
        {
            title: "Phone Sevice Provider",
            icon: "",
            contents: [
                {
                    recordName: "Evoiced",
                    iconName: "edit",
                },
            ]
        },
        {
            title: "Fax Number",
            icon: "",
            contents: [
                {
                    recordName: "(654)-477-7888",
                    iconName: "edit",
                },
            ]
        },
    ]
}

const contentBlogCardLeft = {
    picture: "/business-account/amico.png",
    title: "What Are Your Business Phone Priorities?",
    content1: "Does your business have a phone number? Creditors prefer to see actual business phone numbers opposed to personal cell phones or residential phones. It’s important to also list your business phone number in the National 411 directory. Keep in mind that unfortunately cell phone numbers can’t be listed in the National 411 directory.",
    content2: "We can list your Business Phone number if you choose one of our recommendations below. The companies we recommend allow us to list your number in the National 411 directory. All you have to do is choose Yes below and fill in the information requested.",
    content3: "If you want to use a different Business Phone provider that is completely your choice. You can contact your Business Phone provider to confirm that the number can be listed in the National 411 directory and if there is any specific criteria to do so. If they allow a third party to list it on your behalf please choose Yes below and fill in the information requested.",
    content4: "Some vendors will check to make sure your Business Phone number is listed in the National 411 directory and if not they might choose to decline you for the account. We want you to have the best success so that is why we wanted to inform you of all the above information.",
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
    url: "/step1/build-business-email",
    preUrl: "/step1/build-business-ein",
}

export const BuildBusinessPhone = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-[80%] text-center text-gray-700" content="DO YOU HAVE A BUSINESS PHONE NUMBER?" />
                        {/* Vidio card */}
                        <VideoCard videoContent={videoConten} />

                        {/* Bolg section */}
                        <div className="flex w-[80%] my-12">
                            <BlogMultiCardLeft content={contentBlogCardLeft} />
                        </div>


                        {/* edit your details */}
                        <div className="flex flex-col w-[85%]">
                            <EditableContentRecord records={records} />
                        </div>

                        {/* save buttong */}
                        <div className="flex w-52 mt-4">
                            <Button placeholder="save the address" color="success" >SAVE</Button>
                        </div>

                        {/* Resuouces importante */}
                        <div className="flex w-full my-2">
                            <ImportantInformation information={informationResuorce} />
                        </div>

                        {/* Website cards */}
                        <div className="flex flex-row w-full mt-12">
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/business-account/Phone.svg" />
                            </div>
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/business-account/RingCentral.svg" />
                            </div>
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/business-account/MyCorporation.svg" />
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
