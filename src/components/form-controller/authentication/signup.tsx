"use client";
import {
  Input,
  Button,
  Checkbox,
  Typography,
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
export const SignUpForm = () => {
  const [typeInput, setTypeInput] = useState(true);
  const router = useRouter();
  const form = useForm({
    email: "",
    password: "",
    username: ""
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.SignUp,
    Error,
    Calls.IRequest.SignUp
  >({
    mutationFn: async (variables) => await ApiCalls.SignUp(variables),
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
    onError: (e) => handleFormError(e as any, form),
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(form.originalData);
  };

  return (
    <form className={"mt-4 flex flex-col gap-6 "} onSubmit={onSubmit}>
      <div className={"min-h-[40px] max-h-auto"}>
        <Input
          disabled={form.busy}
          value={form.email}
          onChange={(e) => {
            form.set("email", e.target.value);
            form.errors.clear("email");
          }}
          className={""}
          color={"blue"}
          size={"lg"}
          variant="static"
          placeholder={"Enter Email Address"}
          label="Email "
          error={form.errors.has("email")}
          crossOrigin={undefined}
        />
        <Typography placeholder={"Enter Email Address"} color="red" className="mt-1 text-[12px] font-medium">
          {form.errors.has("email") && form.errors.get("email")}
        </Typography>
      </div>
      <div className="min-h-[40px] max-h-auto">
        <Input
          disabled={form.busy}
          value={form.username}
          onChange={(e) => {
            form.set("username", e.target.value);
            form.errors.clear("username");
          }}
          color="blue"
          size="lg" 
          variant="static"
          placeholder="Your usename"
          label="Username "
          error={form.errors.has("username")}
          crossOrigin={undefined}
        />
        <Typography placeholder="Your usename" color="red" className="mt-1 text-[12px] font-medium">
          {form.errors.has("usename") && form.errors.get("usename")}
        </Typography>
      </div>
      <div className={" min-h-[40px] max-h-auto"}>
        <Input
          disabled={form.busy}
          value={form.password}
          onChange={(e) => {
            form.set("password", e.target.value);
            form.errors.clear("password");
          }}
          type={typeInput ? "password" : "text"}
          className={""}
          color={"blue"}
          size={"lg"}
          variant="static"
          placeholder={"Enter Password"}
          label="Password"
          error={form.errors.has("password")}
          crossOrigin={undefined}
          icon={
            typeInput ? (
              <EyeSlashIcon onClick={() => setTypeInput(false)} />
            ) : (
              <EyeIcon onClick={() => setTypeInput(true)} />
            )
          }
        />
        <Typography placeholder={"Enter Password"} color="red" className="mt-1 text-[12px]  font-medium">
          {form.errors.has("password") && form.errors.get("password")}
        </Typography>
      </div>
      <div className={""}>
        <Button
          className={"flex items-center justify-center rounded-full"}
          disabled={isPending || form.busy}
          color={"blue"}
          size={"lg"}
          fullWidth={true}
          type={"submit"}
        >
          {isPending ? <Spinner /> : "SIGN UP"}
        </Button>
      </div>
    </form>
  );
};

export function SignUp(variables: Calls.IRequest.SignUp): any {
    throw new Error("Function not implemented.");
}

