import { Input } from "@mui/material";
import React from "react";

interface SelectCardProps {
    content: {
        title: string,
        contents1: string,
        contents2: string,
    }

}

export const SelectCard: React.FC<SelectCardProps> = (props) => {
    return (
        <>
            <div className="flex w-full justify-center content-center items-center text-center text-blue-400">
                {/* Please indicate your response(Yes or No) for both of the following questionsbefore proceeding. */}
                {props.content.title}
            </div>
            <div className="flex w-full flex-row">
                <div className="flex ml-4 justify-start w-max">
                    <div className="flex flex-col  w-64 h-52 justify-center content-center ">
                        <div className="flex w-full pt-6 px-4 justify-center content-center h-32">{props.content.contents1}</div>
                        <div className="flex flex-row w-full px-8">
                            <div className="flex w-[3rem] ml-4 justify-start">
                                <Input type="radio" name="group1" />
                            </div>
                            <div className="flex ml-4">Yes</div>
                            <div className="flex w-full mr-4 justify-end">
                                <Input type="radio" name="group1" />
                            </div>
                            <div className="flex w-max mr-8 justify-end">No</div>
                        </div>
                    </div>
                </div>
                <div className="flex mr-4 justify-end w-full">
                    <div className="flex flex-col w-64 h-52 justify-center content-center ">
                        <div className="flex w-full pt-6 px-4 justify-center content-center h-32">{props.content.contents2}</div>
                        <div className="flex flex-row w-full px-8">
                            <div className="flex w-[3rem] ml-4 justify-start">
                                <Input type="radio" name="group1" />
                            </div>
                            <div className="flex ml-4">Yes</div>
                            <div className="flex w-full mr-4 justify-end">
                                <Input type="radio" name="group1" />
                            </div>
                            <div className="flex w-max mr-8 justify-end">No</div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

interface SelectCardInvidualProps {
    content: {
        contents1: string,
    }
}

export const SelectCardInvidual: React.FC<SelectCardInvidualProps> = (props) => {
    return (
        <>
            <div className="flex flex-col  w-64 h-52 justify-center content-center ">
                <div className="flex w-full pt-6 px-4 justify-center content-center h-32">{props.content.contents1}</div>
                <div className="flex flex-row w-full px-8">
                    <div className="flex w-[3rem] ml-4 justify-start">
                        <Input type="radio" name="group1" />
                    </div>
                    <div className="flex ml-4">Yes</div>
                    <div className="flex w-full mr-4 justify-end">
                        <Input type="radio" name="group1" />
                    </div>
                    <div className="flex w-max mr-8 justify-end">No</div>
                </div>
            </div>
        </>
    )
}