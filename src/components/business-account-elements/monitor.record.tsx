'use client'

import outlined from "@material-tailwind/react/theme/components/timeline/timelineIconColors/outlined";
import { EditOff, Edit, DateRangeSharp } from "@mui/icons-material";
import { Button, IconButton, Input } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Image from "next/image";

import { useState, useEffect } from "react";

interface MonitorRecordProps {
    invidualRecord: {
        contents: {
            recordName: string,
            iconName: string,           //edit, arrow, date
            comment: string,
            important: boolean,
        }[],
    }
}

export const MonitorRecord: React.FC<MonitorRecordProps> = (props) => {
    const [editable, setEditable] = useState<boolean[]>([]);

    const handleEdit = (key: number) => {
        const disabled = !editable[key];
        setEditable({ ...editable, [key]: disabled });
        console.log(editable[key] + ":" + key);
    }

    useEffect(() => {
        {
            props.invidualRecord.contents.map((content, key) => (
                editable[key] = false
            ))
        }
    }, []);

    useEffect(() => {

    }, [editable]);
    return (
        <>
            <div className="flex flex-col w-full justify-center content-center items-center text-gray-600">
                <div className="flex flex-col w-[95%]">
                    {props.invidualRecord.contents.map((content, key) => (
                        <>
                            <div className="flex flex-row mt-14 justify-end">
                                <div className="w-full " key={key} >
                                    {content.recordName}
                                    {
                                        content.important && 
                                        <img src="/monitor/i-star.svg" alt="" className="inline-block mt-[-0.8rem] ml-2 w-3 h-3"/>
                                    }
                                </div>
                                {
                                    content.iconName === "edit" &&
                                    <IconButton size="small" color="primary" className="" onClick={(e) => { handleEdit(key); }}>
                                        {editable[key] && <EditOff />}
                                        {!editable[key] && <Edit />}
                                    </IconButton>
                                }
                                {
                                    content.iconName === "arrow" &&
                                    <IconButton size="small"  color="primary">
                                        <ArrowDown2 />
                                    </IconButton>
                                }
                                {
                                    content.iconName === "date" &&
                                    <IconButton size="small" >
                                        <DateRangeSharp color="primary" />
                                    </IconButton>
                                }
                            </div>
                            { content.comment !== "" &&
                                <div className="flex text-xs text-red-400">{content.comment}</div>
                            }
                        </>
                    ))}
                </div>
                <div className="flex flex-row w-full gap-6 justify-end">
                <div className="flex w-32 my-6">
                    <Button variant="outlined" color="success">SUBMIT</Button>
                </div>
                <div className="flex w-32 my-6">
                    <Button variant="outlined" color="secondary">CANCEL</Button>
                </div>
                </div>
            </div>
        </>
    )
}