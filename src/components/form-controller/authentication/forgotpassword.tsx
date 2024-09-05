"use client";
import { Form, Input, Button, Typography, message, Spin } from "antd";
// @ts-ignore
import { useForm } from "new-react-use-form";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const ForgotPasswordForm = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.ForgotPassword,
    Error,
    Calls.IRequest.ForgotPassword
  >({
    mutationFn: async (variables) => await ApiCalls.ForgotPassword(variables),
    onSuccess: (r) => {
      message.success(r.msg);
    },
    onError: (e) => {
      message.error("Failed to reset password");
    },
  });

  const generateOTP = () => {
    const characters = "0123456789";
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return otp;
  };

  const onSubmit = async () => {
    const otp = generateOTP();
    const payload = {
      recipient_email: email,
      OTP: otp,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/send_recovery_email`,
        payload
      );
      console.log("OTP sent successfully:", response.data);
      // Save the OTP in state or for future comparison
      localStorage.setItem("otp", otp);
      router.push("/authentication/otp");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <Form form={form} onFinish={onSubmit} className="mt-4 flex flex-col gap-6">
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your email address",
          },
          {
            type: "email",
            message: "Please enter a valid email address",
          },
        ]}
      >
        <Input
          disabled={isPending}
          size="large"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Item>
      <div className="">
        <Button
          loading={isPending}
          className="flex items-center justify-center rounded-full"
          type="primary"
          htmlType="submit"
          size="large"
          block
        >
          {isPending ? <Spin /> : "Submit"}
        </Button>
      </div>
    </Form>
  );
};
