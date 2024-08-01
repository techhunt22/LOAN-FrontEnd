"use client";
// import Card from "@/components/admin/card"
// import Card1 from "@/components/admin/Card1"
// import { Flex, Progress } from "antd"

// @ts-ignore
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { CheckOutlined, CloseOutlined, DeleteOutlined, DownCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { FilterOutlined } from "@ant-design/icons";
import { FieldTimeOutlined } from "@ant-design/icons";
import { SortAscendingOutlined } from "@ant-design/icons";
import { FileAddOutlined } from "@ant-design/icons";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { PlusCircleOutlined } from "@ant-design/icons";
import { SmallDashOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { CheckCircleOutlined } from "@ant-design/icons";
import { BarsOutlined } from "@ant-design/icons";
import Graph from "@/components/admin/Graph";
import { useState, useEffect } from "react";
import axios from "axios";
import Winning from "@/components/admin/Progress";
import toast from "react-hot-toast";

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

export const AddClientOption2Form = () => {
	const [hidden, setHidden] = useState(true);
	const [hiddden, setHiddden] = useState(true);
	const [hidddden, setHidddden] = useState(true);
	const [sidebar, setSidebar] = useState(true);
	const [sort, setSort] = useState(true);
	const [users, setUsers] = useState<any>([]);
	const [selectedUser, setSelectedUser] = useState<any>();
	const [disputes, setDisputes] = useState<any>([]);
	const [selectedContent, setSelectedContent] = useState("")
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [selectedDispute, setSelectedDispute] = useState<any>({})
	const [userEmail, setUserEmail] = useState()
	const [title, setTitle] = useState<any>("")
	const [task, setTask] = useState<any>()


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
		const email = userEmail
		const user = users.filter((item: any) => item.email === email);


		setSelectedUser(user);
		try {
			const url = `http://54.87.77.177:3001/dispute?email=${email}`;
			const res = await axios.get(url);
			setDisputes(res.data.data);


		} catch (error: any) {
			console.log(error.message);
		}
	};

	const handleTask = async () => {


		try {
			const BodyData = {
				"title": title
			}
			if (selectedUser.length === 0) {
				toast.error("Select a user first")
			}
			const url = `http://54.87.77.177:3001/todo/${selectedUser[0]._id}`;
			const response = await axios.post(url, BodyData)
			if (response.status === 200) {
				toast.success("task added successfully")
				setTitle("")
				getTask()
			}

		} catch (error: any) {
			console.log(error.message);
		}

	}

	const getTask = async () => {
		try {
			const id = selectedUser[0]._id
			const url = `http://54.87.77.177:3001/todo/${id}`;
			const response = await axios.get(url)
			setTask(response.data.data)

		} catch (error: any) {
			console.error(error.message);

		}
	}

	useEffect(() => {
		getTask()
	}, [selectedUser])

	useEffect(() => {
		handleUser()

		setSelectedDispute({})

	}, [userEmail])



	const handleViewContent = (content: string) => {
		setSelectedContent(content)
		setIsModalVisible(true)
	}
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<>
					<h1 style={{ color: "white" }} className="font-bold">
						ACTION NEEDED
					</h1>
					<p style={{ color: "white" }} className="font-light">
						Once you’ve mailed your dispute letter, make sure to mark your letter as SENT
					</p>
				</>
			),
		},
	];

	const handleUpdate = async () => {
		try {
			const id = selectedDispute._id
			if (selectedDispute.status !== "SENT") {

				const url = `http://54.87.77.177:3001/dispute/${id}`
				const body = {
					status: "SENT"
				}
				const res = await axios.put(url, body)

				if (res.status === 200) {
					toast.success("letter is marked sent")
					setSelectedDispute(res.data)
					handleUser()

				}
			}
			if (selectedDispute.status === "SENT") {
				toast.success("letter is already marked sent")
			}
		} catch (error: any) {
			console.log(error.message);

		}
	}
	const handleUpdateTask = async (id: any) => {
		try {
			const url = `http://54.87.77.177:3001/todo/${id}`
			const res = await axios.put(url, { "status": "completed" })
			if (res.status === 200) {
				toast.success("task completed")
				getTask()
			}


		} catch (error: any) {
			console.log(error.message);

		}
	}

	const handleDeleteTask = async (id: any) => {
		try {
			const url = `http://54.87.77.177:3001/todo/${id}`
			const res = await axios.delete(url)
			if (res.status === 200) {
				toast.success("task completed")
				getTask()
			}


		} catch (error: any) {
			console.log(error.message);

		}
	}

	return (
		<>
			<section className="w-full h-full mt-10 relative flex flex-col items-center xl:block">
				<div className="w-full h-max py-2 flex-col xl:flex-row flex items-center justify-between px-5">
					<h1 className="text-[#686666] font-bold text-[50px]">User Analytics</h1>
				</div>
				<button
					className="xl:hidden block font-bold w-[200px] h-[40px] rounded-full bg-[#1380ff] text-white "
					onClick={() => {
						setSidebar(!sidebar);
					}}>
					See Upcoming Tasks
				</button>

				<div className="w-full h-full flex  items-start  mt-10">
					<div className="div1  w-full lg:w-[70%] h-full  flex flex-col items-center">
						<div className="w-[80%]  h-max py-2 mt-10 flex items-center justify-between">
							<div className="w-[80%]  mb-6 flex">
								{/* USER FROM DOWN */}
								<select name="name" id="nme" className="w-[25%] h-[80px] px-2 flex justify-start gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]" value={selectedUser?.name} onChange={(e: any) => { setUserEmail(e.target.value) }}>
									<option value="user">Select the user</option>
									{users?.map((item: any, index: any) => (
										<option key={index}>{item.email}</option>
									))}
								</select>
								{/* USER FROM DOWN */}
							</div>
							<div className="w-max h-max relative">
								<button
									onClick={() => {
										setSort(!sort);
									}}
									className="w-[200px] h-[40px]  relative rounded-full flex items-center justify-center gap-4 px-2 bg-[#f4f4f4]">
									<DownCircleOutlined />
									Sort By
									<SortAscendingOutlined className="text-[#1380ff] mr-4" />
								</button>

								<div className={`absolute ${sort ? "hidden" : "flex"} flex-col pt-2 gap-2 items-center top-10 rounded-2xl w-[200px] h-[300px] bg-white shadow-sm`}>
									<div className="flex flex-col items-start gap-2">
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input type="checkbox" name="chck" id="1" />
											<p>Newest</p>
										</div>
										<div className="flex gap-3 text-[14px] text-[#686666]">
											<input type="checkbox" name="chck" id="1" />
											<p>Older</p>
										</div>
										<p className="text-[#A3A3A3] text-[10px]">According To Credit Score</p>
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input type="checkbox" name="chck" id="1" />
											<p>200-500</p>
										</div>
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input type="checkbox" name="chck" id="1" />
											<p>600-1000</p>
										</div>
										<p className="text-[#A3A3A3] text-[10px]">According To Letter Disputes</p>
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input type="checkbox" name="chck" id="1" />
											<p>Created</p>
										</div>
										<div className="flex gap-4 text-[14px] text-[#686666]">
											<input type="checkbox" name="chck" id="1" />
											<p>Sent</p>
										</div>
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input type="checkbox" name="chck" id="1" />
											<p>Completed</p>
										</div>
									</div>
									<div className="flex gap-2">
										<button className="text-[#CFCFCF]">Clear</button>
										<button className="bg-green-400  text-white rounded-full w-[95px] h-[30px]">Apply Filter</button>
									</div>
								</div>
							</div>
						</div>
						{selectedUser?.map((item: any, index: any) => (

							<div className="w-[80%] h-max py-2 mb-4 flex flex-col mt-1 gap-4 items-center bg-white rounded-md shadow-md" key={index}>
								<select name="this week" id="1" className="bg-[#F1F1F1] w-[120px] justify-center items-center px-4 h-[30px] self-start rounded-full ml-2 mt-2">
									<option value="This Week">This Week</option>
									<option value="Yesterday">Yesterday</option>
								</select>
								<div className="name w-[80%] h-[100px] mt-2 bg-[#F6F7F8] flex items-center rounded-lg justify-center gap-2 flex-col">
									<h1 className="text-[#181818] text-[20px]">{`${item.first_name} ${item.last_name}`}</h1>
									<p className="text-[#8F8F8F] text-[13px] font-light">{item.email}</p>
								</div>
								<div className="progress w-full h-[100px] flex justify-center items-center  gap-20 ">
									<div className="uppercase flex justify-center flex-col items-center">
										<p className={`  p-1 w-auto border-solid border-2 
										${selectedDispute?.equifaxScore >= 800 ? "border-green-600" :
												selectedDispute?.equifaxScore <= 700 && selectedDispute?.equifaxScore >= 400 ? "border-yellow-600" :
													"border-red-600"} border-green-600 text-center rounded-full`}>
											{selectedDispute?.equifaxRating}:{selectedDispute?.equifaxScore}
										</p>
										<p className=" font-semibold">equifax</p>
									</div>
									<div className="uppercase flex justify-center flex-col items-center">
										<p className={` p-1 w-auto border-solid border-2 
										${selectedDispute?.experianScore >= 800 ? "border-green-600" :
												selectedDispute?.experianScore <= 700 && selectedDispute?.experianScore >= 400 ? "border-yellow-600" :
													"border-red-600"} border-green-600 text-center rounded-full`}>
											{selectedDispute?.experianRating}:{selectedDispute?.experianScore}

										</p>
										<p className=" font-semibold">experian</p>
									</div>
									<div className="uppercase flex justify-center flex-col items-center">
										<p className={` p-1 w-auto border-solid border-2
										${selectedDispute?.transUnionScore >= 800 ? "border-green-600" :
												selectedDispute?.transUnionScore <= 700 && selectedDispute?.transUnionScore >= 400 ? "border-yellow-600" :
													"border-red-600"} border-green-600 text-center rounded-full`}>
											{selectedDispute?.transUnionRating}:{selectedDispute?.transUnionScore}</p>
										<p className=" font-semibold">	transUnion</p>
									</div>

								</div>
								<div className="w-[25%] flex items-center justify-center h-max py-2 gap-4">
									<div className="flex flex-col items-center gap-2">
										<button className="w-[50px] h-[50px] rounded-lg bg-[#FFCC00] text-white">
											<SearchOutlined className="text-xl" />
										</button>
										<p className="text-[#333333] text-[10px] font-light">View Uploaded Report</p>
									</div>

									<div className="flex flex-col items-center gap-2">
										<button className="w-[50px] h-[50px] rounded-lg bg-[#88A8D3] text-white">
											<FileAddOutlined className="text-xl" />
										</button>
										<p className="text-[#333333] text-[10px] font-light">View Your Letter</p>
									</div>
								</div><div className="w-[80%] h-max py-2 flex flex-col xl:flex-row items-center  gap-8">
									<div className="flex flex-col items-center gap-2">
										<p className="text-[#333333] font-bold ">Reason</p>
										<div className="w-[100px] h-[1px] bg-[#a3a3a3] " />
										<p className="text-[#a3a3a3] text-[14px]">{selectedDispute.reason ? selectedDispute.reason : "N/A"}</p>
										<div className="w-[100px] h-[2px] bg-[#333333]" />
									</div>

									<div className="flex flex-col items-center gap-2">
										<p className="text-[#333333] font-bold ">Credit Furnisher</p>
										<div className="w-[100px] h-[1px] bg-[#a3a3a3] " />
										<p className="text-[#a3a3a3] text-[14px]">{selectedDispute.credit_furnisher ? selectedDispute.credit_furnisher : "N/A"}</p>
										<div className="w-[120px] h-[2px] bg-[#333333]" />
									</div>

									<div className="flex flex-col items-center gap-2">
										<p className="text-[#333333] font-bold ">Accounts</p>
										<div className="w-[100px] h-[1px] bg-[#a3a3a3] " />
										<p className="text-[#a3a3a3] text-[14px]">{selectedDispute.account_number ? selectedDispute.account_number : "N/A"}</p>
										<div className="w-[130px] h-[2px] bg-[#333333]" />
									</div>

									<div className="flex flex-col items-center gap-2">
										<p className="text-[#333333] font-bold ">Letter Subject</p>
										<div className="w-[100px] h-[1px] bg-[#a3a3a3] " />
										<p className="text-[#a3a3a3] text-[14px]">{selectedDispute.letter_name ? selectedDispute.letter_name : "N/A"}</p>
										<div className="w-[100px] h-[2px] bg-[#333333]" />
									</div>
								</div><div className="w-[80%] h-max py-2 flex flex-col gap-2">
									<h1 className="text-[#333333] text-[16px] font-bold">Instructions</h1>
									<div className="w-[100px] bg-[#a3a3a3] h-[1px]" />
									<p className="text-[#a3a3a3] text-[10px]">
										{selectedDispute.instruction ? selectedDispute.instruction : "N/A"}
									</p>
								</div><div className="w-[90%] bg-[#a3a3a3] h-[1px]" />
								<div className="w-[80%] h-max py-2 flex items-center justify-between">
									<div className="flex items-center gap-2">
										<h1 className="text-[#181717] font-bold ">Created</h1>
										<p className="text-[#333333] bg-[#a3a3a3] w-[30px] h-[30px] flex justify-center items-center rounded-full">{disputes.length}</p>
									</div>

									<div className="flex items-center  justify-center gap-2">
										<button className="w-[100px] xl:w-[200px] text-[8px] xl:text-[16px] h-[40px] rounded-3xl text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200"> CREATE NEW DISPUTE</button>
										<button>
											<FilterOutlined />
										</button>
									</div>
								</div>
								<div className="w-[80%]  h-[100px] py-2 mt-2 flex items-center overflow-x-auto overflow-y-hidden">
									<div className="bg-gradient-to-r from-blue-300 to-blue-400 w-[4px] h-[80px]" />
									<div className="w-full h-full bg-[#33333305] flex items-center justify-between gap-8">
										<FieldTimeOutlined className="text-[#1380ff] self-end text-xl mb-2 ml-2" />
										<div className="w-full h-full flex  items-center justify-between px-2">
											<div className="flex flex-col items-center gap-2 justify-start">
												<p className="text-[#a3a3a3] text-[12px]">EQUIFAX</p>
												<h1 className="font-semibold text-[15px] text-[#181717]">{ }</h1>
											</div>
											<div className="flex flex-col items-center gap-2 justify-start">
												<p className="text-[#a3a3a3] text-[12px]">DATE</p>
												<h1 className="font-semibold text-[15px] text-[#181717]">{selectedDispute.createdAt ? selectedDispute.createdAt.slice(0, 10) : "N/A"}</h1>
											</div>
											<div className="flex flex-col items-center gap-2 justify-start">
												<p className="text-[#a3a3a3] text-[12px]">STATUS</p>
												<h1 className="font-semibold text-[15px] text-[#181717]">
													{selectedDispute.status ? selectedDispute.status : "N/A"}
													<Dropdown
														overlayStyle={{
															border: "none",
														}}
														menu={{
															items,
															style: {
																backgroundColor: "black",
																color: "white",
															},
														}}
														placement="topLeft"
													>
														<Button
															style={{
																border: "none",
															}}
														>
															<QuestionCircleOutlined />
														</Button>
													</Dropdown>
												</h1>
											</div>
										</div>
										<div className="flex gap-4 text-xl">
											<button
												onClick={() => {
													setHidddden(!hidddden);
												}}>
												<SmallDashOutlined />
											</button>
											<button>
												<PlusCircleOutlined />
											</button>
										</div>
									</div>
								</div>
								<div className={`w-full h-full ${hidddden ? "hidden" : "flex"} items-center justify-center gap-4 overflow-x-auto overflow-y-hidden`}>
									<Button className="flex flex-col items-center justify-center gap-1 text-[#a7a9ac] border-[2px] rounded-md w-[200px] h-[60px]">
										{" "}
										<EyeInvisibleOutlined /> Preview
									</Button>

									<Button onClick={handleUpdate} className="flex flex-col bg-[#1380ff] text-white items-center justify-center gap-1 rounded-md w-[200px] h-[60px]">

										<CheckCircleOutlined />
										Mark as Sent
									</Button>
								</div>
							</div >
						)
						)}
					</div>
					{selectedUser?.length === 0 ? "" :
						< div className="div2 w-[30%] mt-[10%] mr-5  h-max py-2 gap-4 flex flex-col justify-between">
							<div className="w-[80%]  h-auto bg-white rounded-lg shadow-md flex gap-8 pt-4 flex-col  items-start">
								<h1 className="text-[#000000] ml-2 text-[20px]">Recent Disputes</h1>
								{disputes?.slice(-3)?.map((item: any, key: any) => {
									return (
										<div className="w-full h-max flex items-center justify-start ml-4 gap-4 " key={key}>
											<CheckCircleOutlined className="text-green-600" />
											<div>
												<h1 className="text-[14px]">
													{item?.letter_name}
												</h1>
												<p className="text-[#A3A3A3] text-[7px] font-ligth">{item.instruction}</p>
											</div>
										</div>
									);
								})}
							</div>
							<div className="w-[80%] h-[400px] bg-white rounded-lg shadow-md flex gap-8 pt-4 flex-col  items-center  justify-start">

								<div className="flex w-full px-4">
									<input
										className=" border-solid border-1 border-[1px] rounded-lg w-full h-[40px] px-4"
										type="text"
										placeholder="ENTER TASK"
										value={title}
										onChange={(e: any) => setTitle(e.target.value)}
									/>
									<Button onClick={handleTask} className="  ml-1 bg-blue-500 text-white h-[40px] px-4">ADD</Button>
								</div>
								<div className="flex items-center w-full h-max justify-between px-4">
									<p className="text-[#161616] text-[15px]">Upcoming Tasks</p>

								</div>
								<div className="w-full overflow-auto" >
									{task?.map((item: any, index: any) => {
										return <div className=" flex items-center h-max justify-between  px-4 mb-2 border-2 border-[#E0E0E0] rounded-lg mx-2" key={index}>
											<div className=" max-w-[60%]">
												<p className={`${item.status === "completed" ? " line-through " : ""}`}>{item.title}</p>
											</div>
											<div className="">
												<Button className="  text-center border-none rounded-sm mr-1 cursor-pointer" onClick={() => { handleUpdateTask(item._id) }}>
													<CheckCircleOutlined className={`${item.status === "completed" ? "text-green-600 " : "text-red-600"}   rounded-sm   cursor-pointer`} />
												</Button>
												|
												<Button className=" text-center border-none rounded-sm mr-1 cursor-pointer" onClick={() => { handleDeleteTask(item._id) }}>
													<DeleteOutlined className=" text-red-600   rounded-sm   cursor-pointer" />
												</Button>
											</div>
										</div>


									})}
								</div>


							</div>
						</div>
					}
				</div>
			</section >
			<div className={`w-[80%] bg-white h-max ${sidebar ? "hidden" : "absolute"} top-2 right-1 pt-6`}>
				<button
					onClick={() => {
						setSidebar(!sidebar);
					}}>
					<BarsOutlined className="text-xl" />
				</button>
				<div className="div2 w-full  h-max py-2 gap-4 flex  items-center justify-start pt-10 flex-col">
					<div className="w-[80%] h-[400px] bg-white rounded-lg shadow-md flex gap-8 pt-4 flex-col  items-center ml-3">
						<h1 className="text-[#000000] text-[20px]">Recent Activity</h1>
						{users?.slice(0, 3)?.map((user: any, key: any) => {
							return (
								<div className="w-full h-max flex items-center justify-center gap-4" key={key}>
									<div className="w-[50px] h-[50px] bg-black rounded-full" />
									<div>
										<h1 className="text-[14px]">
											{user?.first_name} {user?.last_name}
										</h1>
										<p className="text-[#A3A3A3] text-[7px] font-ligth">Logged in 20:00 09/02/2023</p>
									</div>
								</div>
							);
						})}
					</div>
					<div className="w-[80%] h-[400px] bg-white rounded-lg shadow-md flex gap-8 pt-4 flex-col  items-center ml-3">
						<div className="flex items-center w-full h-max justify-between px-4">
							<p className="text-[#161616] text-[15px]">Upcoming Tasks</p>
							<button className="border-[1px] border-[#161616] rounded-lg w-[85px] h-[34px]">See All</button>
						</div>
						<div className="w-[80%]  h-max flex items-center bg-[#D7EDF840] rounded-lg justify-center gap-4 ">
							<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">GH</div>
							<div>
								<h1 className="text-[14px]">Gabriel Hamilton</h1>
								<p className="text-[#A3A3A3] text-[7px] font-ligth">Logged in 20:00 09/02/2023</p>
								<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">Request Payment</div>
							</div>
							<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
						</div>
						<div className="w-[80%]  h-max flex items-center bg-[#FF9F1C17] rounded-lg justify-center gap-4 ">
							<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">GH</div>
							<div>
								<h1 className="text-[14px]">Gabriel Hamilton</h1>
								<p className="text-[#A3A3A3] text-[7px] font-ligth">Logged in 20:00 09/02/2023</p>
								<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">Request Payment</div>
							</div>
							<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
						</div>
						<div className="w-[80%]  h-max flex items-center bg-[#FAFF182E] rounded-lg justify-center gap-4 ">
							<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">GH</div>
							<div>
								<h1 className="text-[14px]">Gabriel Hamilton</h1>
								<p className="text-[#A3A3A3] text-[7px] font-ligth">Logged in 20:00 09/02/2023</p>
								<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">Request Payment</div>
							</div>
							<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
						</div>
					</div>
				</div>
			</div>
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

						{disputes && disputes.map((item: any) => {
							return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{item.equifax ? (
										<CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
									) : (
										<CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
									)}
								</th>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{item.experian ? (
										<CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
									) : (
										<CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
									)}
								</th>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{item.trans_union ? (
										<CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
									) : (
										<CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
									)}
								</th>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												item.equifax_letter
											)
										}
									>
										VIEW
									</button>
								</th>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												item.experian_letter
											)
										}
									>
										VIEW
									</button>
								</th>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												item.trans_union_letter
											)
										}
									>
										VIEW
									</button>
								</th>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												item.equifax_report
											)
										}
									>
										VIEW
									</button>
								</th>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												item.experian_report
											)
										}
									>
										VIEW
									</button>
								</th>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												item.transUnion_report
											)
										}
									>
										VIEW
									</button>
								</th>
								<th>
									<Button onClick={() => {
										setSelectedDispute(item)

									}}>
										View Details
									</Button>
								</th>

							</tr>

						})
						}
					</tbody>
				</table>
			</div>
		</>
	);
};
