import { Input } from "@mui/material";
import React from "react";

interface SelectCardProps {
  content: {
    title: string;
    contents1: string;
    contents2: string;
  };
  handleInput?: any;
  name?: any;
  bsEntry?: any;
  bsCard?: any;
  handleInputCard?: any;
}

export const SelectCard: React.FC<SelectCardProps> = (props) => {
  return (
    <>
      <div className="flex w-full justify-center content-center items-center text-center text-blue-400">
        {/* Please indicate your response(Yes or No) for both of the following questionsbefore proceeding. */}
        {props.content.title}
      </div>
      <div className="flex w-full flex-row flex-wrap justify-center mt-10  gap-10 ">
        <div className="flex justify-start ">
          <div className="flex flex-col  w-64 h-52 justify-center content-center  business-entry-page-indicatesection  ">
            <div className="flex w-full pt-6 px-4 justify-center content-center h-32">
              {props.content.contents1}
            </div>
            <div className="flex flex-row w-full px-8">
              <div className="flex w-[3rem] ml-4 justify-start">
                <Input
className="business-page-select-input"
                  type="radio"
                  id="option1"
                  name="firstOption"
                  onChange={() => props.handleInput?.("1", props.name)}
                />
              </div>
              <div className="flex ml-4">Yes</div>
              <div className="flex w-full mr-4 justify-end">
                <Input
className="business-page-select-input"
                  type="radio"
                  id="option2"
                  name="firstOption"
                  onChange={() => props.handleInput?.("0", props.name)}
                />
              </div>
              <div className="flex w-max mr-8 justify-end">No</div>
            </div>
          </div>
        </div>
        <div className="flex  justify-end ">
          <div className="flex flex-col w-64 h-52 justify-center content-center   business-entry-page-indicatesection">
            <div className="flex w-full pt-6 px-4 justify-center content-center h-32">
              {props.content.contents2}
            </div>
            <div className="flex flex-row w-full px-8">
              <div className="flex w-[3rem] ml-4 justify-start">
                <Input
className="business-page-select-input"
                  type="radio"
                  id="option3"
                  name="secondOption"
                  onChange={() => props.handleInputCard?.("1", props.name)}
                />
              </div>
              <div className="flex ml-4">Yes</div>
              <div className="flex w-full mr-4 justify-end">
                <Input
className="business-page-select-input"
                  type="radio"
                  name="secondOption"
                  onChange={() => props.handleInputCard?.("0", props.name)}
                />
              </div>
              <div className="flex w-max mr-8 justify-end">No</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface SelectCardInvidualProps {
  content: {
    contents1: string;
  };
  handleInput?: any;
  name?: any;
  bsReport?: any;
  bsCard?: any;
  handleInputCard?: any;
}

export const SelectCardInvidual: React.FC<SelectCardInvidualProps> = (
  props
) => {
  return (
    <>
      <div className="flex flex-col  w-64 h-52 justify-center content-center  business-entry-page-indicatesection ">
        <div className="flex w-full pt-6 px-4 justify-center content-center h-32">
          {props.content.contents1}
        </div>
        <div className="flex flex-row w-full px-8">
          <div className="flex w-[3rem] ml-4 justify-start">
            <Input
              type="radio"
              name="group1"
              onChange={() => props.handleInput?.("1", props.name)}
            />
          </div>
          <div className="flex ml-4">Yes</div>
          <div className="flex w-full mr-4 justify-end">
            <Input
              type="radio"
              name="group1"
              onChange={() => props.handleInput?.("0", props.name)}
            />
          </div>
          <div className="flex w-max mr-8 justify-end">No</div>
        </div>
      </div>
    </>
  );
};
