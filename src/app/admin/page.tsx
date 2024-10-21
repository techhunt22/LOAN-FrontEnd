"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async () => {
    const payload = {
      email,
      password,
    };

    console.log(payload);

    await axios
      ?.post(`${API_URL}/auth/admin/login`, payload)
      ?.then((res) => {
        console.log(res);
        Cookies.set("accessToken", res?.data?.accessToken);
        router?.push("/admin/active-users");
      })
      ?.catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex-1 h-screen flex flex-col gap-10 items-center justify-center">
      <p className="text-3xl font-semibold">Login</p>
      <div className="w-[500px] rounded-xl shadow-xl border border-blue-500 p-5 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <p className="font-semibold">Email:</p>
          <input
            className="h-10 w-full border rounded-xl px-5"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="font-semibold">Password:</p>
          <input
            className="h-10 w-full border rounded-xl px-5"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        className="h-10 w-20 flex items-center justify-center rounded-xl bg-blue-500 text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
