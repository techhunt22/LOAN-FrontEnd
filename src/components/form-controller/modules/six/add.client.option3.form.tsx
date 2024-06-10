"use client";
// @ts-ignore
import {EllipsisOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


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
 
  return (
     <>
     <section className="w-full h-full flex flex-col items-center justify-center pt-20 ">
       <div className="w-full h-full flex flex-col items-center justify-start gap-2  ">
       <div className="text-[#686666] flex w-6/12 items-center justify-between pt-20">
        Generate the letter to get all credit report
        <EllipsisOutlined  className="text-white bg-[#1380FF] rounded-full"/>
        </div>

        <div className="bg-white w-6/12 h-[800px] shadow-md rounded-lg flex flex-col items-center pt-10">
        <div className="w-[90%] ">
          <Dropdown menu={menuProps} className="w-full h-[80px] flex justify-center gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]">
        <Button>
        <Space>
          <p>Fredrick Jidje</p>
          <DownOutlined />
        </Space>
      </Button>
         </Dropdown>
          </div>


          <div className="w-[90%]  flex  h-[120px] gap-2 mt-10">

          <div className="card w-full h-[120px] bg-[#F9F9F9] flex flex-col justify-between">
              <h1>Equifax</h1>
                <p>Upload you your report</p>
                <div className="w-[90%] bg-[#F4F4F4] rounded-full h-16">
                <input type="file" /> 
                </div>
                <p>Supported files are PNG,JPG & PDF </p>
          </div>
          <input type="checkbox" name="equifax" id="equi"  className="text-xl"/>
          </div>
        </div>



       </div>

     </section>
     </>
  );
};
