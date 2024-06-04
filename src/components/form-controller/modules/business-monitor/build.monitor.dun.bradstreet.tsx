"use client";
// @ts-ignore
import React, { useState } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { LineAxis } from "@mui/icons-material";
import { Button } from "antd";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import {  Input } from "@mui/material";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFooter } from "@/components/footer/footer";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { BlogCustomCardLeft } from "@/components/cards/blog.card";
import { DownloadCard } from "@/components/business-account-elements/dwonload.card";
import { PaymentCard } from "@/components/cards/payment.card";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
// @ts-ignore
import useForm from "new-react-use-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const headerContent = {
  step: "Step 4",
  title: "Moniter Business Reports",
  subTitle: "MONITOR D&B",
};

const arrowLineCotent =
  "IS YOUR BUSINESS MONITORING ITS DUN & BRADSTREEET(D & B) REPORT?";

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/reports/v-2.png",
  content: "MONITOR D&B",
};
const videoConten1 = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/reports/v-1.png",
  content: "BUSINESS CREDIBILITY",
};

const blogCustomContent = {
  picture: "/report/reports/b-1.png",
  title: "MONITOR D & B REPORT",
  contents: [
    {
      dataString:
        "Every business credit bureau has their own monitoring and scoring models. It's important to monitor your business credit reports regularly so you are aware of any changes that could impact your business. Monitoring business credit is different than monitoring personal credit reports",
      dataColor: "text-gray-500",
      dataSize: "",
    },
    {
      dataString: "To monitor your D & B report there are 2 strong options.",
      dataColor: "text-gray-500",
      dataSize: "",
    },
    {
      dataString:
        "Directly with D & B (Most expensie option but most comprehensive report)",
      dataColor: "text-gray-500",
      dataSize: "",
    },
    {
      dataString:
        "Integrated NAV monitiring(Least expensive, not as comprehensive but enough data)",
      dataColor: "text-gray-500",
      dataSize: "",
    },
  ],
};

const paymentTitle = " Need to Set Up D & B Business Credit Report Monitoring?";
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
  ],
};
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
  ],
};

const informationResuorce = {
  title: "RESOURCES",
  content:
    "We hope you love the products and services we recommend! We research and update these on a regular basis. Just so you know, we may receive a commission from links on this page. We are diligent to ensure any compensation we receive does not affect the price or level of service offered to you.",
  color: "blue",
};

const footerContent = {
  content: "Return To Business Credit Builder",
  previous: true,
  next: true,
  url: "/step4/experian",
  preUrl: "/step4/credit",
};
interface Option {
  label: string;
}
export const BuildMonitorDunBradstreet = () => {
  const router = useRouter();
  const form = useForm({
    monitorDunsFile: null,
  });
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event: any) => {
    const fileList = event.target.files;
    const file = fileList[0];
    form.set("monitorDunsFile", file);
    setFileUploaded(true);
  };
  console.log(form, fileUploaded);

  const handleImage = () => {
    const fileInput = document.getElementById("myFile");

    if (fileInput) {
      fileInput.click(); // Trigger file input click
    }
  };

  const { mutateAsync: image, isPending: pending } = useMutation<
    Calls.IResponse.BusinessFile,
    Error,
    Calls.IRequest.ModulesBusinessReportFile
  >({
    mutationFn: (variables) => ApiCalls.Module.businessReportFile(variables),
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
  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const formData = await image(form.data());
    return formData;
  };

  const informationResourceProps = "Information Resource";
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl  gap-6 business-main business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6  business-page-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white  business-page-namesection-mobileview"
            style={{ boxShadow: "rgba(163, 163, 163, 0.14) 2px 4px 12px 0px" }}
          >
            <ArrowLineText
              type="flex flex-col w-[auto] text-center text-gray-700 "
              content={arrowLineCotent}
            />
            {/* Vidio card */}
            <div
              className="flex flex-row flex-wrap justify-center business-page-grid-gap-50 w-full   business-credit-video-card"
              style={{ marginTop: "80px" }}
            >
              <div className="flex justify-start">
                <VideoCard videoContent={videoConten} />
              </div>
              <div className="flex justify-end">
                <VideoCard videoContent={videoConten1} />
              </div>
            </div>

            {/* blog section */}

            <BlogCustomCardLeft content={blogCustomContent} />

            {/*  */}
            <div
              className="flex w-[100%]  bg-white justify-center text-center text-md  my-6"
              style={{ color: "#737373" }}
            >
              <p>
                ALREADY MONITORING YOUR D & B REPORT? IF SO, PLEASE UPLOAD YOUR
                REPORT HERE SO A BUSINESS CREDIT ADVISOR CAN REVIEW IT WITH YOU.
              </p>
            </div>

            {/* download section */}
            <DownloadCard
              handleFileChange={handleFileChange}
              handleImage={handleImage}
              fileUploaded={fileUploaded}
            />

            {/* save buttong */}
            <div className="flex  max-w-xs  w-full business-save-btn  my-[80px]  mt-12 ">
          
              <Button
              className="bg-green-600 w-[350px] h-[50px] text-white"
                // placeholder="save the address"
                // loading={true}
                onClick={handleOnSave}
              >
                  SAVE
              </Button>

            </div>

            <div className="flex w-full my-14 flex-col ">
              <PaymentCard
                title={paymentTitle}
                paymentContents1={paymentCard1}
                paymentContents2={paymentCard2}
              />
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-12">
              <ImportantInformation
                information={informationResuorce}
                informationResourceProps={informationResourceProps}
              />
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full mt-12 justify-center">
              <GotoWebsiteCard
                content="Varies"
                icon="/report/init/Groupdun&bradstreet.svg"
              />
            </div>

            {/* footer  */}
            <SubFormFooter content={footerContent} />
          </div>
        </div>
        <div className="flex w-[24%]  business-page-mobileview-width">
          <MonitorReportForm />
        </div>
      </div>
    </>
  );
};
