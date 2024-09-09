"use client";
import React, {
  FormEventHandler,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
// @ts-ignore
import useForm from "new-react-use-form";
import { useRouter } from "next/navigation";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import toast from "react-hot-toast";
import { Divider, Button } from "@mui/material";
import { useDocsUpload } from "@/context/ImageContext";
import Cookies from "js-cookie";

interface TableRow {
  name: string;
  slogan: string;
  url?: string;
}

const tableData: TableRow[] = [
  {
    name: "Boom (boompay.app)",
    slogan: "Build credit with rent",
    url: "https://www.boompay.app/download",
  },
  {
    name: "Kikoff Credit Builder",
    slogan: "Build Credit Safely & Responsibly",
    url: "https://kikoff.com/?msclkid=4ab3c3b2532c1b11f4bda5e47228692d",
  },
  {
    name: "Self Credit Builder",
    slogan: "Build Credit. Build Savings. Build Dreams",
    url: "https://www.self.inc/?msclkid=61025b5b9e681cb8ce383d0dbf2a52f1",
  },
  {
    name: "CreditStrong ",
    slogan: "Get a Credit Builder Loan that Builds Credit and Savings ",
    url: "https://www.creditstrong.com/?utm_medium=cpc&utm_source=bing&utm_campaign=413186949&utm_content=_c_&utm_term=credit%20strong&msclkid=e51f0e6286e81f0672d66834a76ed09f",
  },
  {
    name: "Experian Boost",
    slogan: "Improve Your Credit Scores Instantly for Free",
    url: "https://www.experian.com/consumer-products/score-boost.html?pc=sem_exp_bing&cc=sem_exp_bing_ad_268877240_1186373808589981_74148567015209_74148458192873_e__k_209d8e17be95169b9510e8419f522910_k_&ref=brand&awsearchcpc=1&msclkid=209d8e17be95169b9510e8419f522910",
  },
  {
    name: "ExtraCredit",
    slogan: "Trackit",
    url: "https://www.credit.com/extracredit",
  },
  {
    name: "rentreporters.com",
    slogan: "",
    url: "https://www.rentreporters.com/",
  },
  { name: "extra.app", slogan: "", url: "https://extra.app/" },
  {
    name: "rentalkharma.com",
    slogan: "",
    url: "https://www.rentalkharma.com/",
  },
  { name: "tomocredit.com", slogan: "", url: "https://tomocredit.com/" },
  { name: "meetava.com", slogan: "", url: "https://www.meetava.com/" },
  // Add more rows as needed
];

const freezeAccountTableData: TableRow[] = [
  {
    name: "lexis_nexis_freeze",
    slogan: "",
    url: "https://optout.lexisnexis.com/",
  },
  {
    name: "innovice",
    slogan: "",
    url: "https://www.innovis.com/securityFreeze/index",
  },
  {
    name: "teletrack_freeze",
    slogan: "",
    url: "https://consumers.teletrack.com/freeze/",
  },
  {
    name: "consumer_office_freeze ",
    slogan: "",
    url: "https://ars-consumeroffice.com/add ",
  },
  {
    name: "clarityservices",
    slogan: "",
    url: "https://clarityservices.com",
  },
  {
    name: "checksystems",
    slogan: "",
    url: "https://www.chexsystems.com/security-freeze/place-freeze",
  },
  // Add more rows as needed
];

export const PFForm = () => {
  const { files, setFile } = useDocsUpload(); // Use the context
  const e1 = Cookies.get("email");
  const e2 = Cookies.get("email1");
  const Email = e1 || e2;
  const router = useRouter();
  const [primarySelected, setPrimarySelected] = useState<
    Record<string, boolean>
  >({});
  const [freezeSelected, setFreezeSelected] = useState<Record<string, boolean>>(
    {}
  );
  const {
    SetActiveTab,
    SetFormID,
    SetButtonText,
    SetIsPending,
    SetMobileH4,
    SetMobileText,
    SetMobileValue,
  } = usePCR();
  const form = useForm({
    primaryAccounts: null,
    freezeAccount: null,
  });

  useLayoutEffect(() => {
    SetActiveTab(5);
    SetFormID("pf");
    SetButtonText("Final Submit");
    SetMobileH4("Positive account & Freeze account");
    SetMobileText("6/6");
    SetMobileValue(100);
  }, []);

  const handlePrimarySelectAll = () => {
    const newState = tableData.reduce((acc, row) => {
      acc[row.name] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setPrimarySelected(newState);
  };

  const handlePrimaryClearAll = () => {
    setPrimarySelected({});
  };

  const handleFreezeSelectAll = () => {
    const newState = freezeAccountTableData.reduce((acc, row) => {
      acc[row.name] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setFreezeSelected(newState);
  };

  const handleFreezeClearAll = () => {
    setFreezeSelected({});
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Prepare dynamic primary account fields
    const primaryAccountFields = tableData.reduce((acc, row) => {
      const fieldName = row.name
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[\(\)\.]/g, ""); // Format field name (e.g., remove spaces, parentheses, periods)
      acc[fieldName] = primarySelected[row.name] || false;
      return acc;
    }, {} as Record<string, boolean>);

    // Prepare dynamic freeze account fields
    const freezeAccountFields = freezeAccountTableData.reduce((acc, row) => {
      const fieldName = row.name
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[\(\)\.]/g, ""); // Format field name
      acc[fieldName] = freezeSelected[row.name] || false;
      return acc;
    }, {} as Record<string, boolean>);

    // Prepare form data in the required format
    const data = {
      email: Email, // Replace with dynamic value
      photo_ID: files.photo_ID, // Replace with actual upload path
      photo_ID1: files.photo_ID1, // Replace with actual upload path
      proof_of_address: files.proof_of_address, // Replace with actual upload path
      photo_of_SSID: files.photo_of_SSID, // Replace with actual photo path
      photo_of_SSID1: files.photo_of_SSID1, // Replace with actual photo path
      ...primaryAccountFields, // Spread dynamically generated primary account fields
      ...freezeAccountFields, // Spread dynamically generated freeze account fields
    };

    // try {
    //   const response = await axios.post(
    //     `${process.env.NEXT_PUBLIC_API_URL}/doc`,
    //     data,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log(response);
    //   router.push("");
    //   message.success(response.data.msg);
    //
    // } catch (error) {
    //   // message.error(error?.message || 'An error occurred');
    //   console.log(error);
    // }

    console.log("Form Data:", data);

    // Handle form submission, e.g., send data to API
    // await ApiCalls.submitData(data);  // Example API call
  };

  console.log(files);

  return (
    <form
      id={"pf"}
      onSubmit={onSubmit}
      className={"mb-36 flex flex-col justify-center items-center w-full"}
    >
      <div
        style={{
          boxShadow: "0px 0px 30px 6px rgb(30 30 30 / 10%)",
          borderBottomLeftRadius: "14px",
          borderBottomRightRadius: "14px",
          overflow: "auto",
        }}
        className={
          "main-pf flex flex-col h-fit justify-center items-center px-[30px] pt-[100px] pb-[60px] w-[76%]"
        }
      >
        <div
          className={
            "rounded-[25px] flex flex-col justify-between items-center bg-gray-50 md:w-[70%] w-full h-fit pb-8"
          }
        >
          <div className={"p-4 rounded-b-[30px] bg-[#EB6B7A] w-[80%] h-auto"}>
            <div className={"space-y-2 w-full h-full text-center align-middle"}>
              <h3 className={"text-white text-[32px] font-bold"}>Set up</h3>
              <p className={"text-white text-[16px] font-semibold"}>
                Primary accounts and be sure to pay them all on time. After
                setting up the primary accounts then place a freeze on all your
                secondary bureaus.
              </p>
            </div>
          </div>
          <div
            className={
              "flex flex-col justify-between items-center w-full space-y-3"
            }
          >
            <div
              className={
                "mt-16 w-full h-fit text-center align-middle mb-[35px]"
              }
            >
              <p>Choose from the following websites</p>
              <h3 className={"uppercase text-[#085ABB] text-[32px] font-bold"}>
                Create your Primary accounts :
              </h3>
            </div>
            <div className="w-full h-fit  flex flex-col">
              <div
                style={{ boxShadow: "rgb(0 0 0 / 11%) 0px 1px 60px 0px" }}
                className=" rounded-md w-full min-h-[67px] bg-white flex flex-row items-center mb-2"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #2684FF 0%, #88BFFF 100%)",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="pl-4 rounded-l-md text-[24px] text-white font-medium w-[60%] p-3 min-h-[67px] "
                >
                  <p>Primary Accounts</p>
                </div>
                <div className="bg-white rounded-r-md text-[#1380FF] pl-4 text-[15px] font-medium w-[40%] p-3 text-center">
                  Mark when done!
                </div>
              </div>
            </div>
            <div className={"md:w-[80%] w-full"}>
              {tableData?.map((row, index) => (
                <div
                  key={index}
                  className="w-full h-full flex flex-row justify-between mt-4 items-center gap-10"
                >
                  <label
                    htmlFor={row.name}
                    className="w-full h-full flex flex-row justify-between items-center"
                  >
                    <div>
                      <div className="text-[13px] text-gray-500">
                        {row.slogan}
                      </div>
                      <a
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                          marginRight: "10px",
                        }}
                        className="text-gray-700 font-medium"
                        href={row.url}
                        target="_blank"
                      >
                        {row.name} <img src="/launch-icon.png" alt="gh" />
                      </a>
                    </div>
                  </label>
                  <input
                    id={row.name}
                    className="w-[26px] h-[26px]"
                    type="checkbox"
                    checked={primarySelected[row.name] || false}
                    onChange={() =>
                      setPrimarySelected((prev) => ({
                        ...prev,
                        [row.name]: !prev[row.name],
                      }))
                    }
                  />
                </div>
              ))}
            </div>
            <Button
              sx={{ width: "300px" }}
              variant="contained"
              onClick={handlePrimarySelectAll}
            >
              Select All
            </Button>
            <Button
              sx={{ width: "300px" }}
              variant="outlined"
              onClick={handlePrimaryClearAll}
            >
              Clear All
            </Button>
          </div>
          <div
            className={
              "flex flex-col justify-between items-center w-full space-y-3"
            }
          >
            <div
              className={
                "mt-[60px] mb-[38px] w-full h-fit text-center align-middle"
              }
            >
              <h3 className={"uppercase text-[#085ABB] text-[32px] font-bold"}>
                Freeze the Secondary Bureaus :
              </h3>
            </div>
            <div className="w-full h-fit  flex flex-col">
              <div
                style={{ boxShadow: "rgb(0 0 0 / 11%) 0px 1px 60px 0px" }}
                className=" rounded-md w-full min-h-[67px] bg-white flex flex-row items-center mb-2"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #2684FF 0%, #88BFFF 100%)",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="pl-4 rounded-l-md text-[24px] text-white font-medium w-[60%] p-3 min-h-[67px] "
                >
                  <p>Freeze Account</p>
                </div>
                <div className="bg-white rounded-r-md text-[#1380FF] pl-4 text-[15px] font-medium w-[40%] p-3 text-center">
                  Mark when done!
                </div>
              </div>
            </div>
            <div className={"md:w-[80%] w-full"}>
              {freezeAccountTableData?.map((row, index) => (
                <div
                  key={index}
                  className="w-full h-full flex flex-row justify-between mt-4 items-center gap-15"
                >
                  <label
                    htmlFor={row.name}
                    className="w-full h-full flex flex-row justify-between items-center"
                  >
                    <div>
                      <div className="text-[13px] text-gray-500">
                        {row.slogan}
                      </div>
                      <a
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                          marginRight: "10px",
                        }}
                        className="text-gray-700 font-medium"
                        href={row.url}
                        target="_blank"
                      >
                        {row.name} <img src="/launch-icon.png" alt="gh" />
                      </a>
                    </div>
                  </label>
                  <input
                    id={row.name}
                    className="w-[26px] h-[26px]"
                    type="checkbox"
                    checked={freezeSelected[row.name] || false}
                    onChange={() =>
                      setFreezeSelected((prev) => ({
                        ...prev,
                        [row.name]: !prev[row.name],
                      }))
                    }
                  />
                </div>
              ))}
            </div>
            <Button
              sx={{ width: "300px" }}
              variant="contained"
              onClick={handleFreezeSelectAll}
            >
              Select All
            </Button>
            <Button
              sx={{ width: "300px" }}
              variant="outlined"
              onClick={handleFreezeClearAll}
            >
              Clear All
            </Button>
          </div>
          <Divider sx={{ my: 4 }} />
        </div>
      </div>
    </form>
  );
};
