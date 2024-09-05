"use client";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Typography, message, Spin } from "antd";
import axios from "axios";

export default function AddUsers() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [ss_number, setSs_number] = useState("");

  const onSubmit = async (values: any) => {
    setIsPending(true);

    try {
      const payload = {
        email,
        password,
        first_name,
        last_name,
        state,
        zip_code,
        city,
        phone,
        dob,
        ss_number,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        payload
      );
      console.log("use registered  successfully:", response.data);
      router.push("/admin/active-users");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <section className="flex h-screen justify-center items-center bg-gray-100">
      <div className="rounded-lg flex flex-col items-center justify-start p-6 bg-white md:w-[700px] w-full max-w-[90%] h-auto">
        <Tooltip title="Back">
          <button
            onClick={() => router.back()}
            className="select-none flex flex-row items-center justify-start gap-2 rounded-lg w-[140px] h-[40px] mb-4"
          >
            <ArrowBackIcon />
            <p>Back</p>
          </button>
        </Tooltip>
        <div className="w-full">
          <Typography.Title level={4} className="text-center mb-4">
            Add New Users
          </Typography.Title>
          <Form
            form={form}
            onFinish={onSubmit}
            layout="vertical"
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item
                name="email"
                className="w-full md:w-[48%]"
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
                name="password"
                className="w-full md:w-[48%]"
                rules={[
                  { required: true, message: "Please enter your password" },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters long",
                  },
                ]}
              >
                <Input.Password
                  disabled={isPending}
                  size="large"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item
                name="first_name"
                className="w-full md:w-[48%]"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
              >
                <Input
                  disabled={isPending}
                  size="large"
                  placeholder="Enter First Name"
                  value={first_name}
                  onChange={(e) => {
                    setFirst_name(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                name="last_name"
                className="w-full md:w-[48%]"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
              >
                <Input
                  disabled={isPending}
                  size="large"
                  placeholder="Enter Last Name"
                  value={last_name}
                  onChange={(e) => {
                    setLast_name(e.target.value);
                  }}
                />
              </Form.Item>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item
                name="state"
                className="w-full md:w-[48%]"
                rules={[{ required: true, message: "Please enter your state" }]}
              >
                <Input
                  disabled={isPending}
                  size="large"
                  placeholder="Enter State"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                name="zip_code"
                className="w-full md:w-[48%]"
                rules={[
                  { required: true, message: "Please enter your zip code" },
                  { len: 5, message: "Zip code must be 5 digits long" },
                ]}
              >
                <Input
                  disabled={isPending}
                  size="large"
                  placeholder="Enter Zip Code"
                  value={zip_code}
                  onChange={(e) => {
                    setZip_code(e.target.value);
                  }}
                />
              </Form.Item>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item
                name="city"
                className="w-full md:w-[48%]"
                rules={[{ required: true, message: "Please enter your city" }]}
              >
                <Input
                  disabled={isPending}
                  size="large"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                name="phone"
                className="w-full md:w-[48%]"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  { len: 10, message: "Phone number must be 10 digits long" },
                ]}
              >
                <Input
                  disabled={isPending}
                  size="large"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Form.Item>
            </div>

            <Form.Item
              name="dob"
              className="w-full"
              rules={[
                { required: true, message: "Please enter your date of birth" },
              ]}
            >
              <Input
                disabled={isPending}
                size="large"
                type="date"
                placeholder="Enter Date of Birth"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              name="ss_number"
              className="w-full"
              rules={[
                {
                  required: true,
                  message: "Please enter your social security number",
                },
                {
                  pattern: /^\d{3}-\d{2}-\d{4}$/,
                  message: "Invalid SSN format",
                },
              ]}
            >
              <Input
                disabled={isPending}
                size="large"
                placeholder="Enter Social Security Number"
                value={ss_number}
                onChange={(e) => {
                  setSs_number(e.target.value);
                }}
              />
            </Form.Item>

            <div className="w-full">
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
        </div>
      </div>
    </section>
  );
}
