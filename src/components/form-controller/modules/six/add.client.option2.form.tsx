"use client";
import Card from "@/components/admin/card"
import Card1 from "@/components/admin/Card1"
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
        <div className="w-full h-max   py-2 flex gap-4 items-center flex-wrap px-4 ">
          <Card  />
          <Card />
          <Card1/>
           
           
        </div>
        
        <div className="w-full h-full flex mt-10">
          <div className="div1 w-[70%] h-full  flex flex-col items-center">
            <div className="graph w-[80%] h-[600px] rounded-xl bg-white shadow-md "></div>
            <div>

            </div>

          </div>
          <div className="div2 w-[30%] h-[500px] bg-orange-200"></div>

        </div>

        
      </section>
    </>
  );
};
