import { AlarmOn } from "@mui/icons-material";
import React, { Suspense } from "react";
import { SignOut } from "../form-controller/authentication/logout";

interface accountInformationsProps {
  account: {
    name: string;
    photoUrl: string;
  };
}

export const AccountBanner = () => {
  return (
    <>
      <div className="flex w-[90%] justify-end items-center">
        {/* <div className="text-xl mr-2 mt-2">
          <SignOut />
        </div> */}
        <div className="text-xl mr-8 mt-2">...</div>
        <AlarmOn
          style={{
            height: "2rem",
            width: "2rem",
            marginTop: "0.6rem",
            marginRight: "1.5rem",
          }}
        />
        <img className="h-16 w-18" src="/userbig.png" alt="" />
      </div>
    </>
  );
};
