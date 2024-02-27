"use client";

import { EditOff, Edit, DateRangeSharp } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
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
}

export const EditableContentRecordInvidual: React.FC<
  EditableContentRecordInvidualProps
> = (props) => {
  const { value, handleOnChange, name, buildBusinessPhone } = props;
  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   debugger;
  //   if (setValue) {
  //     setValue(e.target.value);
  //   }
  // };

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
          {props.invidualRecord.contents.map((content, key) => {
            console.log(content);

            return (
              <div className="flex flex-row mt-6 justify-end">
                <input
                  className="w-full "
                  placeholder={content.recordName}
                  value={value !== undefined ? value[value[key]?.name] : value}
                  key={key}
                  disabled={!editable[key]}
                  onChange={handleOnChange}
                  name={buildBusinessPhone ? content.name : name?.[key]}
                />
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
                  <IconButton size="small">
                    <ArrowDown2 />
                  </IconButton>
                )}
                {content.iconName === "date" && (
                  <IconButton size="small">
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
