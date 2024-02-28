"use client";
import { TypeofServices } from "@/components/service_type/Typeof.services";
import { Back, Login, TagUser } from "iconsax-react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export const TypeofServiceScreen = () => {
  const router = useRouter();
 

  // const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {

    // const getCookie = (name: string) => {
    //   const cookieName = name + "=";
    //   const decodedCookie = decodeURIComponent(document.cookie);
    //   const cookieArray = decodedCookie.split(';').map(cookie => cookie.trim());
    //   const targetCookie = cookieArray.find(cookie => cookie.startsWith(cookieName));
    //   return targetCookie ? targetCookie.substring(cookieName.length) : null || undefined;
    // };
    // const myCookieValue = getCookie('accessToken');

    // setIsLogin(myCookieValue === undefined || null  ? true : false);
  }, []);
  return (
    <div className={"bg-[#FDFCFC] flex  justify-center items-center md:p-16"}>
      <div
        className={
          "md:rounded-[32px] flex flex-col justify-center items-center  gap-12 md:px-20 md:py-16  p-[1.5rem] bg-[#F7F9F8] md:ring-2  md:ring-[#2684ff] md:w-fit md:h-fit w-full h-auto "
        }
      >
        <div
          className={"w-full flex flex-row gap-5 items-center justify-center"}
        >
          <Button
            onClick={() => router.back()}
            className={"text-sm flex items-center gap-2 rounded-full"}
            variant="outlined"
            color={"blue"}
          >
            <Back size="20" color="#2684ff" />
            BACK
          </Button>
         {/* { isLogin ?   */}
         <Button
            onClick={() => router.push("/authentication/sign-in")}
            className={"text-sm flex items-center gap-2 rounded-full"}
            variant="filled"
            color={"blue"}
          >
            <Login size="20" color="#FFFFFF" />
            SIGN IN 
          </Button>
           {/* :null}  */}
         {/* { isLogin ?   */}
          <Button
            onClick={() => router.push("/authentication/signup")}
            className={"text-sm flex items-center gap-2 rounded-full"}
            variant="filled"
            color={"blue"}
          >
            <TagUser size="20" color="#FFFFFF" />
            SIGN UP
          </Button>
          {/* :null} */}
        </div>
        <div className={"mt-2 mb-5 flex flex-col text-center gap-3"}>
          <h4 className={"text-2xl font-semibold"}>
            What service are you interested in?
          </h4>
          <p className={"text-base text-slate-500"}> Choose Account Type</p>
        </div>
        <TypeofServices />
        <div className={"mt-4 flex flex-col text-center gap-2"}>
          <p className={"capitalize text-sm font-medium text-slate-400"}>
            personal accounts cannot be used for business purposes
          </p>
          <div className={"flex flex-row gap-5 items-center justify-center "}>
            <Link
              href={"#"}
              className={"hover:underline text-sm text-blue-500"}
            >
              Terms & conditions
            </Link>
            <Link
              href={"#"}
              className={"hover:underline text-sm text-blue-500"}
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
