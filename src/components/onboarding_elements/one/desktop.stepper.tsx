"use client";
import React from "react";
import { Step, Stepper, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
interface steps {
  label: string;
}
export const DesktopStepper = () => {
  const { ActiveTab, SetActiveTab } = usePCR();

  const dataArray: steps[] = [
    {
      label: "  Enter sign up details",
    },
    {
      label: "  Pull report",
    },
    {
      label: " Schedule a meeting",
    },
    {
      label: " Select Packages",
    },
    {
      label: "Upload verification IDs",
    },
    {
      label: `Positive account & Freeze account`,
    },
  ];
  return (
    <div className={" flex flex-row items-center justify-center w-full h-auto"}>
      <div className=" rounded-l-xl flex flex-row justify-center items-center w-[70%] bg-[#137FFF] h-[225px] py-4 pl-32 main-stepper">
        <Stepper
          className={"-mt-6"}
          lineClassName=" h-2 bg-white"
          activeLineClassName="h-2 bg-white"
          activeStep={ActiveTab}
        >
          {dataArray.map((item, index) => (
            <Step
              key={index}
              className={
                "text-gray-500 bg-blue-gray-50 h-[32px] w-[32px] ring-[20px] ring-white"
              }
              activeClassName={"bg-[#137FFF]  ring-[20px] ring-white"}
              completedClassName="bg-[#137FFF] ring-[20px] ring-white"
            >
              <CheckIcon className={"w-[24px] h-[24px]"} />
              <div className="absolute -bottom-[5.5rem] w-max text-center h-[50px]">
                <Typography
                  variant="small"
                  color={ActiveTab === index ? "white" : "white"}
                  className="stepper-text text-wrap w-[150px]"
                >
                  {item.label}
                </Typography>
              </div>
            </Step>
          ))}
        </Stepper>
      </div>
      <div
        style={{
          clipPath: "polygon(-2% 0%, 46% 0%, 100% 52%, 46% 100%, -2% 100%)",
          borderRadius: "0 12px 12px 0",
        }}
        className=" rounded-r-xl  flex flex-row justify-center items-center w-[4%] bg-[#137FFF] h-[225px] py-4 px-20"
      ></div>
    </div>
  );
};
