"use client";
import { useState } from "react";

import { Verified } from "@mui/icons-material";
import Image from "next/image";
interface AlertProps {
  icon: string;
  content: string;
}

export const Alert: React.FC<AlertProps> = (props) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {showAlert ? (
        <div
          style={{
            backgroundColor: "#fff",
            boxShadow:
              " 0px 2.9064748287200928px 4.069064617156982px 1.1625899076461792px #43434308",
          }}
          className="flex flex-row text-gray-300 px-6 py-4 border-0 rounded relative mb-4 mt-6 max-w-lg   "
        >
          <span className="text-xl inline-block mr-1 align-middle">
            {/* <Verified color="primary" /> */}
            <Image
              src={props.icon}
              alt=""
              width={40}
              height={40}
              style={{ marginTop: "5px" }}
            />
          </span>

          <span className="inline-block align-middle ml-5 mr-8 font-10">
            {props.content}
            <button
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: "1px solid ",
                marginRight: "5px",
              }}
              className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4  outline-none focus:outline-none"
              onClick={() => setShowAlert(false)}
            >
              <span>×</span>
            </button>
          </span>
        </div>
      ) : null}
    </>
  );
};

interface AlertURLProps {
  icon: string;
  content: string;
  url: string;
}

export const AlertURL: React.FC<AlertURLProps> = (props) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {showAlert ? (
        <div
          style={{
            backgroundColor: "#fff",
            boxShadow:
              " 0px 2.9064748287200928px 4.069064617156982px 1.1625899076461792px #43434308",
          }}
          className="flex flex-row text-gray-300 px-6 py-4 border-0 rounded relative mb-4 mt-6 "
        >
          <span className="text-xl inline-block mr-1 align-middle">
            {/* <Verified color="primary" /> */}
            <Image src={props.icon} alt="" width={40} height={40} />
          </span>

          <span className="inline-block align-middle ml-5 mr-8">
            <p>{props.content}</p>
            <p className="text-blue-500">
              <a href="#">{props.url}</a>
            </p>
          </span>

          <button
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: "1px solid ",
              marginRight: "5px",
            }}
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};
