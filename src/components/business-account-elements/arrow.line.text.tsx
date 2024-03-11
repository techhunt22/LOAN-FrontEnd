import React from "react";

interface ArrowLineTextProps {
  type: string;
  content: string;
}

export const ArrowLineText: React.FC<ArrowLineTextProps> = (props) => (
  <>
    <div className={props.type}>
      <div className=" text-base text-justify mx-auto max-w-580 font-semibold business-page-text-color-black">
        {props.content}
      </div>
      <div className="flex flex-row w-full h-max">
        <div className="flex h-1 w-full bg-blue-800 mt-1"></div>
        <div className="flex w-3 h-3 ml-[-3] bg-blue-800 rotate-45 "></div>
      </div>
    </div>
  </>
);
