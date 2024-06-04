"use client";
import { Typography } from "antd";
import React from "react";

export const HeaderSubTitle = () => {
  return (
    <Typography  color="gray" className="text-2xl font-normal">
      Please fill out all necessary{" "}
      <span
        style={{ color: "#1380FF" }}
        className={"font-bold text-light-blue-800"}
      >
        steps
      </span>{" "}
      to get started
    </Typography>
  );
};
