"use client";
// @ts-ignore
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import PersonIcon from '@mui/icons-material/Person';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
interface Option {
  label: string;
}
export const UsersList = () => {
  return (
    <>
      <div className="flex w-[80%] ml-[10%] mt-10 justify-center content-center items-center">
      <div className="flex flex-col w-full h-max px-4 justify-start border-2 border-blue-600 rounded-2xl pt-8  pb-16">
        <div>
        <div className="flex mb-8  items-center flex-wrap">
          <div className="flex mt-8">
            <div className="mr-3">
              <button className="business-page-sort-btn "> <AddRoadIcon/>Sort by A To Z <KeyboardArrowDownIcon/></button>
            </div>
            <div>
              <button  className="business-page-sort-btn"> <CalendarMonthIcon />Sort by Date<KeyboardArrowDownIcon/> </button>
            </div>
          </div>
          <div  className="flex ml-auto items-center mt-8">
            <div className="mr-2 ">
              <input type="text" placeholder="Search by name" className="business-page-searchname-input" />
            </div>
            <div>
              <button className="business-page-blue-btn">Add Clients</button>
            </div>
          </div>
        </div>
        <div className=" table-responsive">
          <table className="w-full text-center border-separate border-spacing-y-7 business-page-table">
            <tr>
              <th className="business-page-border-right">FIRST NAME</th>
              <th  className="business-page-border-right">LAST NAME</th>
              <th  className="business-page-border-right">EMAIL</th>
              <th  className="business-page-border-right">DATE</th>
              <th  className="business-page-border-right">FUNDING STATUS</th>
              <th>VIEW PROFILE</th>
            </tr>
            <tr>
              <td className="business-page-showdata">Eric</td>
              <td  className="business-page-showdata" >Garnes</td>
              <td  className="business-page-showdata">brokeralexa@gmail.com</td>
              <td className="business-page-showdata" >Oct 25, 2022 20:49</td>
              <td  className="business-page-showdata">Business Credit Builder</td>
              <td  className="business-page-showdata flex justify-end gap-14 business-page-viewprofile-section"><PersonIcon/><ControlPointIcon/> </td>
            </tr>
            <tr>
              <td className="business-page-showdata">Eric</td>
              <td  className="business-page-showdata" >Garnes</td>
              <td  className="business-page-showdata">brokeralexa@gmail.com</td>
              <td className="business-page-showdata" >Oct 25, 2022 20:49</td>
              <td  className="business-page-showdata">Business Credit Builder</td>
              <td  className="business-page-showdata flex justify-end gap-14 business-page-viewprofile-section"><PersonIcon/><ControlPointIcon/> </td>
            </tr>
            <tr>
              <td className="business-page-showdata">Eric</td>
              <td  className="business-page-showdata" >Garnes</td>
              <td  className="business-page-showdata">brokeralexa@gmail.com</td>
              <td className="business-page-showdata" >Oct 25, 2022 20:49</td>
              <td  className="business-page-showdata">Business Credit Builder</td>
              <td  className="business-page-showdata flex justify-end gap-14 business-page-viewprofile-section"><PersonIcon/><ControlPointIcon/> </td>
            </tr>
            <tr>
              <td className="business-page-showdata">Eric</td>
              <td  className="business-page-showdata" >Garnes</td>
              <td  className="business-page-showdata">brokeralexa@gmail.com</td>
              <td className="business-page-showdata" >Oct 25, 2022 20:49</td>
              <td  className="business-page-showdata">Business Credit Builder</td>
              <td  className="business-page-showdata flex justify-end gap-14 business-page-viewprofile-section"><PersonIcon/><ControlPointIcon/> </td>
            </tr>

          </table>
        </div>  
        </div>
     
        {/* <div>
          <div className="flex flex-col w-[85%] mt-16 mx-auto">
            <div className="text-center ">RECENT NOTE</div>
            <div className="flex w-full flex-row flex-nowrap justify-center mt-10  gap-4 ">
              <div className="flex w-[33%] ">
                  <p>tt - Coaching call to help move forward. Stated that he already canceled his subscription and no longer part of the company. Advice to call us if help is needed.</p>
              </div>
              <div className="flex w-[33%] ">
                <p>tt - Coaching call to help move forward. Stated that he already canceled his subscription and no longer part of the company. Advice to call us if help is needed.</p>
              </div>
              <div className="flex w-[33%] ">
                  <p>tt - Coaching call to help move forward. Stated that he already canceled his subscription and no longer part of the company. Advice to call us if help is needed.</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    </>
  );
};
