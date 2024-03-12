import { SquaresPlusIcon } from "@heroicons/react/24/solid";
import { Setting } from "iconsax-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface DataInterface {
  name: string;
  url: string;
  color: string;
}
const fundability: DataInterface[] = [
  {
    name: "Business name",
    url: "/step1/build-business-credit",
    color: "text-blue-500",
  },
  {
    name: "Business Address",
    url: "/step1/build-business-address",
    color: "text-blue-500",
  },
  {
    name: "Business Entity",
    url: "/step1/build-business-entry",
    color: "text-blue-500",
  },
  { name: "EIN#", url: "/step1/build-business-ein", color: "text-blue-500" },
  {
    name: "Business Phone # & 411 Listing",
    url: "/step1/build-business-phone",
    color: "text-blue-500",
  },
  {
    name: "Website & Email",
    url: "/step1/build-business-email",
    color: "text-blue-500",
  },
  {
    name: "Business License",
    url: "/step1/build-business-license",
    color: "text-blue-500",
  },
  {
    name: "Business Bank Account",
    url: "/step1/build-business-bank",
    color: "text-blue-500",
  },
  {
    name: "Bussiness Merchant Account",
    url: "/step1/build-business-merchant",
    color: "text-blue-500",
  },
  { name: "Wrap", url: "/step1/build-business-wrap", color: "text-blue-500" },
];

const establish: DataInterface[] = [
  {
    name: "Dun & Bradstreet",
    url: "/step2/dun-bradstreet",
    color: "text-blue-500",
  },
  { name: "Business Experian", url: "/step2/experian", color: "text-blue-500" },
  { name: "Business Equifax", url: "/step2/equifax", color: "text-blue-500" },
  {
    name: "Reporting - How to fix businesss credit",
    url: "/step2/wrap",
    color: "text-blue-500",
  },
];

const start = [];

const monitor: DataInterface[] = [
  { name: "Credit Monitoring", url: "/step4/credit", color: "text-blue-500" },
  {
    name: "Monitor Dun & Bradstreet",
    url: "/step4/dun-bradstreet",
    color: "text-blue-500",
  },
  {
    name: "Monitor Business Experian",
    url: "/step4/experian",
    color: "text-blue-500",
  },
  {
    name: "Monitor Business Equifax",
    url: "/step4/equifax",
    color: "text-blue-500",
  },
  {
    name: "Request Lexis Nexis report",
    url: "/step4/lexis-nexis",
    color: "text-blue-500",
  },
  {
    name: "Request Chex Systems Report",
    url: "/step4/chex",
    color: "text-blue-500",
  },
];

const bulding = [];

const advance = [];

const revolving = [];

export const MonitorReportForm = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [allUrl, setAllUrl] = useState<DataInterface[]>([]);
  const currentUrl = usePathname();

  useEffect(() => {
    const storedSelectedItem =
      localStorage.getItem("selectedItem") || currentUrl;
    if (storedSelectedItem) {
      setSelectedItem(storedSelectedItem);
    }
  }, []);

  useEffect(() => {
    const handlePopstate = () => {
      const matchingItem = fundability.find((item) => item.url === currentUrl);
      if (matchingItem) {
        setSelectedItem(matchingItem.url);
        localStorage.setItem("selectedItem", matchingItem.url); // Store URL in local storage
      } else {
        setSelectedItem(null);
        localStorage.removeItem("selectedItem"); // Remove from local storage if no match
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [currentUrl]);

  const handleItemClick = (name: string) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === name ? null : name
    );
    if (name) {
      localStorage.setItem("selectedItem", name); // Store name in local storage
    } else {
      localStorage.removeItem("selectedItem"); // Remove from local storage if name is null
    }
  };

  useEffect(() => {
    if (selectedItem || currentUrl) {
      localStorage.setItem("selectedItem", selectedItem || currentUrl);
    } else {
      localStorage.removeItem("selectedItem");
    }
  }, [selectedItem, currentUrl]);

  useEffect(() => {
    let updatedUrl: DataInterface[] = [];
    const findFundability = fundability.some((item) => item.url === currentUrl);
    const findEstablish = establish.some((item) => item.url === currentUrl);
    const findMonitor = monitor.some((item) => item.url === currentUrl);
    if (findFundability === true) {
      const index = fundability.findIndex((item) => item.url === currentUrl);
      const newArray = fundability.slice(0, index + 1);
      updatedUrl.push(...newArray);
    } else if (findEstablish === true) {
      const index = establish.findIndex((item) => item.url === currentUrl);
      updatedUrl.push(...fundability);
      const newArray = establish.slice(0, index + 1);
      updatedUrl.push(...newArray);
    } else if (findMonitor === true) {
      const index = monitor.findIndex((item) => item.url === currentUrl);
      updatedUrl.push(...fundability, ...establish);
      const newArray = monitor.slice(0, index + 1);
      updatedUrl.push(...newArray);
    }
    setAllUrl(updatedUrl);
  }, [currentUrl, selectedItem]);

  return (
    <>
      <div className="flex flex-col w-full h-max px-4 justify-start border-2 border-blue-600 rounded-2xl pt-8">
        {/* step 1 */}
        <p className="text-blue-500">Step1</p>
        <div className="flex flex-row items-center w-full pl-2">
          <div className="flex w-[45rem] text-2xl justify-start text-md my-2 business-page-text-color-black">
            <h3 className="text-xl font-semibold">Fundability Foundation</h3>
          </div>
          <div className="flex w-full justify-end h-12">
            <img
              src={"/step.png"}
              alt=""
              className="max-w-full"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          {fundability.map((report, index) => (
            <div
              className={
                "flex flex-row my-4 pl-2 w-[30rem] w-full business-page-text-color-gray   business-page-sidebar-border-bottom"
              }
              key={index}
              onClick={() => handleItemClick(report.url)}
            >
              {allUrl.some((item) => item.url === report.url) ? (
                <img src={"/stepactive.png"} alt="" className="h-[29px]" />
              ) : (
                <img
                  src={"/stepinactive.png"}
                  alt=""
                  // height={"29px !important"}
                  className="h-[29px]"
                />
              )}
              {/* <Setting className="text-blue-600" /> */}

              <Link href={report.url} className="ml-4">
                {report.name}
              </Link>
            </div>
          ))}
        </div>
        {/* step 2 */}
        <p className="text-blue-500">Step2</p>
        <div className="flex flex-row items-center w-full pl-2">
          <div className="flex w-[45rem] justify-start text-md my-2 business-page-text-color-black">
            <h3 className="text-xl font-semibold">
              Establish Business Reports
            </h3>
          </div>
          <div className="flex w-full justify-end h-12">
            {/* <SquaresPlusIcon className="h-8 text-blue-600" /> */}
            <img
              src={"/step.png"}
              alt=""
              className="max-w-full"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          {establish.map((report, index) => (
            <div
              className={
                "flex flex-row my-4 pl-2 w-[30rem] w-full business-page-text-color-gray business-page-sidebar-border-bottom"
              }
              key={index}
              onClick={() => handleItemClick(report.url)}
            >
              {allUrl.some((item) => item.url === report.url) ? (
                <img src={"/stepactive.png"} alt="" className="h-[29px]" />
              ) : (
                <img src={"/stepinactive.png"} alt="" className="h-[29px]" />
              )}
              {/* <Setting className="text-blue-600" /> */}

              <Link href={report.url} className="ml-4">
                {report.name}
              </Link>
            </div>
          ))}
        </div>
        {/* step 3 */}
        <p className="text-blue-500">Step3</p>
        <div className="flex flex-row items-center w-full pl-2">
          <div className="flex w-[45rem] justify-start text-md my-2 business-page-text-color-black">
            <h3 className="text-xl font-semibold">Start Building: </h3>
          </div>
          <div className="flex w-full justify-end">
            <div className="h-8 text-blue-600">
              <Link className="business-page-tier" href={"/step7/page1-min"}>
                Tier1
              </Link>{" "}
            </div>
          </div>
        </div>
        {/* step 4 */}
        <p className="text-blue-500">Step4</p>
        <div className="flex flex-row items-center w-full pl-2">
          <div className="flex w-[45rem] justify-start text-md my-2 business-page-text-color-black">
            <h3 className="text-xl font-semibold">Monitor Business Reports</h3>
          </div>
          <div className="flex w-full justify-end h-12">
            {/* <SquaresPlusIcon className="h-8 text-blue-600" /> */}
            <img
              src={"/step.png"}
              alt=""
              className="max-w-full"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          {monitor.map((report, index) => (
            <div
              className={
                "flex flex-row my-4 pl-2 w-[30rem] w-full business-page-text-color-gray business-page-sidebar-border-bottom"
              }
              key={index}
              onClick={() => handleItemClick(report.url)}
            >
              {allUrl.some((item) => item.url === report.url) ? (
                <img src={"/stepactive.png"} alt="" className="h-[29px]" />
              ) : (
                <img src={"/stepinactive.png"} alt="" className="h-[29px]" />
              )}
              {/* 
            <Setting className="text-blue-600" /> */}
              <Link href={report.url} className="ml-4">
                {report.name}
              </Link>
            </div>
          ))}
        </div>
        {/* step 5 */}
        <p className="text-blue-500">Step5</p>
        <div className="flex flex-row items-center w-full pl-2">
          <div className="flex w-[45rem] justify-start text-md my-2 business-page-text-color-black">
            <h3 className="text-xl font-semibold">Building Credit: </h3>
          </div>

          <div className="flex w-full justify-end">
            <div className="h-8 text-blue-600">
              <Link href={"/step7/page2-full"} className="business-page-tier">
                Tier2{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
        {/* step 6 */}
        <p className="text-blue-500">Step6</p>
        <div className="flex flex-row items-center w-full pl-2">
          <div className="flex w-[45rem] justify-start text-md my-2 business-page-text-color-black">
            <h3 className="text-xl font-semibold">Advance Building: </h3>
          </div>
          <div className="flex w-full justify-end">
            <div className="h-8 text-blue-600">
              <Link href={"/step7/page3-full"} className="business-page-tier">
                Tier3
              </Link>{" "}
            </div>
          </div>
        </div>
        {/* step 7 */}
        <p className="text-blue-500">Step7</p>
        <div className="flex flex-row items-center w-full pl-2">
          <div className="flex w-[48rem] justify-start text-md my-2 business-page-text-color-black">
            <h3 className="text-xl font-semibold">Revolving Account: </h3>
          </div>
          <div className="flex w-full justify-end">
            <div className="h-8 text-blue-600">
              <Link href={"/step7/page4-full"} className="business-page-tier">
                Tier4{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
