
"use client";
// import { Input, Button, Typography } from "@material-tailwind/react";
import { Typography,Button,Input } from "antd";
import { useRouter } from "next/navigation";
// @ts-ignore
import useForm from "new-react-use-form";
import { FormEventHandler } from "react";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { handleFormError } from "@/utils/error";
export const LeadForm = () => {
  const router = useRouter();
  const { Title, Paragraph, Text } = Typography;
  const Form = useForm({
    companyName: "",
    ownerName: "",
    email: "",
    phone: "",
    budget: null,
    days: null,
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.LeadRequestFour,
    Error,
    Calls.IRequest.LeadRequestFour
  >({
    mutationFn: (variables) => ApiCalls.Module.four.lead(variables),
    onSuccess: (res) => {
      router.push("/done");
    },
    onError: (e) => handleFormError(e as any, Form),
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(Form.data());
  };
  return (
    <form onSubmit={onSubmit} className="p-16 w-full h-full ">
    <Title level={2} className="text-center">
      Request For Digital Marketing
    </Title>
    <div className="mt-12 flex flex-col gap-8">
      <div>
       
        <Input
          value={Form.companyName}
          onChange={(e) => {
            Form.set('companyName', e.target.value);
            Form.errors.clear('companyName');
          }}
          required
          className="w-full outline-none  "
         
          placeholder="Enter legal name of company"
          addonAfter={Form.errors.has('companyName') && <Text type="danger">{Form.errors.get('companyName')}</Text>}
        />
      </div>
      <Input
        value={Form.ownerName}
        onChange={(e) => {
          Form.set('ownerName', e.target.value);
        }}
        required
        className="w-full"
        placeholder="Enter registered owner name"
      />
      <Input
        value={Form.email}
        onChange={(e) => {
          Form.set('email', e.target.value);
        }}
        required
        className="w-full"
        type="email"
        placeholder="Enter email address"
      />
      <Input
        value={Form.phone}
        onChange={(e) => {
          Form.set('phone', e.target.value);
        }}
        required
        className="w-full"
        type="tel"
        placeholder="Enter contact phone number"
      />
      <Input
        value={Form.days}
        onChange={(e) => {
          Form.set('days', Number(e.target.value));
        }}
        required
        className="w-full"
        type="number"
        placeholder="Enter the duration of the campaign"
      />
      <Input
        value={Form.budget}
        onChange={(e) => {
          Form.set('budget', Number(e.target.value));
        }}
        required
        className="w-full"
        type="number"
        placeholder="Enter your budget"
      />
      <div className="flex flex-col space-y-4">
        <Button type="primary" htmlType="submit"  className="w-full bg-red-400 font-bold ">
          Submit
        </Button>
        <Button onClick={() => router.push('/')} className="w-full border-red-400 text" type="default">
          Back
        </Button>
      </div>
    </div>
  </form>
  );
};