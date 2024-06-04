"use client"
import { Form, Input, Button, Typography, Select } from 'antd';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Calls } from '@/api/calls/type';
import { ApiCalls } from '@/api/calls/calls';
import { handleFormError } from '@/utils/error';

const { Option } = Select;

export const LoanDetailsForm = () => {
    const router = useRouter();
    const [form] = Form.useForm();
    const searchParams = useSearchParams();

    const { mutateAsync, isPending } = useMutation<
        Calls.IResponse.IBusinessFundingLoanDetails,
        Error,
        Calls.IRequest.IBusinessFundingLoanDetails
    >({
        mutationFn: (variables) => ApiCalls.Module.three.LoanDetails(variables),
        onSuccess: (res) => {
            router.push(`/leads/business-funding/documentation?id=${searchParams.get('id')}`);
        },
        onError: (e) => handleFormError(e as any, form),
    });

    const onFinish = async (values: any) => {
        await mutateAsync(values);
    };

    return (
        <Form form={form} onFinish={onFinish} className={'p-[16px] w-full h-full'}>
            <Typography.Paragraph className={'px-[16px] text-center text-[22px]'}>
                Please fill all Loan Details in the required field and one of our agents will contact you within 24 hours
            </Typography.Paragraph>
            <div className={'flex flex-col gap-11 mt-12 justify-between w-full h-full  items-center '}>
                <div className={'flex flex-col md:flex-row items-center gap-y-8 md:gap-3.5'}>
                    <Form.Item
                        name="loanAmount"
                        rules={[{ required: true, message: 'Please select the loan amount!' }]}
                    >
                        <Select placeholder="Loan Amount Requested ($)">
                            {["10,000", "20,000", "50,000+"].map((value, index) => (
                                <Option key={index} value={value.toLowerCase()}>
                                    {value}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="useOfFunds"
                        rules={[{ required: true, message: 'Please select the use of funds!' }]}
                    >
                        <Select placeholder="Use Of Funds">
                            {["test", "test2", "test3"].map((value, index) => (
                                <Option key={index} value={value.toLowerCase()}>
                                    {value}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>
                <div className={'flex flex-col md:flex-row items-center gap-y-8 md:gap-3.5'}>
                    <Form.Item
                        name="avgMonthlyRevenue"
                        rules={[{ required: true, message: 'Please input the average monthly revenue!' }]}
                    >
                        <Input placeholder="Average Monthly Revenue" type="number" />
                    </Form.Item>
                    <Form.Item
                        name="desiredProduct"
                        rules={[{ required: true, message: 'Please select the desired product!' }]}
                    >
                        <Select placeholder="Desired Product">
                            {["test", "test1", "test2", "test3"].map((value, index) => (
                                <Option key={index} value={value.toLowerCase()}>
                                    {value}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>
                <div className={'flex flex-col md:flex-row items-center gap-y-8 md:gap-3.5'}>
                    <Form.Item
                        name="existingLoan"
                        rules={[{ required: true, message: 'Please select whether you have existing loan balances!' }]}
                    >
                        <Select placeholder="Existing Loan Balances">
                            {["Yes", "No"].map((value, index) => (
                                <Option key={index} value={value}>
                                    {value}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="balance"
                        rules={[{ required: true, message: 'Please input the balance!' }]}
                    >
                        <Input placeholder="Balance" type="number" />
                    </Form.Item>
                </div>
            </div>
            <Form.Item className='w-full h-full flex flex-col items-center'>
                <Button className='w-full bg-red-500' type="primary" htmlType="submit" loading={isPending}>
                    Next
                </Button>
                <Button
                className='w-full text-red-400 border-red-400 mt-4'
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
