import { RiseOutlined } from "@ant-design/icons"

export default function Card1(){
    return(
        <>
   <div className="card bg-[#F5F6F7] w-[300px] justify-center h-[150px] rounded-lg shadow-md flex items-center">
            <div className="flex flex-col">
              <p className="text-[#333333] text-[16px]">Active Members</p>
              <p className="text-[#333333] text-[24px] font-bold">304</p>
              <p className="text-[#a3a3a3] text-[9px]">
                Increase from previous months
              </p>
            </div>
            <div className="flex items-center gap-[-10px] ">
              <div className="w-[30px] h-[30px] rounded-full bg-black"/>
              <div className="w-[30px] h-[30px] rounded-full bg-black"/>
              <div className="w-[30px] h-[30px] rounded-full bg-black"/>
              <div className="w-[30px] h-[30px] rounded-full bg-black"/>
            </div>
          </div>
        
        </>
    )
}