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
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const headerContent = {
  step: "Step 1",
  title: "Fundability Foundation",
  subTitle: "SAVE YOUR BUSINESS ADDRESS",
};

const videoConten = {
  title: "Watch Video Transcript:",
  videoUrl: "/business-account/address.png",
  content: "WHY A BUSINESS ADDRESS",
};
const initialValues = [
  { name: "company" },
  { name: "floor" },
  { name: "street" },
  { name: "city" },
  { name: "pinCode" },
];
const records = {
  title: "Your Details:",
  method: "You Can Edit it",
  invidualRecords: [
    {
      title: "",
      icon: "",
      contents: [
        {
          recordName: "1900 Albany Ave",
          iconName: "edit",
        },
        {
          recordName: "1st Floor",
          iconName: "edit",
        },
        {
          recordName: "Brooklyn",
          iconName: "edit",
        },
        {
          recordName: "New Mexico",
          iconName: "arrow",
        },
        {
          recordName: "11210",
          iconName: "edit",
        },
      ],
    },
  ],
};
const recordsType = {
  title: "Business Address Type:",
  method: "",
  invidualRecords: [
    {
      title: "",
      icon: "",
      contents: [
        {
          recordName: "Home",
          iconName: "arrow",
        },
      ],
    },
  ],
};

const contentBlogCardLeft = {
  picture: "/business-account/business-address.png",
  title: "ESTABLISH A BUSINESS ADDRESS",
  content:
    "It’s important for a business to have a business address.In order to have a strong business foundation, your business should use a physical business address. Most lenders prefer that you have a business address but, you can use your residential address.",
  subContent:
    "What’s most important is that your business address shows the same on ALL business records.",
  content3:
    "Do NOT use any type of PO Box for your business address. Many lenders see this as a higher risk business address.",
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
  url: "/step1/build-business-entry",
  preUrl: "/step1/build-business-credit",
};

export const BuildBusinessAddress = () => {
  const [values, setValues] = useState<number | string | undefined | any>(
    initialValues
  );
  const [selectedValue, setSelectedValue] = useState<any>("");
  const options = ["Option 1", "Option 2", "Option 3"]; // Example array of options

  const handleChange = (event: any, index: any) => {
    debugger;
    const { value } = event.target;
    setSelectedValue((prevSelectedValues: any) => {
      const updatedSelectedValues = [...prevSelectedValues];
      updatedSelectedValues[index] = value;
      return updatedSelectedValues;
    });
    console.log("Selected value for index", index, value);
  };
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    debugger;
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.Business,
    Error,
    Calls.IRequest.ModulesBusinessAddress
  >({
    mutationFn: async (variables) =>
      await ApiCalls.Module.businessAddress(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
  });
  console.log(values, "values");
  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const data = await mutateAsync({
      buildingAddress: values.company,
      street: values.street,
      cityName: values.floor,
      zipCode: values.pinCode,
      state: selectedValue[3],
      businessAddressType: selectedValue[0],
      policy: false,
    });
    return data;
  };
  return (
    <>
      <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 bg-[#f9f9f9] gap-6 rounded-2xl business-main">
        <div className="flex flex-col w-[76%] justify-start mt-6  business-page-rightsection-inner-mobileview">
          <SubHeader content={headerContent} />
          <div
            style={{
              boxShadow: "2px 4px 12px 0px #a3a3a324",
            }}
            className="flex flex-col w-full p-9 justify-center items-center content-center mt-6 bg-white business-page-namesection-mobileview"
          >
            <ArrowLineText
              type="flex flex-col w-[auto]  pt-6 text-center text-gray-700"
              content="DO YOU HAVE A BUSINESS ADDRESS?"
            />
            {/* Vidio card */}
            <VideoCard videoContent={videoConten} />

            {/* edit your details */}
            <div className="flex flex-col w-[85%]">
              <EditableContentRecord
                records={records}
                value={values}
                handleOnChange={handleInputChange}
                name={initialValues.map((input) => input.name)}
                selectedValue={selectedValue}
                options={options}
                handleChange={handleChange}
              />
              <EditableContentRecord
                records={recordsType}
                selectedValue={selectedValue}
                options={options}
                handleChange={handleChange}
              />
            </div>
            {/* acknowledge the following */}
            <div className="flex flex-col w-[75%]">
              <div className="flex  text-blue-gray-600 text-base font-bold	business-page-checkbbox-heading-color">
                <p>I Acknwledge The Following:</p>
              </div>
              {/* <div className="flex flex-row mt-4 text-gray-400">
                <CheckBox color="primary" />
                <div className="flex flex-col ml-2">
                  <p>
                    The business shouldn't use any type of PO Box as the
                    physical business address. Lenders typically view this type
                    of address as higher risk.
                  </p>
                  <p>
                    The business shouldn't use any type of PO Box as the
                    physical business address.
                  </p>
                  <p>
                    The business shouldn't use any type of PO Box as the
                    physical business address.{" "}
                  </p>
                </div>
</div> */}
              <form className="business-page-checkbox-form">
                <div className="flex items-center mt-10-sm">
                  <input type="checkbox" name="" id="" className="mb-5" />
                  <label>
                    The business shouldn't use any type of PO Box as the
                    physical business address. Lenders typically view this
                    typeof address as higher risk.
                  </label>
                </div>
                <div className="flex items-center mt-10-sm">
                  <input type="checkbox" name="" id="" className="mb-5" />
                  <label>
                    My business address is the main business address. The same
                    business address should be used on ALL business records.
                  </label>
                </div>
                <div className="flex items-center mt-10-sm">
                  <input type="checkbox" name="" id="" />
                  <label>
                    A business can use a residential address as the business
                    address
                  </label>
                </div>
              </form>
            </div>

            {/* save buttong */}
            <div className="flex  w-80  business-save-btn  mt-10">
              <Button
                placeholder="save the address"
                color="success"
                onClick={handleOnSave}
              >
                SAVE
              </Button>
            </div>
            {/* Bolg section */}
            <div className="flex w-[90%] my-12 business-page-banner-bg-color">
              <BlogCardLeft content={contentBlogCardLeft} />
            </div>

            {/* Resuouces importante */}
            <div className="flex w-full my-2">
              <ImportantInformation information={informationResuorce} />
            </div>

            {/* Website cards */}
            <div className="flex flex-row flex-wrap justify-center business-page-grid-gap-22  mt-12">
              <div className="flex  justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/Phone.svg"
                />
              </div>
              <div className="flex  justify-center">
                <GotoWebsiteThreeCard
                  content="Varies"
                  icon="/business-account/RingCentral.svg"
                />
              </div>
              <div className="flex  justify-center">
                <GotoWebsiteThreeCard
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
