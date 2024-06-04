"use client";
import React from "react";
import { Steps } from 'antd';
import { CheckIcon } from "@heroicons/react/24/outline";
import { useAC } from "@/context/business-credit/add-client/personal.credit.repair.context";
interface steps {
  label: string;
  desc: string;
  imgURL: string;
}
export const DesktopAddClientStepper = () => {
  const { ActiveTab, SetActiveTab } = useAC();

  const dataArray: steps[] = [
    {
      label: "  Business Credit Builder",
      desc: "  (It requires...)",
      imgURL: "/business-account/step1.svg",
    },
    {
      label: "  Finance Blue Print(Only)",
      desc: "  (It requires...)",
      imgURL: "/business-account/step2.svg",
    },
  ];
  return (
    <div className={"flex flex-row items-center justify-center w-full h-auto"}>
    <div className="rounded-l-md flex flex-row justify-center items-center w-[80%] bg-[#ffffff] h-[100px] py-4 pl-20">
      <Steps current={ActiveTab} className="-mt-5" progressDot>
        {dataArray.map((item, index) => (
          <Steps.Step
            key={index}
            title={item.label}
            description={item.desc}
            icon={<img src={item.imgURL} alt="image" />}
          />
        ))}
      </Steps>
    </div>
    <div className="flex flex-row justify-center items-center w-[2%] bg-[#ffffff] h-[100px] py-4 px-20"></div>
  </div>
  );
};
