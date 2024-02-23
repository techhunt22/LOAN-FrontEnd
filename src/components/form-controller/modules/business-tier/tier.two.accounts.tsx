"use client";
// @ts-ignore
import React from "react";
import { MonitorCardGroup } from "@/components/cards/monitor.card.group";
import Link from "next/link";

const monitorCardGroup = [
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-credable.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-uline.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-brex.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-murphy.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-kum&go.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-grainger.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-credable.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-uline.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-brex.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-murphy.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-kum&go.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-grainger.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-credable.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-uline.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-brex.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-murphy.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-kum&go.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
  {
    price: "49.95",
    recommeded: true,
    icon: "/monitor/vc-grainger.svg",
    contents:
      [
        {
          record: "D&B and Experian and Equifax",
        },
        {
          record: "One TimePayment Only",
        },
        {
          record: "No Personal Guarantee Required",
        },
        {
          record: "Net will be only $30",
        },
      ]
  },
]

export const TierTwoAccounts = () => {
  return (
    <>
      <div className="flex flex-col w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">
          <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
            {/* Card group */}
              <MonitorCardGroup paymentContents={monitorCardGroup} />

            {/* show button */}
            <div className="flex w-full my-20 justify-center items-center content-center">
              <Link href="/step7/page3-full"><button><img src="/monitor/bt-showmore.svg" alt="" className=" flex w-36 h-36 " /></button></Link>
            </div>
          </div>
      </div>
    </>
  );
};
