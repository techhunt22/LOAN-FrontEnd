import React from "react";

interface ArrowLineTextProps {
  type: string;
  content: string;
}

export const ArrowLineText: React.FC<ArrowLineTextProps> = (props) => (
  <>
    <div className={props.type}>
      <div className="px-5 text-base font-semibold text-gray-700">
        {props.content}
      </div>
      <div className="flex flex-row w-full h-max">
        <div className="flex h-[2px] w-full bg-[#1380FF] mt-1"></div>
        <div className="flex w-[9px] h-[9px] ml-[-3] bg-[#1380FF] rotate-45 "></div>
      </div>
    </div>
  </>
);
