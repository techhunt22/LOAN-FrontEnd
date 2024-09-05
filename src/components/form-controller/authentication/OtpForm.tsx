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

export default function OtpForm() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (values: any) => {
    setIsPending(true);
    try {
      const storedOtp = localStorage.getItem("otp");
      if (storedOtp === values.otp) {
        console.log("OTP verified, proceed with password change", values);
        try {
          const payload = {
            email: email,
            newPassword: password,
          };
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/update-password`,
            payload
          );
          console.log("OTP sent successfully:", response.data);
          router.push("/authentication/sign-in");
        } catch (error) {
          console.error("Error sending OTP:", error);
        }

        message.success("OTP verified! Password changed successfully.");
      } else {
        message.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error during submission", error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
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
      <Form.Item
        name="otp"
        rules={[
          {
            required: true,
            message: "Please enter the OTP",
          },
          {
            len: 6,
            message: "OTP must be exactly 6 characters long",
          },
        ]}
      >
        <Input
          disabled={isPending}
          size="large"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your new password",
          },
          {
            min: 6,
            message: "Password must be at least 6 characters long",
          },
        ]}
      >
        <Input.Password
          disabled={isPending}
          size="large"
          placeholder="Enter New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
}
