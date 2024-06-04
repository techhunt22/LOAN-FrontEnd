"use client"
import React, { useState } from 'react';
import { Button, Radio, Typography, Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

export const OneCheckout = () => {
    const [open, setOpen] = useState(false);
    const [paymentType, setPaymentType] = useState<string>('');

    const handleOpen = () => setOpen(!open);

    const onClickPayment = () => {
        console.log(paymentType);
    };

    return (
        <>
            <Button onClick={handleOpen} type="primary">
                Open Dialog
            </Button>

            <Modal
                title="Express Checkout"
                visible={open}
                onCancel={handleOpen}
                footer={null}
            >
                <div className="w-full flex flex-col gap-8">
                    <Radio.Group
                        onChange={(e) => setPaymentType(e.target.value)}
                        value={paymentType}
                    >
                        <Radio value="full">
                            <div>
                                <Typography.Text type="danger">
                                    Full Payment
                                </Typography.Text>
                                <Paragraph type="secondary">
                                    Take advantage of our exclusive discount by
                                    making the full payment today! Enjoy savings
                                    and hassle-free transactions.
                                </Paragraph>
                            </div>
                        </Radio>
                        <Radio value="emi">
                            <div>
                                <Typography.Text type="danger">
                                    EMI Payment
                                </Typography.Text>
                                <Paragraph type="secondary">
                                    Enjoy flexibility with EMI payments. Split
                                    your purchase into easy monthly
                                    installments for added convenience.
                                </Paragraph>
                            </div>
                        </Radio>
                    </Radio.Group>

                    <div className="p-4 rounded-md border-2 border-gray-100 w-full">
                        <Typography.Text strong>Billing Details</Typography.Text>
                        <div className="mt-2">
                            <div className="w-full flex flex-col gap-2">
                                <div className="w-full flex justify-between">
                                    <Typography.Text strong>Plan 1</Typography.Text>
                                    <Typography.Text>$200.99</Typography.Text>
                                </div>
                                <div className="w-full flex justify-between">
                                    <Typography.Text strong>Tax</Typography.Text>
                                    <Typography.Text>12%</Typography.Text>
                                </div>
                                <div className="w-full flex justify-between">
                                    <Typography.Text strong>Grand Total</Typography.Text>
                                    <Typography.Text>$200.99</Typography.Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <Button onClick={handleOpen}>Cancel</Button>
                    <Button
                        disabled={!paymentType}
                        type="primary"
                        onClick={onClickPayment}
                    >
                        Make Payment
                    </Button>
                </div>
            </Modal>
        </>
    );
};


// <div className={"w-full flex flex-col gap-8"}>
//   <Radio
//       checked={form.paymentType}
//       onChange={(e) => {
//         form.set("paymentType", e.target.checked);
//       }}
//       color={"blue"}
//       name="description"
//       label={
//         <div>
//           <Typography
//               color="blue-gray"
//               className="w-fit flex flex-row gap-2 font-semibold"
//           >
//             Full Payment
//             <Chip
//                 variant={"gradient"}
//                 size={"sm"}
//                 color="red"
//                 value="20% Discount"
//             />
//           </Typography>
//           <Typography color="gray" className="text-[12px] font-normal">
//             Take advantage of our exclusive discount by making the full
//             payment today! Enjoy savings and hassle-free transactions.
//           </Typography>
//         </div>
//       }
//       containerProps={{
//         className: "-mt-5",
//       }}
//       crossOrigin={undefined}
//   />
//   <Radio
//       checked={form.paymentType}
//       onChange={(e) => {
//         form.set("paymentType", e.target.checked);
//       }}
//       color={"blue"}
//       name="description"
//       label={
//         <div>
//           <Typography
//               color="blue-gray"
//               className="flex flex-row gap-2 font-semibold"
//           >
//             Emi Payment
//             <Chip
//                 variant={"gradient"}
//                 size={"sm"}
//                 color="green"
//                 value="3 Easy Emi"
//             />
//           </Typography>
//           <Typography color="gray" className="text-[12px] font-normal">
//             Enjoy flexibility with EMI payments. Split your purchase
//             into easy monthly installments for added convenience.
//           </Typography>
//         </div>
//       }
//       containerProps={{
//         className: "-mt-5",
//       }}
//       crossOrigin={undefined}
//   />
//
//   <div
//       className={
//         "p-4 rounded-md border-2 border-gray-100  w-full h-auto"
//       }
//   >
//     <Typography
//         variant={"paragraph"}
//         color="blue-gray"
//         className="font-semibold"
//     >
//       Billing
//     </Typography>
//     <div className={"mt-2"}>
//       <div className={"w-full flex flex-col gap-2  "}>
//         <div className={"w-full flex flex-row justify-between  "}>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             Plan 1
//           </Typography>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             $200.99
//           </Typography>
//         </div>
//         <div className={"w-full flex flex-row justify-between  "}>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             Tax
//           </Typography>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             12%
//           </Typography>
//         </div>
//         <div className={"w-full flex flex-row justify-between  "}>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             Grand Total
//           </Typography>
//           <Typography
//               variant={"small"}
//               color="blue-gray"
//               className="font-medium"
//           >
//             $200.99
//           </Typography>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
