"use client";

import { EditOff, Edit, DateRangeSharp } from "@mui/icons-material";
import { IconButton, Input, colors } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Image from "next/image";

import { useState, useEffect } from "react";

interface EditableContentRecordInvidualProps {
  invidualRecord: {
    image?: any;
    title: string;
    subTitle?: string;
    icon: string;
    contents: {
      recordName: string;
      iconName: string; //edit, arrow, date
      name?: any;
    }[];
  };
  handleOnChange?: any;
  value?: number | string | undefined | any;
  name?: string;
  buildBusinessPhone?: any;
  options?: any;
  handleChange?: any;
  selectedValue?: any;
  buildBusinessEntry?: any;
  handleDateChange?: any;
  selectedDate?: any;
}

export const EditableContentRecordInvidual: React.FC<
  EditableContentRecordInvidualProps
> = (props) => {
  const {
    value,
    handleOnChange,
    name,
    buildBusinessPhone,
    options,
    handleChange,
    selectedValue,
    buildBusinessEntry,
    handleDateChange,
    selectedDate,
  } = props;
  const [editable, setEditable] = useState<boolean[]>([]);

  const handleEdit = (key: number) => {
    const disabled = !editable[key];
    setEditable({ ...editable, [key]: disabled });
    console.log(editable[key] + ":" + key);
  };

  useEffect(() => {
    {
      props.invidualRecord.contents.map(
        (content, key) => (editable[key] = false)
      );
    }
  }, []);

  useEffect(() => {}, [editable]);
  console.log(props.invidualRecord.contents);
  return (
    <>
      <div className="flex flex-col w-full justify-center content-center items-center ">
        {props.invidualRecord.title !== "" && (
          <div className="flex flex-row w-full justify-start mt-4 ">
            {props.invidualRecord.icon !== "" && (
              <Image
                src={props.invidualRecord.icon}
                alt=""
                width={30}
                height={30}
              />
            )}
            <div className="flex w-full text-blue-400 text-lg ml-2 items-center">
              <img
                src={props.invidualRecord.image}
                alt=""
                style={{ marginRight: "5px" }}
              />
              {props.invidualRecord.title}
              <span style={{ color: "#A7A9AC", fontSize: "11px" }}>
                {props.invidualRecord.subTitle}
              </span>
            </div>
          </div>
        )}
        <div className="flex flex-col w-[95%]">
          {props.invidualRecord.contents?.map((content, key) => {
            console.log(content);

            return (
              <div className="flex flex-row mt-6 justify-end  business-page-from-box relative ">
                {content.iconName !== "arrow" &&
                  content.iconName !== "date" && (
                    <input
                      className="w-full business-page-from-input "
                      placeholder={content.recordName}
                      value={
                        value !== undefined ? value[value[key]?.name] : value
                      }
                      key={key}
                      disabled={!editable[key]}
                      onChange={handleOnChange}
                      name={buildBusinessPhone ? content.name : name?.[key]}
                    />
                  )}
                {content.iconName === "arrow" && (
                  <select
                    style={{ border: "1px solid #e8e5e5" }}
                    className={`w-full business-page-from-input ${
                      !editable[key] ? "text-[black] bg-[#F8F8F8] " : ""
                    } appearance-none`}
                    key={key}
                    // placeholder={content.recordName}
                    disabled={!editable[key]}
                    onChange={(event) => handleChange(event, key)}
                    value={
                      buildBusinessEntry
                        ? selectedValue
                        : selectedValue && selectedValue[key]
                    }
                  >
                    {options?.map((option: any, index: any) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
                {content.iconName === "date" && (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      className={`w-full business-page-from-input ${
                        !editable[key] ? "text-[black] bg-[#F8F8F8] " : ""
                      } appearance-none`}
                      disabled={!editable[key]}
                      sx={{
                        border: editable[key]
                          ? "1px solid black !important"
                          : 0,
                        "& :hover:not(.Mui-disabled, .Mui-error):before": {
                          borderBottom: "0px !important",
                        },
                        "& :before": {
                          borderBottom: "0px !important",
                        },
                        "& :after": {
                          borderBottom: "0px !important",
                        },
                        "& input": {
                          width: "100%",
                          padding: "35px 41px",
                          border: "1px solid #EFEFEF",
                          borderRadius: "13px",
                        },
                        "& input::placeholder": {
                          fontSize: "16px",
                          fontWeight: 400,
                          listStyle: "18px",
                          color: "#333333",
                        },
                        "& .Mui-disabled": {
                          color: "black",
                        },
                      }}
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </LocalizationProvider>
                )}
                {content.iconName === "edit" && (
                  <IconButton
                    size="small"
                    className=""
                    onClick={(e) => {
                      handleEdit(key);
                    }}
                  >
                    {editable[key] && (
                      <>
                        <img src="/edit-off-icon.png" alt="" />
                      </>
                    )}
                    {!editable[key] && (
                      <>
                        <img src="/edit-icon.png" alt="" />
                      </>
                    )}
                  </IconButton>
                )}
                {content.iconName === "arrow" && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(key);
                    }}
                  >
                    <>
                      <img src="/select-icon.png" alt="" />
                    </>
                  </IconButton>
                )}
                {content.iconName === "date" && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(key);
                    }}
                  >
                    <>
                      <img src="/calendar-icon.png" alt="" />
                    </>
                  </IconButton>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
