"use client";
// @ts-ignore
import useForm from "new-react-use-form";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card } from "iconsax-react";

interface Option {
    label: string;
}

export const PaymentsPaymentForm = () => {
    const router = useRouter();

    const form = useForm({
        cardType: "",
        cardHolderNumber: "",
        creditCardNumber: "",
        expireDateMonth: "",
        expireDateYear: "",
        cvv: "",
    });

    return (
        <form
            id={"proceed-pay"}
            className={
                "  flex flex-col h-fit justify-center items-center  md:px-8 px-[16px] w-full mb-24"
            }
        >
            <div
                className={
                    "mt-6 h-fit flex flex-col justify-center items-center gap-8 md:w-full w-full"
                }
            >
                <div className={"w-full mt-4"}>
                    <label className="flex text-xl mb-2">Card Type</label>
                    <TextField
                        select={true}
                        disabled={form.busy}
                        variant="outlined"
                        value={form.cardType}
                        onChange={(e) => {
                            form.set("cardType", e.target.value);
                            form.errors.clear("cardType");
                        }}
                        color="primary"
                        placeholder="Americal Express"
                        error={form.errors.has("cardType")}
                        helperText={
                            form.errors.has("cardType") && form.errors.get("cardType")
                        }
                        InputProps={{ sx: { borderRadius: '999px', fontSize: '1rem', px: '2rem', color: 'blue' } }}
                    >
                        <MenuItem value={"male"}>American Express</MenuItem>
                        <MenuItem value={"female"}>PayPal</MenuItem>
                        <MenuItem value={"other"}>PayOnner</MenuItem>
                    </TextField>
                </div>
                <div className={"w-full mt-4"}>
                    <label className="flex text-xl mb-2">Card Holder Number<span className="text-lg text-gray-400">&nbsp;&nbsp; Optional</span></label>
                    <TextField
                        disabled={form.busy}
                        variant="outlined"
                        value={form.cardHolderNumber}
                        onChange={(e) => {
                            form.set("cardHolderNumber", e.target.value);
                            form.errors.clear("cardHolderNumber");
                        }}
                        placeholder="Name On Credit Debit Card"
                        error={form.errors.has("cardHolderNumber")}
                        helperText={
                            form.errors.has("cardHolderNumber") && form.errors.get("cardHolderNumber")
                        }
                        InputProps={{ sx: { borderRadius: '999px', fontSize: '1rem', px: '2rem' } }}
                    />
                </div>
                <div className={"w-full mt-4"}>
                    <label className="flex text-xl mb-2">Credit Card Number</label>
                    <TextField
                        disabled={form.busy}
                        variant="outlined"
                        value={form.creditCardNumber}
                        onChange={(e) => {
                            form.set("creditCardNumber", e.target.value);
                            form.errors.clear("creditCardNumber");
                        }}
                        placeholder="XXXX   XXXX   XXXX   XXXX"
                        error={form.errors.has("creditCardNumber")}
                        helperText={
                            form.errors.has("creditCardNumber") && form.errors.get("creditCardNumber")
                        }
                        InputProps={{
                            sx: { borderRadius: '999px', fontSize: '1rem', px: '2rem' },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Card />
                                </InputAdornment>
                            ),
                        }}

                    />
                </div>
                <div className={"w-full mt-4"}>

                    <div className=" flow-root justify-between w-full">

                        <div className=" float-left w-max">
                            <label className="flex text-xl mb-2">Expire Date</label>
                            <div className="flex flex-row">
                                <div className="flex w-32">
                                    <TextField
                                        disabled={form.busy}
                                        variant="outlined"
                                        value={form.expireDateMonth}
                                        onChange={(e) => {
                                            form.set("expireDateMonth", e.target.value);
                                            form.errors.clear("expireDateMonth");
                                        }}
                                        placeholder="MM"
                                        error={form.errors.has("expireDateMonth")}
                                        helperText={
                                            form.errors.has("expireDateMonth") && form.errors.get("expireDateMonth")
                                        }
                                        InputProps={{ sx: { borderRadius: '999px', fontSize: '1rem', px: '2rem' } }}
                                    />
                                </div>
                                <div className="flex w-40 ml-6">
                                    <TextField
                                        disabled={form.busy}
                                        variant="outlined"
                                        value={form.expireDateYear}
                                        onChange={(e) => {
                                            form.set("expireDateYear", e.target.value);
                                            form.errors.clear("expireDateYear");
                                        }}
                                        placeholder="YYYY"
                                        error={form.errors.has("expireDateYear")}
                                        helperText={
                                            form.errors.has("expireDateYear") && form.errors.get("expireDateYear")
                                        }
                                        InputProps={{ sx: { borderRadius: '999px', fontSize: '1rem', px: '2rem' } }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" float-right">
                            <label className="flex text-xl mb-2">CVV</label>
                            <TextField
                                disabled={form.busy}
                                variant="outlined"
                                value={form.stateProvince}
                                onChange={(e) => {
                                    form.set("stateProvince", e.target.value);
                                    form.errors.clear("stateProvince");
                                }}
                                placeholder="123"
                                error={form.errors.has("stateProvince")}
                                helperText={
                                    form.errors.has("stateProvince") && form.errors.get("stateProvince")
                                }
                                InputProps={{ 
                                    sx: { borderRadius: '999px', fontSize: '1rem', px: '2rem' },
                                    endAdornment: (
                                        <InputAdornment position="end" >
                                            <Card />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>
                    </div>

                </div>
                
                <div className=" flow-root w-full px-6 mt-16">
                    <p className=" float-left text-gray-400 text-lg">Subtotal</p>
                    <p className=" float-right font-bold text-xl">$1997</p>
                </div>
                <hr className="flex border-t-2 w-full border-gray-200 mt-[-1.5rem]" />
                <div className=" flow-root w-full px-6  mt-[-1.5rem]">
                    <p className=" float-left text-gray-400 text-lg">Total</p>
                    <p className=" float-right font-bold text-xl">$1997</p>
                </div>
                <div className="flex w-full justify-center mt-8">
                    <Link href="#" className="w-[95%]">
                        <Button
                            sx={{
                                borderRadius: '999px',
                                fontSize: '1.5rem'
                            }}
                        >PAY NOW</Button>
                    </Link>
                </div>

            </div>
        </form>
    );
};
