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
              <h2
                style={{
                  display: "flex",
                  lineHeight: "normal",
                  alignItems: "flex-start",
                }}
                className={"align-top font-extrabold text-[50px] py-4"}
              >
                <span
                  style={{
                    fontSize: "28px",
                    paddingRight: "5px",
                    paddingTop: "5px",
                  }}
                >
                  $
                </span>
                {numericFullValue || 999}
              </h2>
              <p className={"ml-3 text-base font-medium w-[185px]"}>
                One time payment saves you{" "} $200
                {/* <span className={"font-bold text-[18px]"}>
                  $
                  {Number(props?.downPaymentAmount) +
                    Number(numericEmiValue) * Number(props?.validity) -
                    Number(numericFullValue)}
                </span> */}
              </p>
            </div>
            <div
              className={`font-bold rounded-xl bg-white w-[81px] h-[49px] flex flex-row items-center justify-center p-2 text-[36px]  pt-[14px] ${
                props.Green ? "text-[#2FACB0]" : "text-[#D12650]"
              }`}
            >
              OR
            </div>
            <h4
              className={"font-normal text-[18px]  text-white w-[197px] mt-2"}
            >
              {/* {props?.intervalCount} payments of{" "} */}
              Monthly payment of{" "}
              <span className={"font-bold"}>${numericEmiValue || 299}</span>
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
              borderRadius: "35px 10px",
              fontSize: "20px",
              fontWeight: "600",
            }}
            onClick={props.onClick}
            className={
              "hover:bg-gray-600 hover:text-white h-[59px] w-[245px]  tracking-tight font-medium border-[1px] border-gray-400 rounded-full w-[80%] p-2 bg-gray-50 text-[#737373] uppercase font-semibold   "
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
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          Duration 60-90 days
        </div>
      </div>
    </>
  );
};
