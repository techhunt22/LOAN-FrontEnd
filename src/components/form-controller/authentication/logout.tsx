"use client";
import { Button, Spinner } from "@material-tailwind/react";
import { FormEventHandler, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from "react-hot-toast";
import { handleFormError } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
import LogoutIcon from "@mui/icons-material/Logout";
// @ts-ignore
import useForm from "new-react-use-form";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export const SignOut = () => {
  const [typeInput, setTypeInput] = useState(true);
  const router = useRouter();
  const form = useForm({
    remember: false,
  });
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => await ApiCalls.SignOut(),
    onSuccess: (r) => {
      if (r?.urlPath != null) {
        router.replace(r?.urlPath);
      }
    },
    onError: (e) => handleFormError(e as any, form),
  });

  const onLogout = async () => {
    await mutateAsync();
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        className={
          "flex items-center justify-center rounded-full text-[#DFDDDD] bg-[transparent] h-[40px] w-[40px] shadow-none text-[16px]"
        }
        disabled={isPending || form.busy}
        onClick={onLogout}
        size={"lg"}
        type={"button"}
      >
        {isPending ? <Spinner /> : <LogoutIcon />}
      </Button>
    </div>
  );
};
