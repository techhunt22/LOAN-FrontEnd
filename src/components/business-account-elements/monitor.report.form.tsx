import { SquaresPlusIcon } from "@heroicons/react/24/solid";
import { Setting } from "iconsax-react";
import Link from "next/link";

interface DataInterface {
    name: string,
    url: string,
}
const fundability: DataInterface[] = [
    { name: "Business name", url: "/step1/build-business-credit" },
    { name: "Business Address", url: "/step1/build-business-address" },
    { name: "Business Entity", url: "/step1/build-business-entry" },
    { name: "EIN#", url: "/step1/build-business-ein" },
    { name: "Business Phone # & 411 Listing", url: "/step1/build-business-phone" },
    { name: "Website & Email", url: "/step1/build-business-email" },
    { name: "Business License", url: "/step1/build-business-license" },
    { name: "Business Bank Account", url: "/step1/build-business-bank" },
    { name: "Bussiness Merchant Account", url: "/step1/build-business-merchant" },
    { name: "Wrap", url: "/step1/build-business-wrap" },
];

const establish: DataInterface[] = [
    { name: "Dun & Bradstreet", url: "/step2/dun-bradstreet" },
    { name: "Business Experian", url: "/step2/experian" },
    { name: "Business Equifax", url: "/step2/equifax" },
    { name: "Reporting - How to fix businesss credit", url: "/step2/wrap" },
];

const start = [];

const monitor: DataInterface[] = [
    { name: "Credit Monitoring", url: "/step4/credit", },
    { name: "Monitor Dun & Bradstreet", url: "/step4/dun-bradstreet" },
    { name: "Monitor Business Experian", url: "/step4/experian" },
    { name: "Monitor Business Equifax", url: "/step4/equifax" },
    { name: "Request Lexis Nexis report", url: "/step4/lexis-nexis" },
    { name: "Request Chex Systems Report", url: "/step4/chex" },
];

const bulding = [];

const advance = [];

const revolving = [];


export const MonitorReportForm = () => (
    <>
        <div className="flex flex-col w-full h-max px-6 justify-start border-2 border-blue-600 rounded-2xl pt-8">
            {/* step 1 */}
            <p className="text-blue-500">Step1</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-md my-2"><h3>Fundability Foundation</h3></div>
                <div className="flex w-full justify-end"><SquaresPlusIcon className="h-8 text-blue-600" /></div>
            </div>
            {fundability.map((report) => (
                <div className="flex flex-row my-4 pl-2 w-[30rem] w-full">
                    <Setting className="text-blue-600" />
                    <Link className="ml-4 text-gray-400" href={report.url}>{report.name}</Link>
                </div>
            ))}
            {/* step 2 */}
            <p className="text-blue-500">Step2</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-md my-2"><h3>Establish Business Reports</h3></div>
                <div className="flex w-full justify-end"><SquaresPlusIcon className="h-8 text-blue-600" /></div>
            </div>
            {establish.map((report) => (
                <div className="flex flex-row my-4 pl-2 w-[30rem] w-full">
                    <Setting className="text-blue-600" />
                    <Link className="ml-4 text-gray-400" href={report.url}>{report.name}</Link>
                </div>
            ))}
            {/* step 3 */}
            <p className="text-blue-500">Step3</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-md my-2"><h3>Start Building: </h3></div>
                <div className="flex w-full justify-end"><div className="h-8 text-blue-600"><Link href={"/step7/page1-min"}>Tier1</Link> </div></div>
            </div>
            {/* step 4 */}
            <p className="text-blue-500">Step4</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-md my-2"><h3>Monitor Business Reports</h3></div>
                <div className="flex w-full justify-end"><SquaresPlusIcon className="h-8 text-blue-600" /></div>
            </div>
            {monitor.map((report) => (
                <div className="flex flex-row my-4 pl-2 w-full">
                    <Setting className="text-blue-600" />
                    <Link className="ml-4 text-gray-400" href={report.url}>{report.name}</Link>
                </div>
            ))}
            {/* step 5 */}
            <p className="text-blue-500">Step5</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-md my-2"><h3>Building Credit: </h3></div>
                <div className="flex w-full justify-end"><div className="h-8 text-blue-600"><Link href={"/step7/page2-full"}>Tier2 </Link> </div></div>
            </div>
            {/* step 6 */}
            <p className="text-blue-500">Step4</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-md my-2"><h3>Advance Building: </h3></div>
                <div className="flex w-full justify-end"><div className="h-8 text-blue-600"><Link href={"/step7/page3-full"}>Tier3</Link> </div></div>
            </div>
            {/* step 7 */}
            <p className="text-blue-500">Step7</p>
            <div className="flex flex-row w-full pl-2">
                <div className="flex w-[30rem] justify-start text-md my-2"><h3>Revolving Account: </h3></div>
                <div className="flex w-full justify-end"><div className="h-8 text-blue-600"><Link href={"/step7/page4-full"}>Tier4 </Link> </div></div>
            </div>
        </div>
    </>
)

