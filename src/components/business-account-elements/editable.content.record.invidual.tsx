"use client";

import { EditOff, Edit, DateRangeSharp } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Image from "next/image";

import { useState, useEffect } from "react";

interface EditableContentRecordInvidualProps {
  invidualRecord: {
    title: string;
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
      <div className="flex flex-col w-full justify-center content-center items-center">
        {props.invidualRecord.title !== "" && (
          <div className="flex flex-row w-full justify-start mt-4">
            {props.invidualRecord.icon !== "" && (
              <Image
                src={props.invidualRecord.icon}
                alt=""
                width={30}
                height={30}
              />
            )}
            <div className="flex w-full text-blue-400 text-lg ml-2">
              {props.invidualRecord.title}
            </div>
          </div>
        )}
        <div className="flex flex-col w-[95%]">
          {props.invidualRecord.contents?.map((content, key) => {
            console.log(content);

            return (
              <div className="flex flex-row mt-6 justify-end">
                {content.iconName !== "arrow" &&
                  content.iconName !== "date" && (
                    <input
                      className="w-full "
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
                    className={`w-full ${
                      !editable[key] ? "text-gray-100  bg-gray-100" : ""
                    } appearance-none`}
                    key={key}
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
                      className={`w-full ${
                        !editable[key] ? "text-gray-100  bg-gray-100" : ""
                      } appearance-none`}
                      disabled={!editable[key]}
                      sx={{
                        border: editable[key]
                          ? "1px solid black !important"
                          : 0,
                        "& .mui-1mxettm-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before":
                          {
                            borderBottom: "0px !important",
                          },
                        "& .mui-1mxettm-MuiInputBase-root-MuiInput-root:before":
                          {
                            borderBottom: "0px !important",
                          },
                        "& .mui-1mxettm-MuiInputBase-root-MuiInput-root:after":
                          {
                            borderBottom: "0px !important",
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
                    {editable[key] && <EditOff />}
                    {!editable[key] && <Edit />}
                  </IconButton>
                )}
                {content.iconName === "arrow" && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(key);
                    }}
                  >
                    <ArrowDown2 />
                  </IconButton>
                )}
                {content.iconName === "date" && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(key);
                    }}
                  >
                    <DateRangeSharp />
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
