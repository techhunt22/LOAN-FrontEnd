"use client"
// @ts-ignore
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import PersonIcon from "@mui/icons-material/Person";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { ApiCalls } from "@/api/calls/calls";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  user_id: {
    email: string;
  };
  createdAt: string;
  status: string;
}

export const UsersList = () => {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const [data, setData] = useState<UserData[]>([]);
  const [sortedData, setSortedData] = useState<UserData[]>([]);
  const [sortCriteria, setSortCriteria] = useState<"date" | "name">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiCalls.Users();
        setData(response.data);
        setSortedData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortedArray: UserData[] = [...data];
    if (sortCriteria === "date") {
      sortedArray.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
    } else if (sortCriteria === "name") {
      sortedArray.sort((a, b) => {
        const nameA = a.firstName.toLowerCase();
        const nameB = b.firstName.toLowerCase();
        if (nameA < nameB) return sortOrder === "asc" ? -1 : 1;
        if (nameA > nameB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }
    setSortedData(sortedArray);
  }, [data, sortCriteria, sortOrder]);

  const handleSort = (criteria: "date" | "name") => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  return (
    <div className="flex w-[80%] ml-[10%] mt-10 justify-center content-center items-center flex-col gap-[16px]">
      <div className="flex flex-col w-full px-4 justify-start border-2 border-blue-600 rounded-2xl pt-8 pb-16 h-[85vh] overflow-hidden">
        <div>
          <div className="flex mb-8 items-center flex-wrap">
            <div className="flex mt-8">
              <div className="mr-3">
                <button className="business-page-sort-btn" onClick={() => handleSort("name")} >
                  <AddRoadIcon />
                  Sort by A To Z <KeyboardArrowDownIcon />
                </button>
              </div>
              <div>
                <button className="business-page-sort-btn" onClick={() => handleSort("date")}>
                  <CalendarMonthIcon />
                  Sort by Date <KeyboardArrowDownIcon />
                </button>
              </div>
            </div>
            <div className="flex ml-auto items-center mt-8">
              <div className="mr-2">
                <input
                  type="text"
                  placeholder="Search by name"
                  className="business-page-searchname-input"
                />
              </div>
              <div>
                <button className="business-page-blue-btn">
                  Add Clients
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive h-[68vh] pr-1">
            <table className="w-full text-center border-separate border-spacing-y-7 business-page-table">
              <thead>
                <tr>
                  <th className="business-page-border-right">FIRST NAME</th>
                  <th className="business-page-border-right">LAST NAME</th>
                  <th className="business-page-border-right">EMAIL</th>
                  <th className="business-page-border-right">DATE</th>
                  <th className="business-page-border-right">FUNDING STATUS</th>
                  <th>VIEW PROFILE</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((val) => (
                  <tr
                    key={val._id}
                    onClick={() => {
                      Cookies.set("id", val._id);
                      router.replace("/step1/build-business-credit");
                      console.log(Cookies.set("id", val._id));
                    }}
                  >
                    <td className="business-page-showdata">{val.firstName}</td>
                    <td className="business-page-showdata">{val.lastName}</td>
                    <td className="business-page-showdata">{val.user_id.email}</td>
                    <td className="business-page-showdata">{formatDate(val.createdAt)}</td>
                    <td className="business-page-showdata">{val.status}</td>
                    <td className="business-page-showdata business-page-viewprofile-section">
                      <div className="flex gap-[25px] flex-wrap">
                        <PersonIcon />
                        <ControlPointIcon />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
