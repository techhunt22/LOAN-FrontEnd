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
import { Divider } from "@mui/material";

interface TableRow {
  name: string;
  slogan: string;
  url?: string;
}

interface PFProps {
  onChange: (selected: string[] | []) => void;
  accountName?: string;
  data?: TableRow[];
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
    url:"https://kikoff.com/?msclkid=4ab3c3b2532c1b11f4bda5e47228692d"
  },
  {
    name: "Self Credit Builder",
    slogan: "Build Credit. Build Savings. Build Dreams",
    url:"https://www.self.inc/?msclkid=61025b5b9e681cb8ce383d0dbf2a52f1"
  },
  {
    name: "CreditStrong ",
    slogan: "Get a Credit Builder Loan that Builds Credit and Savings ",
    url:"https://www.creditstrong.com/?utm_medium=cpc&utm_source=bing&utm_campaign=413186949&utm_content=_c_&utm_term=credit%20strong&msclkid=e51f0e6286e81f0672d66834a76ed09f"
  },
  {
    name: "Experian Boost",
    slogan: "Improve Your Credit Scores Instantly for Free",
    url:"https://www.experian.com/consumer-products/score-boost.html?pc=sem_exp_bing&cc=sem_exp_bing_ad_268877240_1186373808589981_74148567015209_74148458192873_e__k_209d8e17be95169b9510e8419f522910_k_&ref=brand&awsearchcpc=1&msclkid=209d8e17be95169b9510e8419f522910"
  },
  {
    name: "ExtraCredit",
    slogan: "Trackit",
    url:"https://www.credit.com/extracredit"
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
    name: "https://optout.lexisnexis.com/",
    slogan: "",
    url: "https://optout.lexisnexis.com/",
  },
  {
    name: "https://www.innovis.com/securityFreeze/index",
    slogan: "",
    url: "https://www.innovis.com/securityFreeze/index",
  },
  {
    name: "https://consumers.teletrack.com/freeze/",
    slogan: "",
    url: "https://consumers.teletrack.com/freeze/",
  },
  {
    name: "https://ars-consumeroffice.com/add ",
    slogan: "",
    url: "https://ars-consumeroffice.com/add ",
  },
  {
    name: "https://clarityservices.com",
    slogan: "",
    url: "https://clarityservices.com",
  },
  {
    name: "https://www.chexsystems.com/security-freeze/place-freeze",
    slogan: "",
    url: "https://www.chexsystems.com/security-freeze/place-freeze",
  },
  // Add more rows as needed
];
export const TableComponent: React.FC<PFProps> = (props) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  console.log(selectedRows);
  // Sample data for the table

  const toggleRowSelection = (rowName: string) => {
    const updatedRows = selectedRows.includes(rowName)
      ? selectedRows.filter((name) => name !== rowName)
      : [...selectedRows, rowName];

    props.onChange(updatedRows);
    setSelectedRows(updatedRows);
  };

  const handleSelectAll = () => {
    const allNames = props?.data?.map((row) => row.name);
    const isAllSelected = selectedRows.length === allNames?.length;

    const updatedRows = isAllSelected ? [] : allNames;

    props.onChange(updatedRows as string[]);
    setSelectedRows(updatedRows as string[]);
  };

  const handleDeselectAll = () => {
    props.onChange([]);
    setSelectedRows([]);
  };

  useEffect(() => {}, [selectedRows]);

  return (
    <div className=" select-none flex flex-col items-center justify-center md:px-[60] px-[16px]  w-full h-full">
      <div className="w-full h-fit  flex flex-col">
        <div
          style={{ boxShadow: "rgb(0 0 0 / 11%) 0px 1px 60px 0px" }}
          className=" rounded-md w-full min-h-[67px] bg-white flex flex-row items-center mb-2"
        >
          <div
            style={{
              background: "linear-gradient(180deg, #2684FF 0%, #88BFFF 100%)",
              display: "flex",
              alignItems: "center",
            }}
            className="pl-4 rounded-l-md text-[24px] text-white font-medium w-[60%] p-3 min-h-[67px] "
          >
            {props.accountName}
          </div>
          <div className="bg-white rounded-r-md text-[#1380FF] pl-4 text-[15px] font-medium w-[40%] p-3 text-center">
            Mark when done!
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center p-4 w-full h-fit">
        {props?.data?.map((row, index) => (
          
          
            <div
              key={index}
              className="w-full h-full flex flex-row justify-between items-center"
            >
              <label
                htmlFor={row.name}
                className="w-full h-full flex flex-row justify-between items-center"
                key={index}
              >
                <div>
                  <div className="text-[13px] text-gray-500">{row.slogan}</div>
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
                checked={selectedRows.includes(row.name)}
                onChange={() => toggleRowSelection(row.name)}
              />
            </div>
            // <Divider sx={{ width: "100%", color: "#929292" }} />
        
        ))}
      </div>

      <div className="w-full flex flex-row gap-4 items-center justify-end mt-4">
        <div
          className="cursor-pointer flex items-center justify-center mr-2 bg-green-500 p-2 h-auto px-3 w-[122px] text-white rounded-full"
          onClick={handleSelectAll}
        >
          {selectedRows.length !== 0 ? " Selected" : " Select All"}
        </div>
        <div
          className="cursor-pointer text-[#EB6B7A]"
          onClick={selectedRows.length === 0 ? () => {} : handleDeselectAll}
        >
          Clear all
        </div>
      </div>
    </div>
  );
};

export const PFForm = () => {
  const router = useRouter();
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

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.PFAccount,
    Error,
    Calls.IRequest.PFAccount
  >({
    mutationFn: (variables) => ApiCalls.Module.one.PFAccount(variables),
    onSuccess: (r) => {
      toast.success(r.message);
      router.replace(r?.urlPath as string);
    },
    onError: (e) => {},
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(form.data());
    
    console.log(form.data());
  };
  useEffect(() => {
    if (isPending) {
      SetIsPending(true);
    } else {
      SetIsPending(false);
    }
  }, [isPending]);
  return (

    <form
      id={"pf"}
      onSubmit={onSubmit}
      className={"mb-36   flex flex-col justify-center items-center w-full "}
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
            <div
              className={" space-y-2 w-full h-full text-center align-middle"}
            >
              <h3 className={" text-white text-[32px] font-bold "}>Set up</h3>
              <p className={" text-white text-[16px] font-semibold "}>
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
              <h3 className={"uppercase text-[#085ABB] text-[32px] font-bold "}>
                Create your Primary accounts :
              </h3>
            </div>
            <div className={"md:w-[80%] w-full"}>
              <TableComponent
                data={tableData}
                accountName={"Primary accounts"}
                onChange={(selected) => {
                  form.set("primaryAccounts", selected);
                }}
              />
            </div>
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
              <h3 className={"uppercase text-[#085ABB] text-[32px] font-bold "}>
                Freeze the Secondary Bureaus :
              </h3>
            </div>
            <div className={"md:w-[80%] w-full"}>
              <TableComponent
                data={freezeAccountTableData}
                accountName={"Freeze Account"}
                onChange={(selected) => {
                  form.set("freezeAccount", selected);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </form>

    
  );
};