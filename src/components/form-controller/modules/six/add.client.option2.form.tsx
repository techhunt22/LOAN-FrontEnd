"use client";
import Card from "@/components/admin/card";
import Card1 from "@/components/admin/Card1";
import { Flex, Progress } from 'antd';

// @ts-ignore
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { FilterOutlined } from "@ant-design/icons";
import { FieldTimeOutlined  } from "@ant-design/icons";
import { SortAscendingOutlined } from "@ant-design/icons";
import { FileAddOutlined } from "@ant-design/icons";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { PlusCircleOutlined } from "@ant-design/icons";
import { SmallDashOutlined } from "@ant-design/icons";



export const AddClientOption2Form = () => {


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
       <>
          <h1 style={{ color: 'white' }} className="font-bold">ACTION NEEDED</h1>
          <p style={{ color: 'white' }} className="font-light">Once you’ve mailed your dispute letter, 
            make sure to mark your letter as SENT</p>
       </>
       
      ),
    },
  ];

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
          <Card />
          <Card />
          <Card1 />
        </div>

        <div className="w-full h-full flex mt-10">
          <div className="div1 w-[70%] h-full  flex flex-col items-center">
            <div className="graph w-[80%] h-[600px] rounded-xl bg-white shadow-md "></div>

            <div className="w-[80%] h-max py-2 mt-10 flex items-center justify-between">
              <h1 className="text-[20px] text-[#333333] font-semibold">
                Report
              </h1>
              {/* <div className="relative flex items-center">
      
                <select
                  name="sort"
                  id="s"
                  className="w-[200px] h-[40px] rounded-full bg-[#f4f4f4]"
                >
                  <option value="">Sort By</option>
                  <option value="newest"> <input type="text" /> Newest</option>
                 
                </select>
                <span className="absolute right-0 top-0 bottom-0 flex items-center pr-3 text-[16px] text-[#737373] font-light">
                  <SortAscendingOutlined className="text-[#1380ff] mr-4" />
                </span>
              </div> */}
            </div>

            <div className="w-[80%] h-[800px] flex flex-col mt-1 gap-4 items-center bg-white rounded-lg shadow-md">
                  <select name="this week" id="1" className="bg-[#F1F1F1] w-[100px] h-[30px] self-start rounded-full ml-2 mt-2">
                    <option value="This Week">This Week</option>
                    <option value="Yesterday">Yesterday</option>
                  </select>
                  <div className="name w-[80%] h-[100px] mt-2 bg-[#F6F7F8] flex items-center rounded-lg justify-center gap-2 flex-col">
                    <h1 className="text-[#181818] text-[20px]">John Blake</h1>
                    <p className="text-[#8F8F8F] text-[13px] font-light">missvanniel@gmail.com</p>

                  </div>
                  <div className="progress w-[50%] h-[100px] flex items-center bg-black">
                  

                  </div>

                  <div className="w-[25%] flex items-center h-max py-2 gap-2">
                    <div className="flex flex-col items-center gap-2">
                      <button className="w-[50px] h-[50px] rounded-lg bg-[#FFCC00] text-white">
                        <SearchOutlined className="text-xl"/>
                      </button>
                      <p className="text-[#333333] text-[10px] font-light">View Uploaded Report</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <button className="w-[50px] h-[50px] rounded-lg bg-[#88A8D3] text-white">
                        <FileAddOutlined className="text-xl"/>
                      </button>
                      <p className="text-[#333333] text-[10px] font-light">View Your Letter</p>
                    </div>

                  </div>

                  <div className="w-[80%] h-max py-2 flex items-center gap-8">
                   <div className="flex flex-col items-center gap-2">
                    <p className="text-[#333333] font-bold ">Reason</p>
                    <div className="w-[100px] h-[1px] bg-[#a3a3a3]"/>
                    <p className="text-[#a3a3a3] text-[14px]">Charge Off</p>
                    <div className="w-[100px] h-[2px] bg-[#333333]"/>
                  
                   </div>



                   <div className="flex flex-col items-center gap-2">
                    <p className="text-[#333333] font-bold ">Credit Furnisher</p>
                    <div className="w-[100px] h-[1px] bg-[#a3a3a3] "/>
                    <p className="text-[#a3a3a3] text-[14px]">Tmobile</p>
                    <div className="w-[120px] h-[2px] bg-[#333333]"/>
                  
                   </div>



                   <div className="flex flex-col items-center gap-2">
                    <p className="text-[#333333] font-bold ">Accounts</p>
                    <div className="w-[100px] h-[1px] bg-[#a3a3a3] "/>
                    <p className="text-[#a3a3a3] text-[14px]">39394</p>
                    <div className="w-[130px] h-[2px] bg-[#333333]"/>
                  
                   </div>




                   <div className="flex flex-col items-center gap-2">
                    <p className="text-[#333333] font-bold ">Letter Subject</p>
                    <div className="w-[100px] h-[1px] bg-[#a3a3a3] "/>
                    <p className="text-[#a3a3a3] text-[14px]">Bureau No Response</p>
                    <div className="w-[100px] h-[2px] bg-[#333333]"/>
                  
                   </div>

                  </div>


                  <div className="w-[80%] h-max py-2 flex flex-col gap-2">
                    <h1 className="text-[#333333] text-[16px] font-bold">Instructions</h1>
                    <div className="w-[100px] bg-[#a3a3a3] h-[1px]"/>
                    <p className="text-[#a3a3a3] text-[10px]">The account status on my credit report for
                       [Account Name] is incorrect. It is currently marked
                        as "Late" for [Month/Year], but I made the payment 
                        on time, and there should be no late payment reported
                         for that period. This error is negatively impacting my 
                         credit score, and I kindly request that it be corrected</p>

                  </div>

                  <div className="w-[90%] bg-[#a3a3a3] h-[1px]"/>

                  <div className="w-[80%] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h1 className="text-[#181717] font-bold ">Created</h1>
                      <p className="text-[#333333] bg-[#a3a3a3] w-[20px] pl-1 h-[20px] rounded-full">3</p>
                      </div>  

                      <div className="flex items-center gap-2">
                        <button className="w-[200px] h-[40px] rounded-3xl text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200"> CREATE NEW DISPUTE</button>
                        <button><FilterOutlined/></button>
                      </div>

                  </div>



                  <div className="w-[80%] h-[66px] mt-2 flex">

                    <div className="bg-gradient-to-r from-blue-300 to-blue-400 w-[4px] h-[66px]"/>
                
                    <div className="w-full h-full bg-[#33333305] flex items-center justify-between gap-8">
                    <FieldTimeOutlined className="text-[#1380ff] self-end text-xl mb-2 ml-2"/>
                
                     <div className="w-full h-full flex items-center gap-12 px-2">
                 <div className="flex flex-col items-center gap-2 justify-start">
                      <p className="text-[#a3a3a3] text-[12px]">EQUIFAX</p>
                      <h1 className="font-semibold text-[15px] text-[#181717]">Round 1</h1>
                    </div>
                    <div className="flex flex-col items-center gap-2 justify-start">
                      <p className="text-[#a3a3a3] text-[12px]">DATE</p>
                      <h1 className="font-semibold text-[15px] text-[#181717]">7/11/2023</h1>
                    </div>
                    <div className="flex flex-col items-center gap-2 justify-start">
                      <p className="text-[#a3a3a3] text-[12px]">STATUS</p>
                      <h1 className="font-semibold text-[15px] text-[#181717]">Action Needed 
                      <Dropdown   overlayStyle={{ border: 'none' }} menu={{ items, style: { backgroundColor: 'black' ,color : 'white'} }} placement="topLeft" >
                      <Button style={{ border: 'none' }}><QuestionCircleOutlined/></Button>
                      </Dropdown>
                      </h1>

                    </div>

                     </div>


                    <div className="flex gap-4 text-xl">
                      <button><SmallDashOutlined/></button>
                      <button><PlusCircleOutlined/></button>
                    </div>


                    </div>


                  </div>














            </div>
          </div>
          <div className="div2 w-[30%] h-[500px] bg-orange-200"></div>
        </div>
      </section>
    </>
  );
};
