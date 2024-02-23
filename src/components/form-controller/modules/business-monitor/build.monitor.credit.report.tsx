"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { Input, InputAdornment } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import { ArrowDown2 } from "iconsax-react";

const headerContent = {
    step: "STPE4",
    title: "Moniter Business Reports",
    subTitle: "MONITORING CREDIT",
}

const arrowLineCotent = "MONITOR BUSINESS CREDIT BUREAUS";

const footerContent = {
    content: "Return To Business Credit Builder",
    previous: true,
    next: true,
    url: "/step4/dun-bradstreet",
    preUrl: "/step2/wrap",
}
interface Option {
    label: string;
}
export const BuildMonitorCreditReport = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 pr-6 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-[80%] text-center text-gray-700" content={arrowLineCotent} />

                        <div className="flex flex-row gap-6 justify-center content-center items-center mt-16">
                            <Input id="input-with-icon-adornment"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <ArrowDown2 />
                                    </InputAdornment>
                                }
                            ></Input>
                            <button className="flex px-4 py-2 bg-blue-400 text-white text-lg rounded-3xl">GET NEW REPORT</button>
                        </div>

                        <div className="flex flex-row w-full mt-6">
                            <p className="flex justify-start w-[30rem] text-blue-400 text-2xl">Business Credit Reports</p>
                            <p className="flex justify-end w-full text-blue-400 text-xl">Advantage Pro</p>
                        </div>
                        <div className="flex flex-col rounded-lg justify-center content-center items-center w-full bg-dark-tremor-brand-subtle">
                            <div className="flex flex-row w-full text-white my-2">
                                <p className="flex justify-start w-[30rem] pl-2 text-lg">TAYLOR GLOBAL INVEST INC</p>
                                <p className="flex justify-end w-full text-md pr-12">Experian BIN# 532356052</p>
                            </div>
                            <div className="flex flex-row w-full text-white my-2">
                                <p className="flex justify-start w-[60rem] pl-2 text-md">1501 VOORHIES AVE APT 8K, BROOKLYN, NY 11235</p>
                                <p className="flex justify-end w-full text-md pr-12">DUNS# 096582573</p>
                            </div>
                            <div className="flex h-[2px] w-[98%] bg-white"></div>
                            <div className="flex flex-row w-full text-white my-2">
                                <p className="flex justify-end w-full text-md  text-gray-800 pr-[-6]">Ordered: 8/21/2023 2:04:23 PM(UTC)</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3 rounded-lg justify-center content-center items-center w-full bg-dark-tremor-brand-subtle">
                            <div className="flex flex-row w-full text-white my-2">
                                <p className="flex justify-start w-[30rem] pl-2 text-lg">Analytics</p>
                            </div>
                        </div>

                        <div className="flex flex-row w-full gap-2 mt-1">
                            <div className="flex flex-col w-[40%] h-full border pl-2 border-dark-tremor-brand-subtle rounded-lg">
                                <p className="flex text-lg text-dark-tremor-brand-subtle">Credit Logic Score</p>
                                <p className="flex text-md text-dark-tremor-brand-subtle mt-36">Key Score Factors</p>
                                <ul className="ml-4 order-3">
                                    <li>NO DBT'S AVAILABLE</li>
                                </ul>
                            </div>
                            <div className="flex flex-col w-[60%]">
                                <div className="flex flex-col w-full h-max border pl-1 border-dark-tremor-brand-subtle rounded-lg">
                                    <p className="flex text-lg text-dark-tremor-brand-subtle">Data Depth Score</p>
                                    <p>Data Depth Score is based on:</p>
                                    <ul className="ml-4 order-3">
                                        <li>Years in business</li>
                                        <li>Number of trade lines</li>
                                        <li>Number of bureaus pulled</li>
                                    </ul>
                                    <p>Indicates the volume of predictive data availavle on a company. Scale of 0~9 where 9 indicates greates levelof predictive data</p>
                                </div>
                                <div className="flex flex-col w-full mt-2 h-max border pl-1 border-dark-tremor-brand-subtle rounded-lg">
                                    <div className="flex flex-row w-full">
                                        <p className="flex text-lg w-full text-dark-tremor-brand-subtle">Business Failure Assessment</p>
                                        <p className="flex text-lg w-[10rem] text-red-400">High Risk</p>
                                    </div>
                                    <p className="text-xs">Assessment is based on a combination of the Credit Logic Score and DAta Depth</p>
                                </div>
                                <div className="flex flex-col w-full mt-2 h-max border pl-1 border-dark-tremor-brand-subtle rounded-lg">
                                    <div className="flex flex-row w-full">
                                        <p className="flex text-lg w-full text-dark-tremor-brand-subtle">MultiMax Credit Cuideline</p>
                                        <p className="flex text-lg w-[10rem] text-gray-400">N/A</p>
                                    </div>
                                    <p className="text-xs">This calcultaion is based on high credit amounts in crcent trade payment history.</p>
                                    <p className="text-xs">Your final decision must be based upon your company's own business policies</p>
                                    <div className="flex flex-row w-full">
                                        <p className="flex text-lg w-[30rem] text-dark-tremor-brand-subtle">Highest Non-Financial</p>
                                        <p className="flex text-lg w-full text-gray-400">N/A</p>
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <p className="flex text-lg w-[30rem] text-dark-tremor-brand-subtle">Line:</p>
                                        <p className="flex text-lg w-full text-gray-400"></p>
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <p className="flex text-lg w-[30rem] text-dark-tremor-brand-subtle">Highest Financial</p>
                                        <p className="flex text-lg w-full text-gray-400">N/A</p>
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <p className="flex text-lg w-[30rem] text-dark-tremor-brand-subtle">Line:</p>
                                        <p className="flex text-lg w-full text-gray-400"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-3 rounded-t-lg justify-center content-center items-center w-full bg-dark-tremor-brand-subtle">
                            <div className="flex flex-row w-full text-white my-2">
                                <p className="flex justify-start w-[30rem] pl-2 text-lg">Payment Summary</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col w-full h-max rounded-sm mt-2 border-l border-t border-r border-dark-tremor-brand-subtle">
                            <p className="flex ml-[45%] mt-2 text-dark-tremor-brand-subtle">Average Days Beyoun Terms <span className="ml-16 text-gray-600">N/A</span></p>
                            <p className="flex ml-[55%] mt-2 text-gray-500 mb-6">No Monthly History Found</p>
                        </div>

                        <div className="flex w-full justify-center items-center content-center">
                            <button className="flex px-3 py-2 outline outline-gray-100 mt-6 mb-24 text-gray-300 rounded-3xl">View full report</button>
                        </div>

                        {/* footer  */}
                        <SubFormFooter content={footerContent} />
                    </div>
                </div>
                <div className="flex w-[24%]">
                    <MonitorReportForm />
                </div>

            </div>

        </>
    );
};
