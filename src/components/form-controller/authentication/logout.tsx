"use client";
import {
  Button,
  Spinner,
} from "@material-tailwind/react";
import { FormEventHandler, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from "react-hot-toast";
import { handleFormError } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
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
    <Button
      className={"flex items-center justify-center rounded-full"}
      disabled={isPending || form.busy}
      color={"blue"}
      onClick={onLogout}
      size={"lg"}
      fullWidth={true}
      type={"button"}
    >
      {isPending ? <Spinner /> : "LOGOUT"}
    </Button>
  );
};
