"use client";
import React, { useState, useEffect } from "react";
import UserLineChart from "@/components/admin/StatusChart";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { format } from "date-fns";

const StatusChartPage = () => {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState<any>([]);
  const [selectedUser, setSelectedUser] = useState<any>();
  const [disputes, setDisputes] = useState<any>([]);
  const [selectedContent, setSelectedContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDispute, setSelectedDispute] = useState<any>({});
  const [userEmail, setUserEmail] = useState();
  const [chartData, setChartData] = useState([]);
  const [id, setId] = useState("");

  interface User {
    _id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    dob: string;
    phone: string;
    ss_number: string;
    payment_status: string;
    city: string;
    state: string;
    zip_code: string;
    createdAt: string;
    updatedAt: string;
  }

  const statusMap: { [key: number]: string } = {
    0: "LetterSent",
    1: "ClientResponse",
    2: "ItemDeleted",
    3: "Analyzing",
    4: "Received",
  };

  const reverseStatusMap: { [key: string]: number } = Object.fromEntries(
    Object.entries(statusMap).map(([key, value]) => [value, Number(key)])
  );

  console.log("Reverse Status Map:", reverseStatusMap);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://54.87.77.177:3001/user")
        ?.then((res) => {
          console.log(res);
          setUsers(res?.data);
        })
        ?.catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  const handleUser = async () => {
    const email = userEmail;
    const user = users.filter((item: any) => item.email === email);

    setSelectedUser(user);
    try {
      const url = ` http://54.87.77.177:3001/dispute?email=${email}`;
      const res = await axios.get(url);
      setDisputes(res.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleViewContent = (content: string) => {
    setSelectedContent(content);
    setIsModalVisible(true);
  };

  useEffect(() => {
    handleUser();

    setSelectedDispute({});
  }, [userEmail]);

  const handleDelete = async (id: any) => {
    try {
      const url = `http://54.87.77.177:3001/dispute/${id}`;
      const res = await axios.delete(url);
      if (res.status === 200) {
        toast.success("Dispute Deleted ");
        window.location.reload();
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleDispute = async (id: string) => {
    try {
      const res = await axios.get(`http://54.87.77.177:3001/dispute/${id}`);
      const { activeStatus, _id } = res?.data;

      console.log("chart_data", activeStatus);
      setId(_id);

      // Transforming the API data to be used in the chart
      const transformedData = activeStatus?.map((item: any) => ({
        day: format(new Date(item.date), "EEE"), // Convert date to 'Mon', 'Tue', etc.
        status: item.status, // Keep the numeric status directly for the chart
      }));

      // Set the transformed data for chart rendering
      setChartData(transformedData);
      console.log("Converted to date and status", transformedData);
    } catch (error) {
      console.error("An Error Occurred", error);
    }
  };

  console.log(id);

  const UpdateDispute = async (e: any) => {
    e.preventDefault();

    // Log the current status before mapping
    console.log("Current status before mapping:", status); // Should log the correct status label

    // Map the status using reverseStatusMap
    const numericStatus = reverseStatusMap[status];
    console.log("Mapped Numeric Status:", numericStatus); // Should now log the correct numeric value

    if (numericStatus === undefined) {
      console.error("Selected status is not valid:", status);
      toast.error("Please select a valid status."); // Provide user feedback
      return; // Prevent sending the payload
    }

    const payload = {
      status: numericStatus, // Send numeric value
      date,
    };

    console.log("Payload to send:", payload); // Log the payload

    try {
      // Update the dispute status via API
      const res = await axios.put(
        `https://5rrdzg3k-8000.inc1.devtunnels.ms/dispute/status-update/${id}`,
        payload
      );
      console.log(res?.data);
      console.log("Updated chart data", res?.data);

      // Refetch the dispute details to update the chart
      await handleDispute(id);

      // Optionally show a success message
      toast.success("Status updated successfully");
    } catch (err) {
      console.log("An Error Occurred", err); // Log the error message
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col gap-10 items-center justify-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold">Status Chart</h1>

      {/* Date Input */}
      <select
        name="name"
        id="nme"
        className="w-[25%] h-[80px] px-2 flex justify-start gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]"
        value={selectedUser?.name}
        onChange={(e: any) => {
          setUserEmail(e.target.value);
        }}
      >
        <option value="user">Select the user</option>
        {users?.map((item: any, index: any) => (
          <option key={index}>{item.email}</option>
        ))}
      </select>
      <form
        action="post"
        onSubmit={UpdateDispute}
        className="flex gap-4 items-center"
      >
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter Date"
          className="px-5 py-3 rounded-xl border-2 border-gray-200"
        />

        <select
          value={status}
          onChange={(e) => {
            const selectedValue: any = e.target.value;
            setStatus(statusMap[selectedValue]); // Use statusMap to get the correct label
            console.log("Selected Status:", statusMap[selectedValue]); // Debugging
          }}
          className="px-5 py-3 rounded-xl border-2 border-gray-200"
        >
          <option value="">
            {status == "" ? "Select Status" : "Selected"}
          </option>
          <option value="0">LetterSent</option>
          <option value="1">ClientResponse</option>
          <option value="2">ItemDeleted</option>
          <option value="3">Analyzing</option>
          <option value="4">Received</option>
        </select>
        <button className="px-5 py-2 bg-blue-500 rounded-xl text-white font-bold">
          Submit
        </button>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Equifax
              </th>
              <th scope="col" className="px-6 py-3">
                Experian
              </th>
              <th scope="col" className="px-6 py-3">
                TransUnion
              </th>

              <th scope="col" className="px-6 py-3">
                Equifax Letter
              </th>
              <th scope="col" className="px-6 py-3">
                Experian Letter
              </th>
              <th scope="col" className="px-6 py-3">
                TransUnion Letter
              </th>
              <th scope="col" className="px-6 py-3">
                Equifax Report
              </th>
              <th scope="col" className="px-6 py-3">
                Experian Report
              </th>
              <th scope="col" className="px-6 py-3">
                TransUnion Report
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {disputes &&
              disputes.map((item: any) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.equifax ? (
                        <CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
                      ) : (
                        <CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
                      )}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.experian ? (
                        <CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
                      ) : (
                        <CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
                      )}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.trans_union ? (
                        <CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
                      ) : (
                        <CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
                      )}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <button
                        className="text-blue-400 underline"
                        onClick={() => handleViewContent(item.equifax_letter)}
                      >
                        VIEW
                      </button>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <button
                        className="text-blue-400 underline"
                        onClick={() => handleViewContent(item.experian_letter)}
                      >
                        VIEW
                      </button>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <button
                        className="text-blue-400 underline"
                        onClick={() =>
                          handleViewContent(item.trans_union_letter)
                        }
                      >
                        VIEW
                      </button>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <button
                        className="text-blue-400 underline"
                        onClick={() => handleViewContent(item.equifax_report)}
                      >
                        VIEW
                      </button>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <button
                        className="text-blue-400 underline"
                        onClick={() => handleViewContent(item.experian_report)}
                      >
                        VIEW
                      </button>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <button
                        className="text-blue-400 underline"
                        onClick={() =>
                          handleViewContent(item.transUnion_report)
                        }
                      >
                        VIEW
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          handleDelete(item?._id);
                        }}
                      >
                        <DeleteOutlined className="size-5 text-black mr-5" />
                      </button>
                      <Button
                        onClick={() => {
                          handleDispute(item?._id);
                        }}
                      >
                        View Details
                      </Button>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="w-[50%] h-full ">
        {chartData.length > 0 && <UserLineChart data={chartData} />}
      </div>
    </main>
  );
};

export default StatusChartPage;
