"use client"
// @ts-ignore
import useForm from "new-react-use-form";
import { Typography, Input, Button, Select } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEventHandler } from "react";
import { useMutation } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import { handleFormError } from "@/utils/error";

const { Option } = Select;

export const ApplicantDetailsForm = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const Form = useForm({
    application_id: searchParams.get("id"),
    firstName: "",
    lastName: "",
    creditScore: "",
    dob: "",
    ssn: "",
    addressLine1: "",
    addressLine2: null,
    city: "",
    state: "",
    zipCode: "",
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.IBusinessFundingApplicantDetails,
    Error,
    Calls.IRequest.IBusinessFundingApplicantDetails
  >({
    mutationFn: (variables) =>
      ApiCalls.Module.three.ApplicantDetails(variables),
    onSuccess: (res) => {
      router.push(
        `/leads/business-funding/loan-details?id=${searchParams.get("id")}`
      );
    },
    onError: (e) => handleFormError(e as any, Form),
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(Form.data());
  };

  return (
    <form onSubmit={onSubmit} className={"p-[16px] w-full h-full"}>
      <Typography.Paragraph className={"px-[16px] text-center text-[22px]"}>
        Please fill all Applicant Details in the required field and one of our
        agents will contact you within 24 hours
      </Typography.Paragraph>

      <div className={"flex flex-col gap-11 mt-12 justify-between"}>
        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Input
            required={true}
            value={Form.firstName}
            onChange={(e) => {
              Form.set("firstName", e.target.value);
              Form.errors.clear("firstName");
            }}
            color={"red"}
            addonBefore="First Name"
            placeholder="Enter First Name"
            type="text"
          />
          <Input
            required={true}
            value={Form.lastName}
            onChange={(e) => {
              Form.set("lastName", e.target.value);
              Form.errors.clear("lastName");
            }}
           
            color={"red"}
            addonBefore="Last Name"
            placeholder="Enter Last Name"
            type="text"
          />
        </div>
        
        <Input
          required={true}
          value={Form.creditScore}
          onChange={(e) => {
            Form.set("creditScore", e.target.value);
            Form.errors.clear("creditScore");
          }}
         
          color={"red"}
          addonBefore="Approx Credit Score"
          placeholder="Enter Approx Credit Score"
          type="text"
        />
        
        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Input
            required={true}
            value={Form.dob}
            onChange={(e) => {
              Form.set("dob", e.target.value);
              Form.errors.clear("dob");
            }}
          
            color={"red"}
            addonBefore="Date of Birth"
            placeholder="Enter Date Of Birth"
            type="date"
          />
          <Input
            required={true}
            value={Form.ssn}
            onChange={(e) => {
              Form.set("ssn", e.target.value);
              Form.errors.clear("ssn");
            }}
           
            color={"red"}
            addonBefore="SSN"
            placeholder="Enter SSN"
            type="text"
          />
        </div>

        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Input
            required={true}
            value={Form.addressLine1}
            onChange={(e) => {
              Form.set("addressLine1", e.target.value);
              Form.errors.clear("addressLine1");
            }}
           
            color={"red"}
            addonBefore="Address Line 1"
            placeholder="Enter Address Line 1"
            type="text"
          />
          <Input
            value={Form.addressLine2}
            onChange={(e) => {
              Form.set("addressLine2", e.target.value);
              Form.errors.clear("addressLine2");
            }}
         
            color={"red"}
            addonBefore="Address Line 2"
            placeholder="Enter Address Line 2"
            type="text"
          />
        </div>

        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Input
            required={true}
            value={Form.city}
            onChange={(e) => {
              Form.set("city", e.target.value);
              Form.errors.clear("city");
            }}
            color={"red"}
            addonBefore="City"
            placeholder="Enter City"
            type="text"
          />
          <Select
            onChange={(e) => {
              Form.set("state", e);
              Form.errors.clear("state");
            }}
            
          
            placeholder="Select State"
          >
            {[
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "Florida",
              "Georgia",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming",
            ].map((value, index) => (
              <Option key={index} value={value.toLowerCase()}>
                {value}
              </Option>
            ))}
          </Select>
        </div>
        
        <Input
          required={true}
          value={Form.zipCode}
          onChange={(e) => {
            Form.set("zipCode", e.target.value);
            Form.errors.clear("zipCode");
          }}
        
          color={"red"}
          addonBefore="Zip Code"
          placeholder="Enter Zip Code"
          type="text"
        />

      </div>

      <Button type="primary" htmlType="submit" className="mt-6 w-full bg-red-500" loading={isPending}>
        Next
      </Button>

      <Button onClick={() => router.back()} className="mt-6 w-full border-red-500 text-red-500" type="default">
        Cancel
      </Button>
    </form>
  );
};

