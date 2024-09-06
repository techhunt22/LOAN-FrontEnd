"use client";
// @ts-ignore
import useForm from "new-react-use-form";
import {
  Timeline,
  Typography,
  Popover,
  Form,
  Button,
  Upload,
  message,
} from "antd";
import { useEffect, useLayoutEffect } from "react";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useMutation } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import { useRouter } from "next/navigation";
import { UploadOutlined } from "@ant-design/icons";
import { useDocsUpload } from "@/context/ImageContext";
import axios from "axios";

export const DocsUpload = () => {
  const router = useRouter();
  const {
    SetActiveTab,
    SetFormID,
    SetButtonText,
    SetIsPending,
    SetMobileH4,
    SetMobileText,
    SetMobileValue,
  } = usePCR();
  const { files, setFile } = useDocsUpload(); // Use the context

  const form = useForm({
    photo_ID: files.photo_ID,
    proof_of_address: files.proof_of_address,
    photo_of_SSID: files.photo_of_SSID,
    // identityCard2: files.identityCard2,
    // socialSecurityCard2: files.socialSecurityCard2,
  });

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.DocsUploads,
    Error,
    Calls.IRequest.Docs
  >({
    mutationFn: (variables) => ApiCalls.Module.one.docs(variables),
    onSuccess: (r) => {
      message.success(r.msg);
      if (r?.urlPath != null) {
        router.replace(r?.urlPath);
      }
    },
    onError: (e) => {
      message.error(e?.message);
    },
  });

  const onSubmit = async () => {
    checkInputError();
    const data = form.data();

    if (
      data.photo_ID !== null &&
      data.proof_of_address !== null &&
      //   data.socialSecurityCard2 !== null &&
      //   data.identityCard2 !== null &&
      data.photo_of_SSID !== null
    ) {
      // Prepare FormData
      const formData = new FormData();
      formData.append("photo_ID", data.photo_ID);
      formData.append("proof_of_address", data.proof_of_address);
      formData.append("photo_of_SSID", data.photo_of_SSID);
      //   formData.append("identityCard2", data.identityCard2);

      //   formData.append("socialSecurityCard2", data.socialSecurityCard2);

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/doc`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        message.success(response.data.msg);
        if (response.data?.urlPath != null) {
          router.replace(response.data?.urlPath);
        }
      } catch (error) {
        // message.error(error?.message || 'An error occurred');
        console.log(error);
      }
    }
  };

  const checkInputError = () => {
    const data = form.data();
    if (data.photo_ID === null) {
      form.errors.set("photo_ID", "photo_ID is required");
    }
    if (data.proof_of_address === null) {
      form.errors.set("proof_of_address", "proof_of_address is required");
    }
    if (data.photo_of_SSID === null) {
      form.errors.set("photo_of_SSID", "photo_of_SSID is required");
    }
    // if (data.identityCard2 === null) {
    //   form.errors.set("identityCard2", "identityCard2 is required");
    // }
    // if (data.socialSecurityCard2 === null) {
    //   form.errors.set("socialSecurityCard2", "socialSecurityCard2 is required");
    // }
  };

  useLayoutEffect(() => {
    SetActiveTab(4);
    SetFormID("docs-upload");
    SetButtonText("Upload & Next");
    SetMobileH4("Upload verification IDs");
    SetMobileText("5/6");
    SetMobileValue(90);
  }, []);

  useEffect(() => {
    SetIsPending(isPending);
  }, [isPending]);

  const uploadProps = (field: string) => ({
    beforeUpload: (file: File) => {
      setFile(field, file); // Update context state
      form.set(field, file);
      form.errors.clear(field);
      return false; // Prevent automatic upload
    },
  });

  const timelineItems = [
    {
      children: (
        <>
          <Popover
            content={
              <div>
                <p>This could be :</p>
                <p>Driving license</p>
                <p>State ID card</p>
                <p>Other government issued photo ID card</p>
              </div>
            }
          >
            <Typography.Text className="cursor-pointer h-3">
              Upload your identity proof
            </Typography.Text>
          </Popover>
          <div className="mt-2 pb-8">
            <div className="w-[100%] flex flex-row gap-4 justify-center mt-6">
              <div className="flex flex-col w-full justify-center content-center items-center text-center">
                <div className="drop_box">
                  <h4 className="text-[18px] font-semibold">Front Side</h4>
                  <Upload {...uploadProps("photo_ID")}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  {form.errors.has("photo_ID") && (
                    <span className="error">{form.errors.get("photo_ID")}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full justify-center content-center items-center text-center">
                <div className="drop_box">
                  <h4 className="text-[18px] font-semibold">Back Side</h4>
                  <Upload {...uploadProps("identityCard2")}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  {form.errors.has("identityCard2") && (
                    <span className="error">
                      {form.errors.get("identityCard2")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      children: (
        <>
          <Popover
            content={
              <div>
                <p>This could be :</p>
                <p>Bank statement</p>
              </div>
            }
          >
            <Typography.Text className="cursor-pointer h-3">
              Upload your address proof
            </Typography.Text>
          </Popover>
          <div className="mt-2 pb-8">
            <div className="w-[100%] flex flex-row gap-4 justify-center mt-6">
              <div className="flex flex-col w-full justify-center content-center items-center text-center">
                <div className="drop_box">
                  <h4 className="text-[18px] font-semibold">Front Side</h4>
                  <Upload {...uploadProps("proof_of_address")}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  {form.errors.has("proof_of_address") && (
                    <span className="error">
                      {form.errors.get("proof_of_address")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      children: (
        <>
          <Popover
            content={
              <div>
                <p>This could be :</p>
                <p>Social security card</p>
              </div>
            }
          >
            <Typography.Text className="cursor-pointer h-3">
              Upload your social security card proof
            </Typography.Text>
          </Popover>
          <div className="mt-2 pb-8">
            <div className="w-[100%] flex flex-row gap-4 justify-center mt-6">
              <div className="flex flex-col w-full justify-center content-center items-center text-center">
                <div className="drop_box">
                  <h4 className="text-[18px] font-semibold">Front Side</h4>
                  <Upload {...uploadProps("photo_of_SSID")}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  {form.errors.has("photo_of_SSID") && (
                    <span className="error">
                      {form.errors.get("photo_of_SSID")}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full justify-center content-center items-center text-center">
                <div className="drop_box">
                  <h4 className="text-[18px] font-semibold">Back Side</h4>
                  <Upload {...uploadProps("socialSecurityCard2")}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  {form.errors.has("socialSecurityCard2") && (
                    <span className="error">
                      {form.errors.get("socialSecurityCard2")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <Form
      onFinish={onSubmit}
      id={"docs-upload"}
      className="mb-10 flex flex-col h-fit justify-center items-center md:px-8 px-[16px] w-full"
    >
      <div
        style={{
          boxShadow: "0px 0px 30px 6px rgb(30 30 30 / 10%)",
          borderBottomLeftRadius: "14px",
          borderBottomRightRadius: "14px",
          overflow: "auto",
        }}
        className="flex flex-col h-fit justify-center items-center px-[30px] pt-[128px] w-[78%]"
      >
        <h3 className="text-3xl font-semibold flex flex-col">
          We need Proof of Address
          <span className="font-medium text-base">
            It should be consistent with the address on your ID.
          </span>
        </h3>
        <div className="mt-6 h-fit flex md:flex-row flex-col items-start gap-8 w-full">
          <div style={{ borderRight: "1px solid rgb(207 216 220)" }}>
            <img src={"/module/file.png"} alt="File" />
            <h4 className="docs-list-title">MUST ADD THESE</h4>
            <div className="wrapper">
              <ul className="sessions flex flex-col gap-4 mt-4">
                <li className="main">
                  <div className="time">1st Item ( Photo ID) </div>
                  <div className="sub-header-title">This could be :</div>
                  <ul className="list-documentation">
                    <li>Driving license</li>
                    <li>State ID card</li>
                    <li>Other government issued photo ID card</li>
                  </ul>
                </li>
                <li className="main">
                  <div className="time">2nd Item (Proof of address)</div>
                  <div className="sub-header-title">This could be :</div>
                  <ul className="list-documentation">
                    <li>Bank statement</li>
                  </ul>
                </li>
                <li className="main">
                  <div className="time">3rd Item (Social security Card)</div>
                  <div className="sub-header-title">This could be :</div>
                  <ul className="list-documentation">
                    <li>Social security card</li>
                  </ul>
                </li>
                <div className="vl"></div>
              </ul>
            </div>
          </div>
          <Timeline items={timelineItems} className="md:w-[100%]" />
        </div>
      </div>
    </Form>
  );
};
