import React from 'react';
import { Button, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';

interface OnboardButtonProps {
    isPending: boolean;
    formId: string;
    buttonText: string;
}

export const OnboardButton: React.FC<OnboardButtonProps> = (props) => {
    const router = useRouter();
    const pathName = usePathname(); 

    const handleOnClick = () => {
        if (pathName === '/onboarding/pcr/sign-up') {
            console.log(pathName);
        } else {
            return null;
        }
    };

    return (
        <>
            <Button
                onClick={() => router.back()}
                className="md:text-[16px] text-[13px] md:w-[20%] w-full rounded-full"
                size="large"
                type="default"
            >
                <ArrowLeftOutlined /> Cancel
            </Button>
            <Button
                onClick={handleOnClick}
                className="flex flex-row items-center justify-center md:text-[16px] text-[13px] bg-[#137FFF] md:w-[20%] w-full rounded-full"
                disabled={props.isPending}
                loading={props.isPending}
                size="large"
                form={props.formId}
                type="primary"
            >
                {props.buttonText}
            </Button>
        </>
    );
};
