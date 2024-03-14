"use client";

import outlined from "@material-tailwind/react/theme/components/timeline/timelineIconColors/outlined";
import { EditOff, Edit, DateRangeSharp } from "@mui/icons-material";
import { Button, IconButton, Input } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { EditableContentRecordInvidual } from "./editable.content.record.invidual";
interface MonitorRecordProps {
  records: {
    invidualRecords: {
      title: string;
      icon: string;
      contents: {
        recordName: string;
        iconName: string; //edit, arrow, date
        comment: string;
        important: boolean;
      }[];
    }[];
  };
  handleOnChange?: any;
  value?: number | string | undefined | any;
  name?: string | any;
  buildBusinessPhone?: any;
  options?: any;
  handleChange?: any;
  selectedValue?: any;
  buildBusinessEntry?: any;
  handleDateChange?: any;
  selectedDate?: any;
  state?: any;
  selectedDateTwo?: any;
  handleDateChangeTwo?: any;
  mutateAsync?: any;
}
export const MonitorRecord: React.FC<MonitorRecordProps> = (props) => {
  const [editable, setEditable] = useState<boolean[]>([]);

  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const data = await props.mutateAsync({
      tradeAccount: props.selectedValue[0],
      appliedDate: props.selectedDate,
      paymentDate: props.selectedDateTwo,
      approvedAmount: props.value,
      personalGrant: props.selectedValue[4],
    });
    return data;
  };

  //   const handleEdit = (key: number) => {
  //     const disabled = !editable[key];
  //     setEditable({ ...editable, [key]: disabled });
  //     console.log(editable[key] + ":" + key);
  //   };

  //   useEffect(() => {
  //     {
  //       props.invidualRecord.contents.map(
  //         (content, key) => (editable[key] = false)
  //       );
  //     }
  //   }, []);

  //   useEffect(() => {}, [editable]);
  return (
    <>
      <div className="flex flex-col w-full justify-center content-center items-center text-gray-600">
        <div className="flex flex-col w-[95%]">
          {props.records.invidualRecords.map((invidualRecord, index) => {
            return (
              <EditableContentRecordInvidual
                invidualRecord={invidualRecord}
                handleOnChange={props.handleOnChange}
                value={props.value}
                name={props.name}
                buildBusinessPhone={props.buildBusinessPhone}
                buildBusinessEntry={props.buildBusinessEntry}
                selectedValue={
                  props.buildBusinessEntry
                    ? props.selectedValue[index]?.contents
                    : props.selectedValue
                }
                options={props.options}
                handleChange={
                  props.buildBusinessEntry
                    ? (event: any) => props.handleChange(event, index)
                    : props.handleChange
                }
                handleDateChange={
                  props.state === true
                    ? props.handleDateChange
                    : props.handleDateChangeTwo
                }
                selectedDate={props.selectedDate}
              />
            );
          })}
        </div>
        <div className="flex flex-row w-full gap-6 justify-end">
          <div className="flex w-32 mt-6 mb-4">
            <Button variant="outlined" color="success" onClick={handleOnSave}>
              SUBMIT
            </Button>
          </div>
          <div className="flex w-32 mt-6 mb-4">
            <Button variant="outlined" color="secondary">
              CANCEL
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
