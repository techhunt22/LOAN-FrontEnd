'use client'

import { EditOff, Edit, DateRangeSharp } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Image from "next/image";

import { useState, useEffect } from "react";

interface EditableContentRecordInvidualProps {
    invidualRecord: {
        title: string,
        icon: string,
        contents: {
            recordName: string,
            iconName: string,           //edit, arrow, date
        }[],
    }
}

export const EditableContentRecordInvidual: React.FC<EditableContentRecordInvidualProps> = (props) => {
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
            <div className="flex flex-col w-full justify-center content-center items-center">
                {props.invidualRecord.title !== "" &&
                    <div className="flex flex-row w-full justify-start mt-4">
                        {props.invidualRecord.icon !== "" &&
                            <Image src={props.invidualRecord.icon} alt="" width={30} height={30} />
                        }
                        <div className="flex w-full text-blue-400 text-lg ml-2">{props.invidualRecord.title}</div>
                    </div>
                }
                <div className="flex flex-col w-[95%]">
                    {props.invidualRecord.contents.map((content, key) => (
                        <div className="flex flex-row mt-6 justify-end">
                            <input className="w-full " value={content.recordName} key={key} disabled={!editable[key]} />
                            {
                                content.iconName === "edit" &&
                                <IconButton size="small" className="" onClick={(e) => { handleEdit(key); }}>
                                    {editable[key] && <EditOff />}
                                    {!editable[key] && <Edit />}
                                </IconButton>
                            }
                            {
                                content.iconName === "arrow" &&
                                <IconButton size="small" >
                                    <ArrowDown2 />
                                </IconButton>
                            }
                            {
                                content.iconName === "date" &&
                                <IconButton size="small" >
                                    <DateRangeSharp />
                                </IconButton>
                            }
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}