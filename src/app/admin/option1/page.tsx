"use client";
// @ts-ignore

import React, { useState, useEffect,useRef } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import { HolderOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  dob: string;
  phone: string;
  ss_number: string;
  city: string;
  state: string;
  zip_code: string;
  createdAt: string;
  updatedAt: string;
}

interface DocsContent {
  id: number;
  email: string;
  photo_ID: string;
  proof_of_address: string;
  user_agreement_freeze: string;
  consumer_office_freeze: string;
  lexis_nexis_freeze: string;
  teletrack_freeze: string;
  boompay: string;
  kikoff: string;
  self: string;
  creditstrong: string;
  experian: string;
  credit: string;
  innovice: string;
  clarityservices: string;
  checksystems: string;
  sagestreamilc: string;
  smartcredit: string;
  createdAt: string;
  updatedAt: string;
}


interface Provider {
  username: string;
  password: string;
  phone_no: string;
  security_word: string;
  report_provider: string;
}

export default function AddClientOptionTwoForm  ()  {
  const [hidden, setHidden] = useState(false);
  const [hiddden, setHiddden] = useState(true);
  const [users, setUser] = useState<User[]>([]);
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [edit, setEdit] = useState(true);
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<{ [key: number]: string }>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
const [selectedUser, setSelectedUser] = useState<User | null>(null);
const [docsContent, setDocsContent] = useState<any>({});
const [providerContent, setProviderContent] = useState<any>({});
const modalRef = useRef<HTMLDivElement>(null);

 

  const handleEdit = (e: any, userId: number) => {
    e.preventDefault();
    setEdit(!edit);
    setEditUserId(userId);
    setEditValues((prevValues) => ({
      ...prevValues,
      [userId]: users.find((user) => user.id === userId)?.password || "",
    }));
  };

  const HandleDelete = async (
    e: any,
    userId: number,
    Fname: string,
    Lname: string
  ) => {
    e.preventDefault();
    try {
      const confirm = window.confirm(
        `Are you sure you want to delete user ${Fname} ${Lname}?`
      );
      if (confirm) {
        const response = await fetch(
          `http://144.76.112.25:4000/user/${userId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          setEdit(true);
          setHiddden(!hiddden);
          fetchUsers();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async (e: any, userId: number) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://144.76.112.25:4000/user/${userId}`, {
        method: "PUT",
        body: JSON.stringify({ password: editValues[userId] }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setEdit(true);
        setHiddden(!hiddden);
        setEditUserId(null);
        // Optionally update the user's password in the state
        setUser((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId
              ? { ...user, password: editValues[userId] }
              : user
          )
        );
      } else {
        alert("Password Not Changed");
        setEditUserId(null);
        setHiddden(!hiddden);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setHiddenDiv = (e: any) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://client1.jewelercart.com:4000/user");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: User[] = await response.json();
      setUser(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleHiddenDiv = (e: any, userId: number) => {
    e.preventDefault();
    setHiddden(!hiddden);
    if (expandedUserId === userId) {
      setExpandedUserId(null); // Collapse if already expanded
    } else {
      setExpandedUserId(userId); // Expand the clicked user's hidden div
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );


 
  const showModal = async (e: any, user: User) => {
    e.preventDefault();
    try {
      let docsResponse = await fetch(`http://144.76.112.25:4000/docs/${user.email}`);
      let providerResponse = await fetch(`http://144.76.112.25:4000/provider/${user.email}`);
      
      if (!docsResponse.ok || !providerResponse.ok) {
        throw new Error('Network response was not ok');
      }
  
      let docsData = await docsResponse.json();
      let providerData = await providerResponse.json();
  
      console.log(docsData);
      console.log(providerData);
  
      setDocsContent(docsData || {}); // Ensure docsData is not null
      setProviderContent(providerData || {}); // Ensure providerData is not null
      setSelectedUser(user);
      setIsModalVisible(true);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalVisible(false);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalVisible]);
  

  return (
    <>
      <h1 className="text-[40px] md:text-[50px] lg:text-[65px] ml-10 xl:ml-0 mt-4 font-bold text-[#686666]">
        Current Users
      </h1>
      <section className=" min-h-screen flex flex-col ml-4 items-start relative">
        <div className="buttons w-full h-[100px] flex items-center justify-between ">
          <div className="1 w-[50%] h-full flex items-center gap-6">
            <button className="w-[150px] h-[45px] bg-[#EFF6FF] text-[#1380FF] font-bold flex items-center gap-2 px-4">
              {" "}
              <span className="text-white bg-[#1380FF] rounded-full font-bold px-1 py-[1px]">
                12
              </span>{" "}
              ACTIVE
            </button>
            <button className="w-[180px] h-[45px]  text-[#8A8D93] font-bold border-[1px] border-gray-400 flex items-center gap-2 px-4 rounded-lg">
              {" "}
              <span className="text-black bg-[#E9E9E9] font-bold rounded-full px-1 py-[1px]">
                6
              </span>{" "}
              INACTIVE
            </button>
          </div>
          <div className="2  w-[50%] h-full flex items-center  justify-end  md:justify-center ">
            <div className="w-full h-full hidden md:flex items-center justify-center gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search By Name"
                className="w-[250px] h-[40px] px-2 rounded-lg outline-none border-[1px]"
              />
              <button className="bg-[#2684FF] text-white w-[140px] h-[40px] rounded-lg">
                Add New User
              </button>
              <button className="text-[#3A3541] text-xl">
                <MoreOutlined />
              </button>
            </div>
            <button className="md:hidden sm:mr-10  " onClick={setHiddenDiv}>
              <MenuOutlined />
            </button>
          </div>
        </div>

        <div
          className={`${
            hidden ? "absolute" : "hidden"
          } flex bg-gray-400 rounded-lg top-36 gap-4 right-1 w-[300px] h-max py-2 flex-col items-center justify-center`}
        >
          <input
            type="text"
            placeholder="Search By Name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-[250px] h-[40px] px-2 rounded-lg outline-none border-[1px]"
          />
          <button className="bg-[#2684FF] text-white w-[140px] h-[40px] rounded-lg">
            Add New User
          </button>
          <button className="text-[#3A3541] text-xl">
            <MoreOutlined />
          </button>
        </div>

        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:w-full h-full  ">
          <div className="w-[1200px] xl:w-[95%]  border-[1px] h-full overflow-y-auto ">
            <div className="w-full h-full py-6 mt-2 bg-[#F4F4F4] rounded-2xl">
              <div className="w-full h-full flex items-center rounded-xl text-left px-2 text-[8px] xl:text-[10px] text-[#333333] overflow-y-auto ">
                <div className="w-[13%] h-[12px] border-r-2 border-l-2 border-gray-500 gap-6 flex items-center justify-center">
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
              </div>
            </div>

            <div className="w-full  h-full flex flex-col gap-16 mt-1">
              {filteredUsers.map((user: any) => (
                <form
                  key={user.id}
                  className="w-full h-full relative flex items-center text-left px-2 text-[14px] font-bold xl:font-light xl:text-[10px] text-[#737373] border-b-[1px] border-[#737373]"
                >
                  <div className="w-[13%] flex items-center gap-3 justify-center">
                    <input type="checkbox" name="chck" id="check" />
                    <button className="text-blue-500 underline" onClick={(e) => showModal(e, user)}>
  {`${user.first_name} ${user.last_name}`}
</button>
                  </div>
                  <div className="w-[13%] flex items-center justify-center">
                    {user.email}
                  </div>
                  <div className="w-[10%] flex items-center justify-center">
                    {editUserId === user.id ? (
                      <input
                        type="text"
                        className="bg-gray-200"
                        value={editValues[user.id]}
                        onChange={(e) =>
                          setEditValues({
                            ...editValues,
                            [user.id]: e.target.value,
                          })
                        }
                      />
                    ) : (
                      user.password
                    )}
                  </div>
                  <div className="w-[12%] flex items-center justify-center">
                    {user.phone}
                  </div>
                  <div className="w-[10%] flex items-center justify-center">
                    {user.city}
                  </div>
                  <div className="w-[10%] flex items-center justify-center">
                    {user.state}
                  </div>
                  <div className="w-[10%] flex items-center justify-center">
                    {user.zip_code}
                  </div>
                  <div className="w-[10%] flex items-center justify-center">
                    {user.ss_number}
                  </div>
                  <div className="w-[10%] flex items-center justify-center text-lg gap-6">
                    <button>
                      <EditOutlined />
                    </button>
                    <button onClick={(e) => toggleHiddenDiv(e, user.id)}>
                      <HolderOutlined />
                    </button>
                  </div>
                  {expandedUserId === user.id && (
                    <div className="absolute top-8 right-6 w-[100px] h-16 bg-white flex flex-col items-center justify-center gap-3 rounded-xl">
                      {edit ? (
                        <>
                          <button
                            className="text-[#00B4D8]"
                            onClick={(e) => {
                              handleEdit(e, user.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="text-[#EF233C] "
                            onClick={(e) => {
                              HandleDelete(
                                e,
                                user.id,
                                user.first_name,
                                user.last_name
                              );
                            }}
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <button
                          className="text-[#00B4D8]"
                          type="submit"
                          onClick={(e) => {
                            handleSave(e, user.id);
                          }}
                        >
                          Save
                        </button>
                      )}
                    </div>
                  )}
                </form>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {isModalVisible && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div
      ref={modalRef}
      className="w-[300px] h-[300px] border-2 border-black bg-white p-4 overflow-auto transform -translate-x-1/2 -translate-y-1/2"
    >
      {selectedUser && (
        <>
          <div>
            <h1 className="font-bold text-xl">User Data</h1>
            {docsContent && Object.keys(docsContent).length > 0 ? (
              Object.keys(docsContent).map((key) => (
                <p key={key}>{`${key}: ${docsContent[key]}`}</p>
              ))
            ) : (
              <p>No Docs Content</p>
            )}
          </div>
          <div>
            <h1 className="font-bold text-xl">Provider Data</h1>
            {providerContent && Object.keys(providerContent).length > 0 ? (
              Object.keys(providerContent).map((key) => (
                <p key={key}>{`${key}: ${providerContent[key]}`}</p>
              ))
            ) : (
              <p>No Provider Credentials</p>
            )}
          </div>
        </>
      )}
    </div>
  </div>
)}















   
    
    </>
  );
};
