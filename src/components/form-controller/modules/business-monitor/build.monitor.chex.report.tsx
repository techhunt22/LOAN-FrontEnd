"use client";
// @ts-ignore
import React, { useState } from "react";
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
import { AlertCard } from "@/components/cards/alert.card";
import useForm from "new-react-use-form";
import { useRouter } from "next/navigation";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const headerContent = {
  step: "STPE4",
  title: "Moniter Business Reports",
  subTitle: "CHEX REPORT",
};

const arrowLineCotent = "REQUEST CHEX SYSTEMS REPORT";

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/reports/v-8.png",
  content: "REQUEST FOR CHEX REPORT",
};

const blogCustomContent = {
  picture: "/report/reports/b-5.svg",
  title: "REQUEST CHEX SYSTEM REPORT",
  contents: [
    {
      dataString:
        "Just as it is important for an individual to understan their personal credit reports. It is importand for businesses to understand what is on their business credit report. Every business credit bureau has their own scoring models and monitoring serveice. Brush up on your skills and read your business Equifas report.",
      dataColor: "text-gray-500",
      dataSize: "",
    },
    {
      dataString:
        "Be proactie, identify what your goals are with your business credit reports. Do you want to get more financing in the future? Get higher credit limits?",
      dataColor: "text-gray-500 pl-3",
      dataSize: "text-sm",
    },
  ],
};

const notesContent =
  "Received Chex System Report And Would Like Help Reviewing It?";

const alertCard1 = {
  title: "Fixed Price",
  icon: "/report/reports/i-1.svg",
  content: "Get your ChexSystems Report",
  subtitle: "GET REPORTS",
};
const alertCard2 = {
  title: "Fixed Price",
  icon: "/report/reports/i-2.svg",
  content: "Get your ChexSystems Score",
  subtitle: "GET SCORE",
};
const alertCard3 = {
  title: "Fixed Price",
  icon: "/report/reports/i-3.svg",
  content: "Add a Security Freeze to Your ChexSystems Report",
  subtitle: "ADD NOW",
};
const alertCard4 = {
  title: "Fixed Price",
  icon: "/report/reports/i-4.svg",
  content: "Lift a Security Freeze from Your ChexSystems Report",
  subtitle: "SECURITY lOCK",
};
const alertCard5 = {
  title: "Fixed Price",
  icon: "/report/reports/i-5.svg",
  content: "Add a Security Alert to Your ChexSystems Report",
  subtitle: "SECURITY ALERT",
};
const alertCard6 = {
  title: "Fixed Price",
  icon: "/report/reports/i-6.svg",
  content: "Dispute your ChexSystems Reports",
  subtitle: "DISPUTE REPORT",
};

const footerContent = {
  content: "Return To Business Credit Builder",
  previous: true,
  next: true,
  url: "/step7/page1-min",
  preUrl: "/step4/lexis-nexis",
};
interface Option {
  label: string;
}
export const BuildMonitorChexReport = () => {
  const router = useRouter();
  const form = useForm({
    chexSystemFile: null,
  });
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event: any) => {
    debugger;
    const fileList = event.target.files;
    const file = fileList[0];
    form.set("chexSystemFile", file);
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
    Calls.IRequest.ModulesBusinessChexSystemFile
  >({
    mutationFn: (variables) => ApiCalls.Module.chexSystemFile(variables),
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
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">
        <div className="flex flex-col w-[76%] justify-start mt-6">
          <SubHeader content={headerContent} />
          <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
            <ArrowLineText
              type="flex flex-col w-[80%] text-center text-gray-700"
              content={arrowLineCotent}
            />
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
              <p>
                IF SO, PLEASE UPLOAD YOUR REPORT HERE SO A BUSINESS CREDIT
                ADVISOR CAN REVIEW IT WITH YOU.
              </p>
            </div>

            {/* download section */}
            <DownloadCard
              handleFileChange={handleFileChange}
              handleImage={handleImage}
              fileUploaded={fileUploaded}
            />

            {/* save buttong */}
            <div className="flex w-72 h-12 mt-8">
              <Button
                placeholder="save the address"
                color="success"
                size="large"
                onClick={handleOnSave}
              >
                SAVE
              </Button>
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full mt-12 gap-3 justify-center">
              <AlertCard alertContents={alertCard1} />
              <AlertCard alertContents={alertCard2} />
              <AlertCard alertContents={alertCard3} />
            </div>
            <div className="flex flex-row w-full mt-2 mb-16 gap-3 justify-center">
              <AlertCard alertContents={alertCard1} />
              <AlertCard alertContents={alertCard2} />
              <AlertCard alertContents={alertCard3} />
            </div>
            <div className="flex text-[5rem] text-green-400">GREAT WORK!</div>
            <div className="flex text-2xl text-blue-400 my-4">
              STEP 4 IS COMPLETE!
            </div>
            <div className="flex text-xl text-green-400 mb-12">
              You Can Success Fully Move To 5nd Step
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
