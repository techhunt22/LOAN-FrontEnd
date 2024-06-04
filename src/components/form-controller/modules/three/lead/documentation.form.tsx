"use client"
import { Form, Input, Button, Typography, Checkbox, Upload } from 'antd';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Calls } from '@/api/calls/type';
import { ApiCalls } from '@/api/calls/calls';
import { handleFormError } from '@/utils/error';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export const DocumentationDetailsForm = () => {
    const router = useRouter();
    const [form] = Form.useForm();
    const searchParams = useSearchParams();

    const { mutateAsync, isPending } = useMutation<
        Calls.IResponse.IBusinessFundingDocumentation,
        Error,
        Calls.IRequest.IBusinessFundingDocumentation
    >({
        mutationFn: (variables) => ApiCalls.Module.three.Documentation(variables),
        onSuccess: (res) => {
            router.push(`/done?id=${searchParams.get('id')}`);
        },
        onError: (e) => handleFormError(e as any, form),
    });

    const onFinish = async (values: any) => {
        await mutateAsync(values);
    };

    return (
        <Form form={form} onFinish={onFinish} className={'p-[16px] w-full h-full'}>
            <Typography.Paragraph className={'px-[16px] text-center'}>
                Please fill all Loan Details in the required field and one of our agents will contact you within 24 hours
            </Typography.Paragraph>
            <div className={'flex flex-col gap-11 mt-12 justify-between'}>
                <div className={'flex flex-col items-center gap-y-8'}>
                    <div className={'w-full'}>
                        <h4>Upload Business bank statement of last 4 month</h4>
                        <Form.Item
                            name="bankStatement"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e && e.fileList}
                        >
                            <Upload
                                name="logo"
                                action="/upload.do"
                                listType="picture"
                            >
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                    </div>
                </div>
                <div className={'w-full flex flex-col items-center gap-y-8 md:gap-3.5'}>
                    <h3 className={'text-xl font-medium'}>Terms and conditions</h3>
                    <div className={'w-full h-[200px] space-y-2 overflow-y-auto'}>
                       
                    <div className={"w-full"}>
              <h4 className={"font-medium"}>Loan Amount and Interest Rate</h4>
              <p>
                Specify the amount of funding being provided and the interest
                rate that will apply to the loan or investment.
              </p>
            </div>
            <div className={"w-full"}>
              <h4 className={"font-medium"}>Repayment Terms</h4>
              <p>
                Define the terms for repaying the funding, including the
                repayment schedule, frequency, and method (e.g., monthly
                installments).
              </p>
            </div>
            <div className={"w-full"}>
              <h4 className={"font-medium"}>Use of Funds</h4>
              <p>
                Clearly outline the purpose for which the funds can be used.
                This could include working capital, equipment purchase,
                expansion, etc.
              </p>
            </div>
        
































































                    </div>
                </div>
                <div className={'flex flex-col items-center gap-y-8'}>
                    <div className={'w-full'}>
                        <h4>Upload Original Signature</h4>
                        <Form.Item
                            name="signature"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e && e.fileList}
                        >
                            <Upload
                                name="logo"
                                action="/upload.do"
                                listType="picture"
                            >
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                    </div>
                </div>
                <div className={'flex flex-col items-center gap-y-8'}>
                    <Form.Item

                        name="ownership"
                        rules={[{ required: true, message: 'Please input your ownership percentage!' }]}
                    >
                        <Input
                            placeholder="Ownership %"
                            type="number"
                            className='w-[300px]'
                        />
                    </Form.Item>
                </div>
                <div className={'w-full'}>
                    <Form.Item name="tAndC" valuePropName="checked" initialValue={false}>
                        <Checkbox>
                            <Typography.Text type="secondary">By clicking the submit button, I agree to the terms & condition.</Typography.Text>
                        </Checkbox>
                    </Form.Item>
                </div>
            </div>
            <Form.Item>
                <Button type="primary" htmlType="submit" className='w-full bg-red-500' loading={isPending}>
                    Next
                </Button>
                <Button
                className='w-full border-red-500 text-red-500 mt-4'
                    type="default"
                    onClick={() => router.back()}
                    style={{ marginLeft: 8 }}
                >
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};
