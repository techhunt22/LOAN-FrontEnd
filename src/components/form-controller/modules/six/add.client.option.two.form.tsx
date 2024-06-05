"use client";
// @ts-ignore
import useForm from "new-react-use-form";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateRangeIcon, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Autocomplete from "@mui/material/Autocomplete";
import { states } from "@/data/ states";
import { Settings, Visibility, VisibilityOff } from "@mui/icons-material";
import {  Checkbox, Typography } from "@material-tailwind/react";
import {Button} from 'antd'
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useAC } from "@/context/business-credit/add-client/personal.credit.repair.context";
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { SortByAlpha } from "@mui/icons-material";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AddClientInformation } from "@/components/business_credit_elements/add-client/client.information";
import { AddClientInformationCard } from "@/components/business_credit_elements/add-client/client.information.card";
import Link from "next/link";
interface Option {
  label: string;
}
export const AddClientOptionTwoForm = () => {
  // Client's informations
  let clientInformations = [
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
    {
      firstName: "Fric",
      lastName: "Carnes",
      email: "brakeralexc@gmail.com",
      date: "Oct 25 2022 20:49",
      funding: "Business Credit Builder",
    },
  ];
  let clientDetailInformations = [
    {
      imgUrl: "/userBig.png",
      detail: "Open http://localhost:3000 with your browser to see the result.You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file This project uses next/font to automatically optimize and load Inter, a custom Google Font.",
      name: "Angel GANDAMRA"
    },
    {
      imgUrl: "/userBig.png",
      detail: "Open http://localhost:3000 with your browser to see the result.You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file This project uses next/font to automatically optimize and load Inter, a custom Google Font.",
      name: "Angel GANDAMRA"
    },
    {
      imgUrl: "/userBig.png",
      detail: "Open http://localhost:3000 with your browser to see the result.You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file This project uses next/font to automatically optimize and load Inter, a custom Google Font.",
      name: "Angel GANDAMRA"
    },
  ];
  return (
    <>
      <h1>hello</h1>
    </>
  );
};
