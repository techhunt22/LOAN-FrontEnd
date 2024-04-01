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
import { BlogCardLeft, BlogMultiCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";
import { staticId } from "@/components/const/cookies";

const headerContent = {
  step: "Step 1",
  title: "Fundability Foundation",
  subTitle: "SET UP BUSINESS PHONE NO",
};

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/phone-img.png",
  content: "BUSINESS PHONE NUMBER",
};

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
          name: "Phone",
        },
      ],
    },
    {
      title: "Phone Sevice Provider",
      icon: "",
      contents: [
        {
          recordName: "Evoiced",
          iconName: "edit",
          name: "PSP",
        },
      ],
    },
    {
      title: "Fax Number",
      icon: "",
      contents: [
        {
          recordName: "(654)-477-7888",
          iconName: "edit",
          name: "Fax",
        },
      ],
    },
  ],
};

const contentBlogCardLeft = {
  picture: "/business-account/amico.png",
  title: "What Are Your Business Phone Priorities?",
  content1:
    "Does your business have a phone number? Creditors prefer to see actual business phone numbers opposed to personal cell phones or residential phones. It’s important to also list your business phone number in the National 411 directory. Keep in mind that unfortunately cell phone numbers can’t be listed in the National 411 directory.",
  content2:
    ". We can list your Business Phone number if you choose one of our recommendations below. The companies we recommend allow us to list your number in the National 411 directory. All you have to do is choose Yes below and fill in the information requested.",
  content3:
    ". If you want to use a different Business Phone provider that is completely your choice. You can contact your Business Phone provider to confirm that the number can be listed in the National 411 directory and if there is any specific criteria to do so. If they allow a third party to list it on your behalf please choose Yes below and fill in the information requested.",
  content4:
    ". Some vendors will check to make sure your Business Phone number is listed in the National 411 directory and if not they might choose to decline you for the account. We want you to have the best success so that is why we wanted to inform you of all the above information.",
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
  url: "/step1/build-business-email",
  preUrl: "/step1/build-business-ein",
};

export const BuildBusinessPhone = () => {
  const invidualRecord: any = records.invidualRecords.map(
    (record) => record.contents
  );
  const title: any = records.invidualRecords.map((item: any) => item.title);
  const names: any = invidualRecord.map((item: any, key: any) => item[0].name);
  const [values, setValues] = useState<number | string | undefined | any>({
    Phone: "",
    PSP: "",
    Fax: "",
  });
  const buildBusinessPhone = "BuildBusinessPhone";
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessPhone
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessPhone(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  console.log(values, "values");

  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const data = await mutateAsync({
      phoneNumber: values.Phone,
      serviceProvider: values.PSP,
      faxNumber: values.Fax,
      id: staticId,
    });
    return data;
  };

  const informationResourceProps = "Information Resource";
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl  gap-6 business-main business-page-rightsection-mobileview ">
        <div className="flex flex-col w-[76%] justify-start mt-6  business-page-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            style={{
              boxShadow: "2px 4px 12px 0px #a3a3a324",
            }}
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white "
          >
            <ArrowLineText
              type="flex flex-col w-[auto] pt-6 text-center text-gray-700"
              content="DO YOU HAVE A BUSINESS PHONE NUMBER?"
            />
            {/* Vidio card */}
            <VideoCard videoContent={videoConten} />

            {/* Bolg section */}
            <div className="flex w-[100%]  bg-white business-page-banner-bg-color my-12">
              <BlogMultiCardLeft content={contentBlogCardLeft} />
            </div>

            {/* edit your details */}
            <div className="flex flex-col w-[85%]">
              <EditableContentRecord
                records={records}
                value={values}
                handleOnChange={handleInputChange}
                name={names}
                buildBusinessPhone={buildBusinessPhone}
              />
            </div>

            {/* save buttong */}
            <div className="flex w-[85%] business-save-btn  mt-4 mb-8 justify-end">
              <Button
                placeholder="save the address"
                color="success"
                onClick={handleOnSave}
              >
                {isPending ? <Spinner /> : "SAVE"}
              </Button>
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-2">
              <ImportantInformation
                information={informationResuorce}
                informationResourceProps={informationResourceProps}
              />
            </div>

            {/* Website cards */}
            <div className="flex flex-row w-full flex-wrap justify-center business-page-grid-gap-22   mt-12">
              <div className=" justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/RingCentral.svg"
                />
              </div>

              <div className=" justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/Vonage svg.svg"
                />
              </div>
              <div className="flex justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/Phone.svg"
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
