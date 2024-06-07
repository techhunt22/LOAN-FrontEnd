"use client";
// @ts-ignore

import React, { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";






export const AddClientOptionTwoForm = () => {
  const [hidden,setHidden]=useState(true)
  const setHiddenDiv = ( )=>{
    setHidden(!hidden)
  }
 
  return (
    <>
    <h1 className="text-[40px] md:text-[50px] lg:text-[65px] ml-10 xl:ml-0 mt-4 font-bold text-[#686666]">Current Users</h1>
    <section className=" min-h-screen flex flex-col ml-4 items-start">
      <div className="buttons w-full h-[100px] flex items-center justify-between ">
        <div className="1 w-[50%] h-full flex items-center gap-6">
        <button className="w-[150px] h-[45px] bg-[#EFF6FF] text-[#1380FF] font-bold flex items-center gap-2 px-4"> <span className="text-white bg-[#1380FF] rounded-full font-bold px-1 py-[1px]">12</span> ACTIVE</button>
        <button className="w-[180px] h-[45px]  text-[#8A8D93] font-bold border-[1px] border-gray-400 flex items-center gap-2 px-4 rounded-lg"> <span className="text-black bg-[#E9E9E9] font-bold rounded-full px-1 py-[1px]">6</span> INACTIVE</button>
        </div>
        <div className="2  w-[50%] h-full flex items-center  justify-end  md:justify-center ">
          <div className="w-full h-full hidden md:flex items-center justify-center gap-4">
          <input type="text" placeholder="Search By Name" className="w-[250px] h-[40px] px-2 rounded-lg outline-none border-[1px]"/>
          <button className="bg-[#2684FF] text-white w-[140px] h-[40px] rounded-lg">Add New User</button>
          <button className="text-[#3A3541] text-xl"><MoreOutlined /></button>
          </div>
          <button className="md:hidden sm:mr-10  "
        onClick={setHiddenDiv}
        >
            <MenuOutlined />
         </button>
        </div>
     

      

      </div>
      
         <div className={`${hidden?'absolute':'hidden'} flex bg-gray-400 rounded-lg top-36 gap-4 right-1 w-[300px] h-max py-2 flex-col items-center justify-center`}>
         <input type="text" placeholder="Search By Name" className="w-[250px] h-[40px] px-2 rounded-lg outline-none border-[1px]"/>
          <button className="bg-[#2684FF] text-white w-[140px] h-[40px] rounded-lg">Add New User</button>
          <button className="text-[#3A3541] text-xl"><MoreOutlined /></button>
         </div>


      <table className="  w-[90%] h-full border-[1px] h-[800px]">
        <thead className='w-full h-12 bg-[#F4F4F4] rounded-2xl'>
          <tr className="w-full h-full flex items-center rounded-xl text-left px-2 text-[12px] text-[#333333]">
          <div className="w-[13%] h-[12px] border-r-2 border-l-2 border-gray-500 gap-3 flex items-center justify-center">
          <input type="checkbox" name="chck" id="check" />
          <p>USERS</p>
          </div>
          <div className="w-[13%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
          <p>EMAIL</p>
          </div>
          <div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
          <p>PASSWORDS</p>
          </div>
          <div className="w-[12%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
          <p>PHONE NUMBER</p>
          </div>
          <div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
          <p>CITY</p>
          </div>
          <div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
          <p>STATE</p>
          </div>
          <div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
          <p>ZIP CODE</p>
          </div>
          <div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
          <p>SS NUMBER</p>
          </div>
          <div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
          <p>ACTION REQUIRED</p>
          </div>
          

          </tr>
        </thead>

        <tbody className="w-full h-full">
        <tr className="w-full h-full flex items-center rounded-xl text-left px-2 text-[12px] text-[#737373]">
         <div className="w-[13%] flex items-center gap-3  justify-center">
         <input type="checkbox" name="chck" id="check" />
          tashanda powell
         </div>
       <div className="w-[13%] flex items-center justify-center">
          brokeralexa@gmail.com
         </div>
         <div className="w-[10%] flex items-center justify-center">
          sadasd
         </div>
         <div className="w-[12%] flex items-center justify-center">
          131312312
         </div> 
         <div className="w-[10%] flex items-center justify-center">
         Brooklyn
         </div>
          <div className="w-[10%] flex items-center justify-center">
         New York
         </div>
          <div className="w-[10%] flex items-center justify-center">
          11210
         </div> 
         <div className="w-[10%] flex items-center justify-center">
         243296532
         </div>
          <div className="w-[10%] flex items-center justify-center">
          brokeralexa@gmail.com
         </div>
          
         
          

          </tr>
        </tbody>

      </table>

    </section>

  
  
  
  
    </>
  );
};
