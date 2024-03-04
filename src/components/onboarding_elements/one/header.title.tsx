"use client";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";

export const HeaderTitle = () => {
  const { title, description } = usePCR().page();

  return (
    <div
      className={
        "w-[75%] flex flex-col items-center justify-center text-center rounded-[18px] bg-gray-100  p-4 h-[160px]"
      }
    >
      {title}
      {description}
    </div>
  );
};
