import Link from "next/link";
import { TeamOutlined } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons";
import { AppstoreAddOutlined } from "@ant-design/icons";

function Sider(){
    return(
        <>
        <div className="w-[15%] min-h-screen  border-r-2 border-gray-300 bg-[#FCFCFC] flex flex-col  gap-[140px] items-center pt-10">
            <div className="profile w-[300px] h-[150px]  bg-[#F5F6F7] rounded-2xl flex items-center justify-center  gap-4">
                <div className="img w-[70px] h-[72px] bg-black rounded-full">

                </div>
                <div className="content flex flex-col gap-1 ">
                    <p className="text-[#333333] text-[20px]">Julia Marcos</p>
                    <p className="text-[#A3A3A3] text-[12px]">Managing Director</p>
                </div>
            </div>

              <div className="flex flex-col gap-10">
              <Link href={''} className="text-[#686666] text-[16px] flex gap-4 items-center"> <TeamOutlined className="text-[35px]"/> Teams</Link>
                <Link href={''}  className="text-[#686666] text-[16px] flex gap-4 items-center" ><UserAddOutlined className="text-[35px]" /> Active User </Link>
                <Link href={''} className="text-[#686666] text-[16px] flex gap-4 items-center"><AppstoreAddOutlined  className="text-[35px]"/> Active Disputes</Link>

              </div>
        </div>
        </>
    )
}
export default Sider;
