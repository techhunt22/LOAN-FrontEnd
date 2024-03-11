"use client";
import { CheckIcon } from "@heroicons/react/24/outline";

import React from "react";
import { BulletPoints } from "@/components/packages/modules/one/package/childs/bulletPoints";
interface NormalProps {
  imgUrl?: string;
  name?: string;
  fullPrice?: any;
  emiPrice?: any;
  validity?: number;
  downPaymentAmount?: number;
  intervalCount?: number;
  bulletPoints?: {
    value: string;
  }[];
  onClick?: () => void;
  Green?: any;
  Blue?: any;
}
export const Normal: React.FC<NormalProps> = (props) => {
  const numericFullValue = parseFloat(props?.fullPrice);
  const numericEmiValue = parseFloat(props?.emiPrice);
  
  return (
    <>
      <div
        className={
          "shadow-tremor-card ring-1 ring-gray-100 rounded-[16px] w-[400px] h-[800px] relative"
        }
      >
        <div className={"relative h-fit min-w-full"}>
          <img
            className={"rounded-t-[16px] object-fill w-[400px]"}
            src={props?.imgUrl || "/module/one/red.png"}
          />
          <div className={" py-3 px-5 absolute top-0"}>
            <h3 className={" uppercase text-[20px] text-white font-bold "}>
              {props?.name || "Credit Ascend Activator"}
            </h3>
            <div className={"text-white flex flex-row items-center"}>
              <h2 className={" align-top font-extrabold text-[50px]"}>
                ${numericFullValue || 999}
              </h2>
              <p className={"ml-3 text-base font-medium w-[185px]"}>
                One time payment saves you{" "}
                <span className={"font-bold"}>
                  $
                  {/* { Number(props?.fullPrice) - Number(props?.emiPrice) * Number(props?.validity)} */}
                  {Number(props?.downPaymentAmount) +
                    Number(numericEmiValue) * Number(props?.validity) -
                    Number(numericFullValue)}
                </span>
              </p>
            </div>
            <div
              className={
                "font-bold rounded-md bg-white w-[81px] h-[48px] flex flex-row items-center justify-center p-2 text-[36px]"
              }
            >
              OR
            </div>
            <h4 className={"mt-2 text-[18px] font-bold  text-white w-[197px]"}>
              {props?.intervalCount} payments
              of ${numericEmiValue || 299}/
              <span className={"font-normal text-sm"}>Month</span>
            </h4>
          </div>
        </div>
        <div
          className={
            "border-gray-300 mt-1.5 pb-3.5 p-2 flex flex-col gap-2 items-center justify-between h-[60%]"
          }
        >
          {/* <p className={"text-gray-700 text-sm"}>
          Validity {props?.validity || 3} months
        </p> */}
          <div
            className={
              "my-4 space-y-3.5 pl-3 pr-4 py-2 w-full h-auto overflow-auto"
            }
          >
            <BulletPoints bulletPoints={props.bulletPoints} />
          </div>
          <button
            style={{
              borderRadius: "20px 5px",
            }}
            onClick={props.onClick}
            className={
              "hover:bg-gray-600 hover:text-white tracking-tight font-medium border-[1px] border-gray-400 rounded-full w-[80%] p-2 bg-gray-50 text-[#737373] uppercase font-semibold   "
            }
          >
            Choose Plan
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            height: "40px",
            width: " 400px",
            background: `${
              (props.Blue && "linear-gradient(to right, #88BFFF, #5083C1)") ||
              (props.Green && "linear-gradient(to right, #A3E1DD, #2EC4B6)")
            }`,
            top: "50%",
            right: "-55.5%",
            transform: "rotate(90deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Duration 60-90 days
        </div>
      </div>
    </>
  );
};
