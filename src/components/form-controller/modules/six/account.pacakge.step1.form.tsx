"use client";
// @ts-ignore
// import useForm from "new-react-use-form";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Link from "next/link";
// import { LinkIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { AccountPersonItem } from "@/components/business_credit_elements/account-package/item";
import { useAP } from "@/context/business-credit/account-package/personal.account.pacakge.context";
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ArrowForward } from "@mui/icons-material";

// import { LinkOption } from "@/components/link/add-client/link.option3";
import Image from "next/image";
// import { objectUtil } from "zod";
// interface Option {
//   label: string;
// }
export const AccountPackageStep1Form = () => {
  const router = useRouter();
  const {
    SetFormID,
    SetIsPending,
    SetButtonText,
    SetMobileH4,
    SetMobileText,
    SetMobileValue,
  } = useAP();
  // const [showPassword, setShowPassword] = React.useState(false);
  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const form = useForm({
  //   firstName: "",
  //   lastName: "",
  //   gender: "",
  //   dob: "",
  //   ssn: "",
  //   cityName: "",
  //   zipCode: "",
  //   state: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   cnfPassword: "",
  //   policy: null,
  // });

  const personItems = [
    {
      icon: "scaling",
      title: "SCALING SPECIALISTS",
      subtitle:
        "We're experts at scaling up credit and transforming financial futures.",
    },
    {
      icon: "tailored",
      title: "TAILORED SOLUTIONS",
      subtitle:
        "Our strategies are customized to your unique credit goals and needs",
    },
    {
      icon: "proven",
      title: "PROVEN OUTCOMES",
      subtitle: "Our track record of success showcases the results we deliver",
    },
    {
      icon: "transparent",
      title: "TRANSPARENT PROGRESS",
      subtitle:
        "Scaling your credit means unlocking better opportunities and financial freedom",
    },
    {
      icon: "unleash",
      title: "UNLEASH FINANCIAL POTENTIAL",
      subtitle:
        "Stay updated on your scaling journey with regular progress reports.",
    },
  ];
 

    const { data, isLoading } =
    useQuery<Calls.IResponse.ModuleOnePackageResponse>({
      queryKey: ["get_module_ome_plans"],
      queryFn: () => ApiCalls.Module.one.plans(),
    });

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.ModulesSignUp,
    Error,
    Calls.IRequest.ModuleOneSignUp
  >({
    mutationFn: (variables) => ApiCalls.Module.one.signUp(variables),
    onSuccess: (r) => {
      toast.success(r.message);
      Cookies.set("accessToken", r.accessToken, {
        expires: 7,
        path: "/",
        secure: true,
      });
      Cookies.set("refreshToken", r.refreshToken, {
        expires: 30,
        path: "/",
        secure: true,
      });
      if (r?.urlPath != null) {
        router.replace(r?.urlPath);
      }
    },
    // onError: (e) => {
    //   // handleFormError(e as any, form);
    //   const error = handleFormError(e as any, form);
    //   // @ts-ignore
    //   toast.error(error?.message);
    // },
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // console.log(form.originalData);
    // await mutateAsync(form.originalData);
  };
  useLayoutEffect(() => {
    SetFormID("sign-up");
    SetMobileH4("Create your account");
    SetButtonText("ADD SINGLE CLIENT CREDIT");
    SetMobileText("1/6");
    SetMobileValue(20);
  }, []);
  useEffect(() => {
    if (isPending) {
      SetIsPending(true);
    } else {
      SetIsPending(false);
    }                                        
  }, [isPending]);




 const linksButton=data && data?.data[3]?.bulletPoints

  return (
    <>
      {isLoading ? (
        <div className={"bg-white flex h-screen justify-center items-center "}>
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          id={"option3"}
          className={
            " md:mt-10 mb-1 flex flex-col h-fit justify-start items-start  md:px-8 px-[16px] w-full"
          }
        >
          <div className="w-full justify-center text-center text-4xl">
            EMBARK ON YOUR{" "}
            <span className=" text-red-800">"BUSINESS CREDIT"</span> SCALING
            JOURNEY.
          </div>
          <div className="flex flex-col w-full justify-center content-center items-center">
            <div className="w-[75%] justify-center text-center text-2xl mt-8">
              Your Journey Begins Here With TGI Scale ME, The Key To AxLINF Up
              Your <span className=" text-blue-800">Financial Future!</span>
            </div>
            <div className="w-[50 %] justify-center text-center text-base mt-6">
              Let's Start Scaling Up Your Credit Together.
            </div>
          </div>

          <div className="flex flex-col w-full mt-[1rem] justify-center content-center items-center">
            {/* <div className="flex flex-col col-start-4 col-end-10 w-full justify-center content-center items-center bg-gray-100 mt-6 rounded-[5rem]"> */}

            <div className="flex w-[42.5rem] h-80 mt-6 relative">
              <Image
                src={"/business-account/banner.png"}
                fill
                objectFit={"cover"}
                alt=""
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col w-[40rem] justify-center content-center items-center bg-gray-100 pt-[16rem] mt-[-16rem] rounded-b-[5rem]">
              <div className="flex md:w-[80%] text-gray-700 justify-center content-center items-center space-y-[-0.5rem] mt-3">
                <span className="text-4xl">
                  ${data?.data[3]?.pricing.fullPrice || 0 }/
                </span>
                {/* $ {Number(data?.data[0]?.emiPrice) * Number(data?.data[0]?.pricing.intervalCount) -
                  Number(data?.data[0]?.fullPrice)}  */}
                One Time Payment
                <br /> (Save You $
                {Number(data?.data[3]?.pricing?.emiPrice||0) * Number(data?.data[3]?.pricing?.intervalCount||0) -
                  Number(data?.data[3]?.pricing?.fullPrice||0)})
                
              </div>
              <div className="flex w-36 text-3xl text-white justify-center content-center items-center rounded-2xl py-1 pt-2 bg-gradient-to-t from-green-300 to-green-700 mt-3">
                QR
              </div>
              <div className="text-gray-500 text-lg mt-2">
                {data?.data[3]?.pricing.downPaymentAmount || 0} Down Payment And {Number(data?.data[3]?.pricing?.emiPrice||0)} Monthly
              </div>
              <div>
                {linksButton?.map((e:any)=>{
                  return(<>
                  <div className="flex flex-row my-10">
                  <ArrowForward
                    style={{
                      marginRight: "1.5rem",
                      color: "rgb(94, 89, 89)",
                      fontSize: "2rem",
                    }}
                  />
                  <p
                    // href={e.highlight}
                    style={{ fontSize: "1.5rem", marginLeft: "1,5rem" }}
                  >
                    {e.value}
                  </p>
                </div>
                  
                  </>)
                })}
                 
              </div>

              <div className="flex w-[65%] rounded-full mt-6">
                <Button
                  style={{
                    height: "4rem",
                    backgroundColor: "rgb(222, 226, 128)",
                    borderRadius: "4rem",
                    fontSize: "2rem",
                  }}
                  disabled={data?.data[3]?._id===undefined}
                  onClick={() => {
                    const id = data?.data[3]?._id;
                    if (id) {
                      router.push(`/checkout/one/${id}`);
                    }
                  }}
                >
                  CHOOSE PLAN
                </Button>
              </div>

              <div className="flex w-full rounded-[5rem] mt-28">
                 <Link href={"/step1/build-business-credit"} style={{ height: '5rem', width: '100%' }}> 
                <Button
                  style={{
                    height: "5rem",
                    backgroundColor: "rgb(46, 45, 45)",
                    borderRadius: "2rem",
                    fontSize: "2rem",
                  }}
                  // onClick={() => {
                  //   () => router.push(`/step1/build-business-credit`);
                  // }}
                >
                  CONTINUE
                </Button>
                </Link> 
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full content-center justify-center items-center mt-[4rem] z-20">
            <div className="w-[90%] grid grid-cols-3 gap-4 justify-center">
              <AccountPersonItem personItem={personItems[0]} />
              <AccountPersonItem personItem={personItems[1]} />
              <AccountPersonItem personItem={personItems[2]} />
            </div>
            <div className="w-[60%] grid grid-cols-2 gap-4 justify-center mt-6">
              <AccountPersonItem personItem={personItems[3]} />
              <AccountPersonItem personItem={personItems[4]} />
            </div>
          </div>
        </form>
      )}
    </>
  );
};


