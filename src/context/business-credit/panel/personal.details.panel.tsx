"use client";

import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { PaymentContext } from "@/context/payment/context";
import { UsersIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { Check, Height } from "@mui/icons-material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";

interface PersonalDetailsPanelProps {
  activeState: string;
}

export const PersonalDetailsPanel: React.FC<PersonalDetailsPanelProps> = (
  props
) => {
  const { state, dispatch } = useContext(PaymentContext);
  const searchParams = useSearchParams();
  const packageId = searchParams.get("id");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  console.log("packageId", packageId);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const useData = useQuery({
    queryKey: ["CheckOutBilling"],
    queryFn: () =>
      ApiCalls.CheckOutBilling({
        _id: state?.packageID,
        type: "module1",
        paytype: state?.paymentType,
      }),
    refetchOnWindowFocus: false,
    retryOnMount: false,
    refetchIntervalInBackground: false,
  });
  console.log("usedata", useData);

  useEffect(() => {
    // if (selectedOption === "full") {
    // 	onFullPaymentDetails()
    // } else if (selectedOption === "emi") {
    // 	onEmiPaymentDetails()
    // }
    (async () => {
      await axios
        .get(`${API_BASE_URL}/package/${packageId}`)
        ?.then((res) => {
          setName(res?.data?.data?.name);
          setAmount(res?.data?.data?.price);
          console.log("response", res);
        })
        ?.catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  const numericValue = parseFloat(useData?.data?.total.$numberDecimal);

  console.log(numericValue);

  return (
    <>
      <div className="flex flex-col items-center justify-between h-full mb-24 pb-8 bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full bg-blue-400 rounded-t-lg text-white content-center items-center text-center h-max">
            <div className="flex mt-10">
              <img
                src="/payments/TGIMark.svg"
                alt="mark"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="flex mt-3 px-5">
              <h1 className="flex text-4xl">
                Simple, Transparent pricing for everyone
              </h1>
            </div>
            <div className="flex mt-10 px-24">
              <p className="flex">
                Every paid plan includes 14 days free trial. No credit card
                required.
              </p>
            </div>
            <div className="h-32"></div>
          </div>

          <div className="flex flex-row px-10 rounded-l-full justify-center rounded-r-full w-max mt-[-4rem] bg-white py-6">
            <div className="flex justify-center items-center content-center h-full">
              <img
                src="/payments/card.svg"
                alt="card.svg"
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            </div>
            <div className="flex flex-col ml-8 justify-center content-start items-start">
              <p className="flex text-lg text-gray-400">{name}</p>
              <p className="flex text-2xl">${amount}</p>
              <p className="flex text-xs text-gray-600">
                $1000 Down Payment And 399 Monthly
              </p>
            </div>
            <div className="flex ml-8 justify-center content-center items-center h-full">
              <Link href={"/"} className="flex text-lg text-blue-300 underline">
                Change plan
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full justify-start pl-16 mt-12">
            <div className="flex flex-row mt-12">
              <Check className="text-blue-300 ml-24" />
              <p className="flex text-gray-500 text-lg ml-2">
                Business Credit Setup
              </p>
            </div>
            <div className="flex flex-row mt-12">
              <Check className="text-blue-300 ml-24" />
              <p className="flex text-gray-500 text-lg ml-2">Website Setup</p>
            </div>
            <div className="flex flex-row mt-12">
              <Check className="text-blue-300 ml-24" />
              <p className="flex text-gray-500 text-lg ml-2">
                Business Email Setup
              </p>
            </div>
            <div className="flex flex-row mt-12">
              <Check className="text-blue-300 ml-24" />
              <p className="flex text-gray-500 text-lg ml-2">
                Business Credit Builder
              </p>
            </div>
            <div className="flex flex-row mt-12">
              <Check className="text-blue-300 ml-24" />
              <p className="flex text-gray-500 text-lg ml-2">
                Access To Lines Of Credit
              </p>
            </div>
            <div className="flex flex-row mt-12">
              <Check className="text-blue-300 ml-24" />
              <p className="flex text-gray-500 text-lg ml-2">
                Access Businesss Credit Cards & More Funding
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-20 text-gray-400 mt-36">
          <Link href={"#"}>Terms & Conditions</Link>
          <Link href={"#"}>Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};
