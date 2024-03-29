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
// @ts-ignore
import useForm from "new-react-use-form";
import { useRouter } from "next/navigation";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const headerContent = {
  step: "Step 4",
  title: "Moniter Business Reports",
  subTitle: "LEXIS NEXIS REPORT",
};

const arrowLineCotent = "REQUEST LEXIS NEXIS REPORT";

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/report/reports/v-7.png",
  content: "REQUEST FOR NEXIS LEXIS REPORT",
};

const blogCustomContent = {
  picture: "/report/reports/b-4.svg",
  title: "REQUEST LEXIS NEXIS REPORT",
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

const notesContent = "Aready Recieved Lexis Report?";

const alertContent =
  "If inaccuarate information on your Lexis report please click the below link to follow their instructions to resolve the inaccuuracy:";
const alertURLContent = "https://personalrepoerts.lexisnexis.com/dispute.jsp";

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
  url: "/step4/chex",
  preUrl: "/step4/equifax",
};
interface Option {
  label: string;
}
export const BuildMonitorRexisNexis = () => {
  const router = useRouter();
  const form = useForm({
    lexisFile: null,
  });
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event: any) => {
    const fileList = event.target.files;
    const file = fileList[0];
    form.set("lexisFile", file);
    setFileUploaded(true);
  };
  console.log(form, fileUploaded);

  const informationResourceProps = "Information Resource";
  const handleImage = () => {
    const fileInput = document.getElementById("myFile");

    if (fileInput) {
      fileInput.click(); // Trigger file input click
    }
  };

  const { mutateAsync: image, isPending: pending } = useMutation<
    Calls.IResponse.BusinessFile,
    Error,
    Calls.IRequest.ModulesBusinessLexisFile
  >({
    mutationFn: (variables) => ApiCalls.Module.lexisFile(variables),
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
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl  gap-6 business-main business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6  business-page-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white  business-page-namesection-mobileview"
            style={{ boxShadow: "2px 4px 12px 0px #a3a3a324" }}
          >
            <ArrowLineText
              type="flex flex-col w-[auto] text-center text-gray-700"
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
            <div className="flex w-[100%]  bg-white justify-center text-center text-md text-gray-500 my-6">
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
            <div className="flex  max-w-xs  w-full business-save-btn  mt-12">
              <Button
                placeholder="save the address"
                color="success"
                size="large"
                onClick={handleOnSave}
              >
                SAVE
              </Button>
            </div>

            <AlertURL
              icon="/report/init/warning.svg"
              content={alertContent}
              url={alertURLContent}
            />

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
                icon="/report/reports/vc-1.svg"
              />
            </div>

            {/* footer  */}
            <SubFormFooter content={footerContent} />
          </div>
        </div>
        <div className="flex w-[24%] business-page-mobileview-width ">
          <MonitorReportForm />
        </div>
      </div>
    </>
  );
};
