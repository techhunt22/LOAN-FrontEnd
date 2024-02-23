import { Button } from "@mui/material"
import { DownloadCard } from "./dwonload.card"
import { MonitorRecord } from "./monitor.record"
import React from "react";
import Link from "next/link";

const monitorRecord = {
    contents: [
        {
            recordName: "Enter Trade Account",
            iconName: "arrow",           //edit, arrow, date
            comment: "",
            important: true,
        },
        {
            recordName: "Enter Date Applied",
            iconName: "date",           //edit, arrow, date
            comment: "",
            important: true,
        },
        {
            recordName: "Enter DAte For Payment",
            iconName: "date",           //edit, arrow, date
            comment: "Date Of First Payment(Or Date First Payment Is Due)",
            important: true,
        },
        {
            recordName: "Enter Approved Amount",
            iconName: "",           //edit, arrow, date
            comment: "",
            important: true,
        },
        {
            recordName: "Personal Guarantee",
            iconName: "arrow",           //edit, arrow, date
            comment: "",
            important: true,
        },
    ],
}

interface MonitorFooterProps {
    url: string;
}

export const MonitorFooter : React.FC<MonitorFooterProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-full justify-center">
                <div className="flex flex-row w-full justify-center">
                    <div className="flex w-[55%] px-6">
                        <MonitorRecord invidualRecord={monitorRecord} />
                    </div>
                    <div className="flex flex-col w-[45%] pr-6 justify-center">
                        <p className="text-gray-500 ml-4">Once you have at least 3 of the accounts above reporting, upload your credit report using the file uploader below:</p>
                        <DownloadCard />
                        <p className="text-blue-300 ml-4 mt-6">I HAVE 3 TRADE ACCOUNT PAYMENTS THAT ARE REPORTING TO THE BUSINESS CREDIT BUREAUS.</p>

                        {/* save buttong */}
                        <div className="flex w-full justify-center mt-4">
                            <button className="flex bg-gradient-to-r from-blue-400 to-blue-300 text-white text-lg px-10 py-2 rounded-3xl">SAVE</button>
                        </div>
                    </div>

                </div>
                <Link href={"/step7/page1-min"}><p className="flex w-full text-red-400 underline mt-4 justify-center mb-3">Not sure? Click To View Business Credit Reports</p></Link>
                <div className="flex w-full justify-center">
                    <div className="flex w-72 mt-10">
                    <Button variant="outlined" href={props.url} className="px-6 py-4 outline outline-1 outline-gray-200 rounded-3xl text-4xl text-gray-300 w-[40rem]">CONTINUE TO NEXT STEP</Button>
                    </div>
                </div>
            </div>
        </>
    )
}