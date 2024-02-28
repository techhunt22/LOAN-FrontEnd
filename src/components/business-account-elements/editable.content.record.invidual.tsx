'use client'

import { EditOff, Edit, DateRangeSharp } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Image from "next/image";

import { useState, useEffect } from "react";

interface EditableContentRecordInvidualProps {
    invidualRecord?: {
        name?: string,
        value?: string,
        label?: string
    }
    onChangeInput: (e?:any, name?:string) => void
}

export const EditableContentRecordInvidual: React.FC<EditableContentRecordInvidualProps> = (props) => {
    const [editable, setEditable] = useState<boolean>(false);

    const handleEdit = () => {
        const disabled = !editable;
        setEditable( disabled );
    }
    const { onChangeInput, invidualRecord } = props;
    const { name, value, label } = invidualRecord;
    return (
        <>
            <div className="flex flex-col w-full justify-center content-center items-center">
                <div className="flex flex-col w-[95%]">
                    <div className="flex flex-row mt-6 justify-end">

                        <Input className="w-full "
                               onChange={(e) => onChangeInput?.(e.target.value, name)}
                            defaultValue={value}
                            disabled={!editable}
                            name={name}
                            placeholder={label}
                    />
                        <IconButton size="small" className="" onClick={(e) => { handleEdit(); }}>
                            {editable && <EditOff />}
                            {!editable && <Edit />}
                        </IconButton>
                    </div>
                </div>


            </div>
        </>
    )
}