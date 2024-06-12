"use client";
// @ts-ignore
import {EllipsisOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';
import { ArrowRightOutlined } from '@ant-design/icons';
import { SendOutlined } from '@ant-design/icons';
import { FileOutlined } from '@ant-design/icons';
import { CopyrightOutlined  } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { AlignCenterOutlined } from '@ant-design/icons';
import { AlignLeftOutlined } from '@ant-design/icons';
import { AlignRightOutlined } from '@ant-design/icons';
import { OrderedListOutlined } from '@ant-design/icons';
import {FileImageOutlined  } from '@ant-design/icons'
import {UnorderedListOutlined } from '@ant-design/icons'
import {LinkOutlined } from '@ant-design/icons'
import {ItalicOutlined } from '@ant-design/icons'
import {BoldOutlined} from '@ant-design/icons'
import {UnderlineOutlined } from '@ant-design/icons'
import { UndoOutlined} from '@ant-design/icons'
import {RedoOutlined } from '@ant-design/icons'




import Card from "@/components/admin/adminoption3card"
import { Switch } from 'antd';



export const AddClientOption3Form = () => {

  const items: MenuProps['items'] = [
    {
      label: 'Alex',
      key: '1',
      
    },
    {
      label: 'Casidella',
      key: '2',
     
    },
    
    
      
     
  ];
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  
 
  return (
     <>
     <section className="w-full h-full flex flex-col items-center justify-center pt-20  mb-20">
       <div className="w-full h-full flex flex-col items-center gap-8  justify-start  ">
       <div className="text-[#686666] flex w-6/12 items-center justify-between pt-20">
        Generate the letter to get all credit report
        <EllipsisOutlined  className="text-white bg-[#1380FF] rounded-full"/>
        </div>

        <div className="bg-white w-full md:w-6/12 h-full shadow-md rounded-lg flex flex-col items-center pt-10">
        <div className="w-[90%] ">
          <select name="name" id="nme" className="w-full h-[80px] px-2 flex justify-center gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]">
            <option value="fredrick">Fredick</option>
            <option value="fredrick">Fredick</option>
          </select>
          </div>


          <div className="w-[90%]  flex flex-col h-full gap-2 mt-10 mb-4">
           <Card/>
           <Card/>
           <Card/>
          <button className="w-[70%] h-[70px] self-center bg-[#F1F1F1] text-[#929292] font-semibold">Done</button>

        </div>

        </div>

        <button className="flex items-center mt-10 w-[250px] h-[50px] border-[1px] rounded-full border-[#C0C0C0] text-[#C0C0C0] justify-center gap-4"><StarOutlined className="text-[#1380FF] " /> When it began...</button>

      <div className="w-full md:w-6/12  relative h-max py-2 border-[1px] rounded-lg flex flex-col mt-10 pt-4 gap-3 items-center justify-start border-[#686666]">
        <h1 className="text-[#686666] text-[36px] font-bold ">Choose Letter Type</h1>
        <div className="w-[90%] h-[100px]  flex items-center  justify-between">
          <div className="flex flex-col">
            <h1 className="text-[#686666] text-[30px] font-bold">Option 1 </h1>
            <p className="text-[24px] text-[#1380FF]">Basic Dispute <ArrowRightOutlined /> <span className="text-[#686666] font-light text-[24px]">Credit Bureas</span></p>
          </div>
       <div>
       <Switch defaultChecked onChange={onChange} />;
       </div>

        </div>
        <div className="w-[90%] h-[100px]  flex items-center  justify-between">
          <div className="flex flex-col">
            <h1 className="text-[#686666] text-[30px] font-bold">Option 2 </h1>
            <p className="text-[24px] text-[#1380FF]">Higher Dispute <ArrowRightOutlined /> <span className="text-[#686666] font-light text-[24px]">All Other Letters</span></p>
          </div>
       <div>
       <Switch defaultChecked onChange={onChange} />;
       </div>

        </div>

        <div className="w-[75%] h-max py-2 bg-white shadow-md flex flex-col px-2 rounded-lg">
          <div className="flex gap-2">
            <p className="text-[#CCCCCC] text-[20px] font-light">Choose letter Recipent</p> 
            <p className="text-[#333333] bg-[#efefef] w-[200px] h-[30px] flex items-center">Contains in only Round 2</p>
          </div>
          <div className="flex gap-2 ">
            <input type="radio" name="credit" id="burea" />
            <p className="text-[#686666] text-[20px]">Credit Burea</p>
            
          </div>

          <div className="flex gap-2 ">
            <input type="radio" name="credit" id="burea" />
            <p  className="text-[#686666] text-[20px]">Credit/Furnisher Reporting the Item</p>
            
          </div>


        </div>

        <p className="text-white text-xl bg-[#1380FF] rounded-full px-2 py-2 absolute top-[-20px] left-2"><SendOutlined /></p>
     
     
     
     
     
     
     
      </div>


      <div className="w-full md:w-6/12 h-[200px] flex items-center justify-center border-[#686666] border-[1px] relative rounded-lg mt-10 ">
        <h1 className="text-[#A3A3A3] text-[35px] font-bold">ADD YOUR DISPUTE</h1>
        <button className="w-[300px] h-[50px] rounded-xl bg-[#1380FF] text-white font-bold  absolute bottom-[-10px]">Add Dispute Item</button>
        <p className="text-white bg-[#1380ff] px-2 py-2 rounded-full absolute top-[-20px] left-2" ><FileOutlined /></p>
        </div>


        <div className="w-full md:w-6/12 h-[200px] flex items-center flex-col justify-start pt-4 border-[#686666] border-[1px] relative rounded-lg mt-10 ">
        <h1 className="text-[#A3A3A3] text-[35px] font-bold">Select The Subject Of Mail</h1>
        <div className="w-[90%] ">
          <select name="name" id="nme" className="w-full h-[80px] px-2 flex justify-center gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]">
            <option value="fredrick">Fredick</option>
            <option value="fredrick">Fredick</option>
          </select>
          </div>
        <button className="w-[150px] h-[50px] rounded-xl text-white font-bold  absolute bottom-[-10px]" style={{ background: 'linear-gradient(90deg, #CAF0F8 90%, #CAF0F8 39.6%)' }}>Next</button>
        <p className="text-white bg-[#1380ff] px-2 py-2 rounded-full absolute top-[-20px] left-2" ><CopyrightOutlined /> </p>
        </div>


      <div className="w-full md:w-6/12 h-full pb-6 rounded-lg flex flex-col items-center justify-start border-[#686666] border-[1px] relative mt-20 ">
      <h1 className="text-[#A3A3A3] text-[36px] font-bold">Generate Your Letter</h1>
      <div className="w-[95%] gap-1 flex items-center overflow-x-auto overflow-y-hidden">
        <p className="text-[#A3A3A3]  text-[16px]">Choose Location According To Credit Bureas :</p>
        <div className="w-[100px] h-[2px] bg-[#8ECAE6]"/> 
        <button className="w-[100px] h-[23px] bg-white text-black rounded-lg">EQUIFAX</button>
        <button className="w-[100px] h-[23px]  text-[#D9D9D9] rounded-lg">EXPERIAN</button>
        <button className="w-[100px] h-[23px]  text-[#D9D9D9] rounded-lg">TRANSUNION</button>

      </div>
      <div className="bg-[#D3D3D3] w-[95%] h-[2px] mt-2"/>
    <div className="w-[95%] flex items-center h-max justify-between mt-2 px-2">
   <div className="flex items-center gap-10">
   <h1 className="text-[#A3A3A3] font-bold text-[24px]">Subject :</h1>
   <p className="text-[#333333] text-[20px]">Request Annual Credit report</p>
   </div>
    <div className="flex items-center text-[#434343] text-[20px] gap-4">
      <p>CC</p>
      <p>BCC</p>
    </div>
    </div>
    <div className="bg-[#D3D3D3] w-[95%] h-[2px] mt-4"/>
    <div className="flex flex-col gap-3 items-start w-[90%] text-[#737373] text-[16px]">
      <p>Ambro</p>
      <p>Kanairo, 00603</p>
      <p>Annual Credit Request Service</p>
      <p className="text-[#333333] font-bold">PO_Box 105281</p>
      <p className="text-[#333333] font-bold">Atlanta,GA 30348-5281</p>
      <p>26 Jul,2023</p>
      <p>Re:Request For Complimentart Annual Credit Reports</p>
      <p>To Whom It May Concern</p>
      <p>I Am Writing To Request My Complimentart Annual Credit Report From : Experian,</p>
      <p>Full Name: Ambro</p>
      <p>Bdate</p>
      <p>8756</p>
      <p>Address : Kanairo, 00603</p>
      <p>T_no</p>
      <p>Enclosed Are Copies Of Documents Identifying Me By My Name And Address</p>
      <p>Thank You For Your Time And Help In This Matter</p>
      <p>Sincerely Yours,</p>
      <p className="text-[#333333] font-bold">Ambro</p>

    </div>
    <div className="w-[90%] h-[80px] flex overflow-x-auto overflow-y-hidden items-center gap-6 border-t-[1px] border-b-[1px] border-[#D3D3D3] ">
     <div className="flex items-center gap-4">
     <button className="text-[#686666] font-bold"><BoldOutlined /></button>
      <button className="font-light text-[#686666] underline"><UnderlineOutlined /></button>
      <button className="font-light text-[#686666] font-serif" ><ItalicOutlined /></button>
     </div>
     <div className="w-[1px] h-[20px] bg-[#686666]"/>
     <div className="flex items-center gap-4">
     <button className="text-[#686666] font-bold"><AlignRightOutlined/></button>
     <button className="text-[#686666] font-bold"><AlignCenterOutlined/></button>
     <button className="text-[#686666] font-bold"><AlignLeftOutlined/></button>
    
     </div>
     <div className="w-[1px] h-[20px] bg-[#686666]"/>

     <div className="flex items-center gap-4">
     <button className="text-[#686666] font-bold"><OrderedListOutlined/></button>
     <button className="text-[#686666] font-bold"><UnorderedListOutlined/></button>
     </div>
     <div className="w-[1px] h-[20px] bg-[#686666]"/>
     <div className="flex items-center gap-4">
     <button className="text-[#686666] font-bold"><LinkOutlined/></button>
     <button className="text-[#686666] font-bold"><FileImageOutlined/></button>
     <button className="text-[#686666] font-bold"><LinkOutlined/></button>
     </div>
     <div className="w-[1px] h-[20px] bg-[#686666]"/>
     <div className="flex items-center gap-4">
      <button><UndoOutlined className="text-green-400"/> Undo</button>
      <button> Redo <RedoOutlined/> </button>
     </div>



    </div>
    <div className="w-[90%] flex items-center justify-between px-2 mt-2">
      <button className="w-[200px] h-[50px] rounded-xl border-[2px] border-[#929292]">Save as template</button>
      <button className="w-[200px] h-[50px] rounded-xl  bg-[#1380FF] text-white font-bold">Send letter</button>
    </div>

      
      <div>

      </div>
      
      
      
      <p className="text-white bg-[#1380ff] px-2 py-2 rounded-full absolute top-[-20px] left-2" ><MailOutlined /></p>

      </div>


       </div>

     </section>
     </>
  );
};
