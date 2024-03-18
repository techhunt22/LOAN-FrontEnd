"use client";
// @ts-ignore
import React, { useState } from "react";
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
import { BlogCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";
import { SelectCard } from "@/components/cards/select.card";
import { DownloadCard } from "@/components/business-account-elements/dwonload.card";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
// @ts-ignore
import useForm from "new-react-use-form";
import { useRouter } from "next/navigation";
import { staticId } from "@/components/const/cookies";

const headerContent = {
  step: "Step 1",
  title: "Fundability Foundation",
  subTitle: "SET UP BUSINESS EIN#",
};

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/address.png",
  content: "BUSINESS EIN#",
};

const records = {
  title: "Your Details:",
  method: "Edit",
  invidualRecords: [
    {
      title: "EIN# Number:",
      icon: "",
      contents: [
        {
          recordName: "82-3496580",
          iconName: "edit",
        },
      ],
    },
  ],
};

const contentBlogCardLeft = {
  picture: "/business-account/estho.png",
  title: "APPLY FOR YOUR BUSINESS'S EIN#",
  content:
    "The United States requires all business entities to file for an EIN#. Like a social security number is to an individual an EIN# is to a business.",
};

const informationResuorce = {
  title: "RESOURCES",
  content:
    "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
  color: "blue",
};

const footerContent = {
  content: "Return To Business Credit Builder",
  previous: true,
  next: true,
  url: "/step1/build-business-phone",
  preUrl: "/step1/build-business-entry",
};

export const BuildBusinessEin = () => {
  const router = useRouter();
  const [value, setValue] = useState<number | string | undefined | any>();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const form = useForm({
    einFile: null,
  });
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event: any) => {
    const fileList = event.target.files;
    const file = fileList[0];
    form.set("einFile", file);
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
    Calls.IRequest.ModulesBusinessEinFile
  >({
    mutationFn: (variables) => ApiCalls.Module.einFile(variables),
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
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessEin
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessEin(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const data = await mutateAsync({ number: value, id: staticId });
    const formData = await image(form.data());
    const updatedData = { ...data, ...formData };
    return updatedData;
  };
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl bg-[#f9f9f9] gap-6 business-main business-page-rightsection-mobileview">
        <div className="flex flex-col w-[76%] justify-start mt-6  business-page-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            style={{
              boxShadow: "2px 4px 12px 0px #a3a3a324",
            }}
            className="flex flex-col w-full p-9  justify-center items-center content-center mt-6 bg-white business-page-namesection-mobileview"
          >
            <ArrowLineText
              type="flex flex-col w-[auto] pt-6 text-center text-gray-700"
              content="DO YOU HAVE A BUSINESS EIN#"
            />
            {/* Vidio card */}
            <VideoCard videoContent={videoConten} />

            {/* edit your details */}
            <div className="flex flex-col w-[85%]">
              <EditableContentRecord
                records={records}
                handleOnChange={handleOnChange}
                value={value}
              />
            </div>
            {/* import Select Card */}
            <div className="flex my-8">
              <DownloadCard
                handleFileChange={handleFileChange}
                handleImage={handleImage}
                fileUploaded={fileUploaded}
              />
            </div>

            {/* save buttong */}
            <div className="flex  max-w-xs  w-full business-save-btn  mt-4">
              <Button
                placeholder="save the address"
                color="success"
                onClick={handleOnSave}
              >
                SAVE
              </Button>
            </div>
            {/* Bolg section */}
            <div className="flex w-[90%] business-page-banner-bg-color my-12">
              <BlogCardLeft content={contentBlogCardLeft} />
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-2">
              <ImportantInformation information={informationResuorce} />
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full flex-wrap justify-center gap-20 mt-12 business-credit-website-card">
              <div className="flex  justify-center">
                <GotoWebsiteCard
                  content="Varies"
                  icon="/business-account/NorthOne.svg"
                />
              </div>
              <div className="flex justify-center">
                <GotoWebsiteCard
                  content="Varies"
                  icon="/business-account/MyCorporation.svg"
                />
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
