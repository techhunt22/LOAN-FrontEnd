import { Button } from "@mui/material";
import { DownloadCard } from "./dwonload.card";
import { MonitorRecord } from "./monitor.record";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const monitorRecord = {
  invidualRecords: [
    {
      title: "",
      icon: "",
      contents: [
        {
          recordName: "Enter Trade Account",
          iconName: "arrow", //edit, arrow, date
          comment: "",
          important: true,
        },
        {
          recordName: "Enter Date Applied",
          iconName: "date", //edit, arrow, date
          comment: "",
          important: true,
        },
        {
          recordName: "Enter DAte For Payment",
          iconName: "date", //edit, arrow, date
          comment: "Date Of First Payment(Or Date First Payment Is Due)",
          important: true,
        },
        {
          recordName: "Enter Approved Amount",
          iconName: "edit", //edit, arrow, date
          comment: "",
          important: true,
        },
        {
          recordName: "Personal Guarantee",
          iconName: "arrow", //edit, arrow, date
          comment: "",
          important: true,
        },
      ],
    },
  ],
};

interface MonitorFooterProps {
  url: string;
  image?: any;
  form?: any;
  fileName?: string;
  mutateAsync?: any;
}

export const MonitorFooter: React.FC<MonitorFooterProps> = (props) => {
  const [value, setValue] = useState<number | string | undefined | any>();

  const [selectedValue, setSelectedValue] = useState<any>("");
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedDateOne, setSelectedDateOne] = useState<any>(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState<any>(null);
  const [state, setState] = useState<any>(true);
  const [fileUploaded, setFileUploaded] = useState(false);
  useEffect(() => {
    debugger;
    setState(selectedDateOne === null ? true : false);
  }, [selectedDateOne]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleChange = (event: any, index: any) => {
    const { value } = event.target;
    setSelectedValue((prevSelectedValues: any) => {
      const updatedSelectedValues = [...prevSelectedValues];
      updatedSelectedValues[index] = value;
      return updatedSelectedValues;
    });
    console.log("Selected value for index", index, value);
  };
  const handleDateChange = (newValue: any) => {
    debugger;
    setSelectedDateOne(newValue); // Update the state with the selected date
    console.log("Selected date:", newValue); // Log the selected date
  };
  const handleDateChangeTwo = (newValue: any) => {
    debugger;
    setSelectedDateTwo(newValue); // Update the state with the selected date
    console.log("Selected date:", newValue); // Log the selected date
  };
  const handleFileChange = (event: any) => {
    debugger;
    const fileList = event.target.files;
    const file = fileList[0];
    props.form.set(props.fileName, file);
    setFileUploaded(true);
  };
  const handleImage = () => {
    const fileInput = document.getElementById("myFile");

    if (fileInput) {
      fileInput.click(); // Trigger file input click
    }
  };
  const handleOnSave = async (e: any) => {
    e.preventDefault();
    const formData = await props.image(props.form.data());
    return formData;
  };
  return (
    <>
      <div className="flex flex-col w-full justify-center ">
        <div
          style={{ border: "1px solid #D3D3D3" }}
          className="flex flex-row w-full justify-center py-8 tier-monitor-footer"
        >
          <div
            style={{ marginTop: "25px", borderRight: "1px solid #D3D3D3" }}
            className="flex w-[55%] px-6 tier-monitor-record"
          >
            <MonitorRecord
              records={monitorRecord}
              handleOnChange={handleOnChange}
              selectedValue={selectedValue}
              options={options}
              handleChange={handleChange}
              value={value}
              handleDateChange={handleDateChange}
              handleDateChangeTwo={handleDateChangeTwo}
              selectedDate={selectedDateOne}
              selectedDateTwo={selectedDateTwo}
              state={state}
              mutateAsync={props.mutateAsync}
            />
          </div>
          <div
            className="flex flex-col w-[45%] px-8 justify-center 
            items-center tier-monitor-download-card"
          >
            <p className="text-gray-500 ml-4">
              Once you have at least 3 of the accounts above reporting, upload
              your credit report using the file uploader below:
            </p>
            <DownloadCard
              handleFileChange={handleFileChange}
              handleImage={handleImage}
              fileUploaded={fileUploaded}
            />
            <p className="text-blue-300 ml-4 mt-6">
              I HAVE 3 TRADE ACCOUNT PAYMENTS THAT ARE REPORTING TO THE BUSINESS
              CREDIT BUREAUS.
            </p>

            {/* save buttong */}
            <div className="flex w-full justify-center mt-4">
              <button
                className="flex bg-gradient-to-r from-blue-400 to-blue-300 text-white text-lg px-10 py-2 rounded-3xl"
                onClick={handleOnSave}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
        <Link href={"/step7/page1-min"}>
          <p className="flex w-full text-red-400 underline mt-4 justify-center mb-3">
            Not sure? Click To View Business Credit Reports
          </p>
        </Link>
        <div className="flex w-full justify-center">
          <div className="flex w-72 mt-10">
            <Button
              variant="outlined"
              href={props.url}
              className="px-6 py-4 outline outline-1 outline-gray-200 rounded-3xl text-4xl text-gray-300 w-[40rem]"
            >
              CONTINUE TO NEXT STEP
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
