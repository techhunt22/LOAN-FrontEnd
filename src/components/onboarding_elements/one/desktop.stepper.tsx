"use client";
import React from "react";
import { Steps, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";

const { Step } = Steps;

interface StepItem {
  label: string;
}

export const DesktopStepper = () => {
  const { ActiveTab } = usePCR();

  // const dataArray: StepItem[] = [
  //     { label: 'Enter sign up details' },
  //     { label: 'Pull report' },
  //     { label: 'Schedule a meeting' },
  //     { label: 'Select Packages' },
  //     { label: 'Upload verification IDs' },
  //     { label: 'Positive account & Freeze account' },
  // ];

  const steps = [
    {
      title: "Enter sign up details",
      description: "",
    },
    {
      title: "Pull report",
      description: "",
    },
    {
      title: "Schedule a meeting",
      description: "",
    },
    {
      title: "Select Packages",
      description: "",
    },
    {
      title: "Upload verification IDs",
      description: "",
    },
    {
      title: "Positive account & Freeze account",
      description: "",
    },
  ];

  return (
    // <div className={" flex flex-row items-center justify-center w-full h-auto text-white"}>
    // <div className=" rounded-l-xl flex flex-row justify-center items-center w-[70%] bg-[#137FFF] h-[225px] py-4 pl-32 main-stepper text-white">
    <div className="w-full h-full  flex  flex-row   items-center justify-center">
      <div className="w-[70%] bg-[#137FFF] h-[225px] flex items-center justify-center">
        <Steps current={1} className="text-white">
          {steps.map((item) => (
            <Step
              key={item.title}
              className="text-white"
              title={item.title}
              description={item.description}
            />
          ))}
        </Steps>
      </div>
      <div
        style={{
          clipPath: "polygon(-2% 0%, 46% 0%, 100% 52%, 46% 100%, -2% 100%)",
          borderRadius: "0 12px 12px 0",
        }}
        className=" rounded-r-xl  flex flex-row justify-center items-center w-[4%] bg-[#137FFF] h-[225px] py-4 px-20"
      />
    </div>
  );
};
