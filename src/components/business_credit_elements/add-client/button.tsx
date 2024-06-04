"use client";
import { Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React from "react";
import { usePathname, useRouter } from "next/navigation";
interface AddClientButtonProps {
  isPending: boolean;
  formId: string;
  buttonText: string;
}
export const AddClientButton: React.FC<AddClientButtonProps> = (props) => {
  const router = useRouter();
  const pathName = usePathname();
  const handleOnClick = () => {
    if (pathName === "/onboarding/pcr/sign-up") {
      console.log(pathName);
    } else {
      return null;
    }
  };

  return (
    <>
      <Button
  onClick={handleOnClick}
  className={
    `flex flex-row items-center justify-center ${
      props.isPending ? 'opacity-50 cursor-not-allowed' : ''
    } md:text-[16px] text-[13px] bg-[#137FFF] md:w-[80%] w-full`
  }
  disabled={props.isPending}
  type="primary"
  size="large"
  form={props.formId}
  htmlType="submit"
>
  {props.isPending ? (
    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  ) : (
    props.buttonText
  )}
</Button>
    
    </>
  );
};
