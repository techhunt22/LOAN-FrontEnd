"use client";
import { Form, Input, Button, Typography, Select } from "antd";
import React from "react";
// @ts-ignore
import useForm from "new-react-use-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import { handleFormError } from "@/utils/error";

const { Option } = Select;

export const BusinessDetailsForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.BusinessFundingBusinessDetails,
    Error,
    Calls.IRequest.BusinessFundingBusinessDetails
  >({
    mutationFn: (variables) => ApiCalls.Module.three.BusinessDetails(variables),
    onSuccess: (res) => {
      router.push(
        `/leads/business-funding/applicant-details?id=${res.data.application_id}`
      );
    },
    onError: (e) => handleFormError(e as any, form),
  });

  const onFinish = async (values: any) => {
    await mutateAsync(values);
  };

  return (
    <Form onFinish={onFinish} form={form} className={"p-[16px] w-full h-full "}>
      <Typography.Paragraph className={"px-[20px]  text-[20px] text-center"} >
        Please fill all Business Details in the required field and one of our
        agents will contact you within 24 hours
      </Typography.Paragraph>
      <div className={"flex flex-col gap-11 mt-12 justify-between"}>
        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Form.Item
            className="w-[50%]"
            name="businessLegalName"
            rules={[{ required: true, message: 'Please input your business legal name!' }]}
          >
            <Input placeholder="Business Legal Name"    className="w-full" />
          </Form.Item>
          <Form.Item
            className="w-[50%]"
            name="dba"
            rules={[{ required: true, message: 'Please input your DBA!' }]}
          >
            <Input placeholder="DBA (Doing business as?)"   className="w-full" />
          </Form.Item>
        </div>
        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Form.Item
            className="w-[50%]"
            name="entityType"
            rules={[{ required: true, message: 'Please select your entity type!' }]}
          >
            <Select placeholder="Choose Entity Type" 
              className="w-full"
            >
              {["Corporation", "LLC", "Sole Proprietor", "Other"].map((value, index) => (
                <Option key={index} value={value.toLowerCase()}>{value}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            className="w-[50%]"
            name="startDate"
            rules={[{ required: true, message: 'Please select your business start date!' }]}
          >
            <Input type="date" placeholder="Business Start Date" />
          </Form.Item>
        </div>
        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Form.Item
            className="w-full"
            name="taxId"
            rules={[{ required: true, message: 'Please input your tax ID!' }]}
          >
            <Input placeholder="Tax ID"    className="w-full"/>
          </Form.Item>
          <Form.Item
            className="w-[50%]"
            name="businessType"
            rules={[{ required: true, message: 'Please select your business type!' }]}
          >
            <Select placeholder="Business Type"   className="w-full">
              {[
                "Technology and Information Technology (IT)",
                "Finance and Banking",
                "Healthcare and Pharmaceuticals",
                "Manufacturing",
                "Retail",
                "Energy",
                "Agriculture",
                "Telecommunications",
                "Entertainment and Media",
                "Transportation and Logistics",
                "Real Estate",
                "Consulting and Professional Services",
                "Other",
              ].map((value, index) => (
                <Option key={index} value={value.toLowerCase()}>{value}</Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Form.Item
            className="w-[50%]"
            name="email"
            rules={[{ required: true, message: 'Please input your email address!', type: 'email' }]}
          >
            <Input placeholder="Email" type="email" className="w-full"/>
          </Form.Item>
          <Form.Item
            className="w-[50%]"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input placeholder="Phone" type="tel" className="w-full" />
          </Form.Item>
        </div>
        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Form.Item
            className="w-[50%]"
            name="addressLine1"
            rules={[{ required: true, message: 'Please input your address line 1!' }]}
          >
            <Input placeholder="Address Line 1" className="w-full" />
          </Form.Item>
          <Form.Item
            className="w-[50%]"
            name="addressLine2"
            rules={[{ required: false }]}
          >
            <Input placeholder="Address Line 2" className="w-full"/>
          </Form.Item>
        </div>
        <div className={"flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "}>
          <Form.Item
            className="w-[33%]"
            name="city"
            rules={[{ required: true, message: 'Please input your city!' }]}
          >
            <Input placeholder="City" className="w-full"/>
          </Form.Item>
          <Form.Item
          
            name="state"
            className="w-[33%]"
            rules={[{ required: true, message: 'Please select your state!' }]}
          >
            <Select placeholder="State" className="w-full">
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
                <Option key={index} value={value.toLowerCase()}>{value}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            className="w-[33%]"
            name="zipCode"
            rules={[{ required: true, message: 'Please input your zip code!' }]}
          >
            <Input placeholder="Zip Code" className="w-full"/>
          </Form.Item>
        </div>
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-[100%] bg-red-500">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};

