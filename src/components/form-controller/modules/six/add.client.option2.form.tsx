"use client";
import Card from "@/components/admin/card";
// @ts-ignore
import { SearchOutlined } from "@ant-design/icons";
import { FilterOutlined } from "@ant-design/icons";
import { RiseOutlined } from "@ant-design/icons";

export const AddClientOption2Form = () => {
  return (
    <>
      <section className="w-full h-full pt-10">
        <div className="w-full h-max py-2 flex items-center justify-between px-3">
          <h1 className="text-[#686666] font-bold text-[50px]">
            Active Disputes
          </h1>
          <div className=" w-[50%]  flex items-center justify-start gap-4">
            <button className="w-[150px] h-[50px] border-[#737373] border-[1px] rounded-full">
              Sort By Filter <FilterOutlined className="text-[#1380FF]" />{" "}
            </button>
            <div className="flex items-center gap-2">
              <SearchOutlined className="text-[#2D264B]" />
              <input
                type="text"
                className="outline-none w-[150px]"
                placeholder="Search"
              />
              <button className="text-white bg-gradient-to-b from-[#1380FF] to-[#8ECAE6] w-[130px] h-[50px] rounded-full">
                Find Disputes
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-max  ml-3 py-2 flex gap-4 items-center ">
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};
