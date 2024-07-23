"use client"
import Card from "@/components/admin/card"
import Card1 from "@/components/admin/Card1"
import { Flex, Progress } from "antd"

// @ts-ignore
import type { MenuProps } from "antd"
import { Button, Dropdown, Space } from "antd"
import { DownCircleOutlined, SearchOutlined } from "@ant-design/icons"
import { FilterOutlined } from "@ant-design/icons"
import { FieldTimeOutlined } from "@ant-design/icons"
import { SortAscendingOutlined } from "@ant-design/icons"
import { FileAddOutlined } from "@ant-design/icons"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { PlusCircleOutlined } from "@ant-design/icons"
import { SmallDashOutlined } from "@ant-design/icons"
import { EyeInvisibleOutlined } from "@ant-design/icons"
import { CheckCircleOutlined } from "@ant-design/icons"
import { BarsOutlined } from "@ant-design/icons"
import Graph from "@/components/admin/Graph"
import { useState, useEffect } from "react"
import axios from "axios"
import Winning from "@/components/admin/Progress"

interface User {
	_id: number
	first_name: string
	last_name: string
	email: string
	password: string
	dob: string
	phone: string
	ss_number: string
	payment_status: string
	city: string
	state: string
	zip_code: string
	createdAt: string
	updatedAt: string
}

export const AddClientOption2Form = () => {
	const [hidden, setHidden] = useState(true)
	const [hiddden, setHiddden] = useState(true)
	const [hidddden, setHidddden] = useState(true)
	const [sidebar, setSidebar] = useState(true)
	const [sort, setSort] = useState(true)
	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		;(async () => {
			await axios
				.get("http://54.87.77.177:3001/user")
				?.then((res) => {
					console.log(res)
					setUsers(res?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<>
					<h1 style={{ color: "white" }} className="font-bold">
						ACTION NEEDED
					</h1>
					<p style={{ color: "white" }} className="font-light">
						Once you’ve mailed your dispute letter, make sure to
						mark your letter as SENT
					</p>
				</>
			)
		}
	]

	return (
		<>
			<section className="w-full h-full mt-20 relative flex flex-col items-center xl:block">
				<div className="w-full  mt-12 xl:mt-0 h-max py-2 flex-col xl:flex-row flex items-center justify-between px-3">
					<h1 className="text-[#686666] font-bold text-[50px]">
						Active Disputes
					</h1>
					<div className=" w-full xl:w-[50%]  h-max py-2   flex items-center justify-evenly xl:justify-start gap-4">
						<button className="w-[100px] sm:w-[120px] md:w-[130px] xl:w-[150px] h-[50px] border-[#737373] border-[1px] rounded-full">
							Sort By Filter{" "}
							<FilterOutlined className="text-[#1380FF]" />{" "}
						</button>
						<div className="flex items-center gap-2">
							<SearchOutlined className="text-[#2D264B]" />
							<input
								type="text"
								className="outline-none xl:w-[150px] w-[100px]  sm:w-[120px] md:w-[130px] "
								placeholder="Search"
							/>
							<button className="text-white bg-gradient-to-b from-[#1380FF] to-[#8ECAE6] w-[80px]  sm:w-[100px] md:w-[130px]   xl:w-[130px] h-[50px] rounded-full">
								Find Disputes
							</button>
						</div>
					</div>
				</div>

				<div className="w-full h-max   py-2 flex gap-4 items-center justify-center xl:justify-start flex-wrap px-4 ">
					<Card quantity={users?.length} />
					<Card1
						quantity={
							users?.filter((user) => {
								return user?.payment_status === "paid"
							})?.length || 0
						}
					/>
				</div>

				<button
					className="xl:hidden block font-bold w-[200px] h-[40px] rounded-full bg-[#1380ff] text-white "
					onClick={() => {
						setSidebar(!sidebar)
					}}
				>
					See Upcoming Tasks
				</button>

				<div className="w-full h-full flex  items-start  mt-10">
					<div className="div1  w-full lg:w-[70%] h-full  flex flex-col items-center">
						<div className="graph w-full  sm:w-[70%] overflow-x-auto    flex flex-col items-center justify-center overflow-y-hidden h-[600px] rounded-xl bg-white shadow-md ">
							<div className="w-[600px] h-[600px] pl-36 sm:pl-20 md:pl-10 xl:pl-0 overflow-x-auto overflow-y-hidden flex flex-col items-center justify-center gap-10">
								<div className="w-full flex items-center justify-between px-2 ">
									<div className="flex flex-col ">
										<h1 className="text-[#333333] text-[24px]">
											Letter Progress
										</h1>
										<p className="text-[#A3A3A3] text-[10px]">
											On going...
										</p>
									</div>
									<button className="w-[200px] h-[40px] bg-[#EEEEEE42] rounded-full">
										This Month
									</button>
								</div>

								<div className="w-full h-full">
									<Graph />
								</div>
							</div>
						</div>

						<div className="w-[80%]  h-max py-2 mt-10 flex items-center justify-between">
							<h1 className="text-[20px] text-[#333333] font-semibold">
								Report
							</h1>

							<div className="w-max h-max relative">
								<button
									onClick={() => {
										setSort(!sort)
									}}
									className="w-[200px] h-[40px]  relative rounded-full flex items-center justify-center gap-4 px-2 bg-[#f4f4f4]"
								>
									<DownCircleOutlined />
									Sort By
									<SortAscendingOutlined className="text-[#1380ff] mr-4" />
								</button>

								<div
									className={`absolute ${
										sort ? "hidden" : "flex"
									} flex-col pt-2 gap-2 items-center top-10 rounded-2xl w-[200px] h-[300px] bg-white shadow-sm`}
								>
									<div className="flex flex-col items-start gap-2">
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input
												type="checkbox"
												name="chck"
												id="1"
											/>
											<p>Newest</p>
										</div>
										<div className="flex gap-3 text-[14px] text-[#686666]">
											<input
												type="checkbox"
												name="chck"
												id="1"
											/>
											<p>Older</p>
										</div>
										<p className="text-[#A3A3A3] text-[10px]">
											According To Credit Score
										</p>
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input
												type="checkbox"
												name="chck"
												id="1"
											/>
											<p>200-500</p>
										</div>
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input
												type="checkbox"
												name="chck"
												id="1"
											/>
											<p>600-1000</p>
										</div>
										<p className="text-[#A3A3A3] text-[10px]">
											According To Letter Disputes
										</p>
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input
												type="checkbox"
												name="chck"
												id="1"
											/>
											<p>Created</p>
										</div>
										<div className="flex gap-4 text-[14px] text-[#686666]">
											<input
												type="checkbox"
												name="chck"
												id="1"
											/>
											<p>Sent</p>
										</div>
										<div className="flex gap-2 text-[14px] text-[#686666]">
											<input
												type="checkbox"
												name="chck"
												id="1"
											/>
											<p>Completed</p>
										</div>
									</div>
									<div className="flex gap-2">
										<button className="text-[#CFCFCF]">
											Clear
										</button>
										<button className="bg-green-400  text-white rounded-full w-[95px] h-[30px]">
											Apply Filter
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="w-[80%] h-max py-2 flex flex-col mt-1 gap-4 items-center bg-white rounded-lg shadow-md">
							<select
								name="this week"
								id="1"
								className="bg-[#F1F1F1] w-[100px] h-[30px] self-start rounded-full ml-2 mt-2"
							>
								<option value="This Week">This Week</option>
								<option value="Yesterday">Yesterday</option>
							</select>
							<div className="name w-[80%] h-[100px] mt-2 bg-[#F6F7F8] flex items-center rounded-lg justify-center gap-2 flex-col">
								<h1 className="text-[#181818] text-[20px]">
									John Blake
								</h1>
								<p className="text-[#8F8F8F] text-[13px] font-light">
									missvanniel@gmail.com
								</p>
							</div>
							<div className="progress w-[50%] justify-center h-[100px] flex items-center gap-4 ">
								<Winning />

								<Winning />
								<Winning />
							</div>

							<div className="w-[25%] flex items-center justify-center h-max py-2 gap-4">
								<div className="flex flex-col items-center gap-2">
									<button className="w-[50px] h-[50px] rounded-lg bg-[#FFCC00] text-white">
										<SearchOutlined className="text-xl" />
									</button>
									<p className="text-[#333333] text-[10px] font-light">
										View Uploaded Report
									</p>
								</div>

								<div className="flex flex-col items-center gap-2">
									<button className="w-[50px] h-[50px] rounded-lg bg-[#88A8D3] text-white">
										<FileAddOutlined className="text-xl" />
									</button>
									<p className="text-[#333333] text-[10px] font-light">
										View Your Letter
									</p>
								</div>
							</div>

							<div className="w-[80%] h-max py-2 flex flex-col xl:flex-row items-center  gap-8">
								<div className="flex flex-col items-center gap-2">
									<p className="text-[#333333] font-bold ">
										Reason
									</p>
									<div className="w-[100px] h-[1px] bg-[#a3a3a3]" />
									<p className="text-[#a3a3a3] text-[14px]">
										Charge Off
									</p>
									<div className="w-[100px] h-[2px] bg-[#333333]" />
								</div>

								<div className="flex flex-col items-center gap-2">
									<p className="text-[#333333] font-bold ">
										Credit Furnisher
									</p>
									<div className="w-[100px] h-[1px] bg-[#a3a3a3] " />
									<p className="text-[#a3a3a3] text-[14px]">
										Tmobile
									</p>
									<div className="w-[120px] h-[2px] bg-[#333333]" />
								</div>

								<div className="flex flex-col items-center gap-2">
									<p className="text-[#333333] font-bold ">
										Accounts
									</p>
									<div className="w-[100px] h-[1px] bg-[#a3a3a3] " />
									<p className="text-[#a3a3a3] text-[14px]">
										39394
									</p>
									<div className="w-[130px] h-[2px] bg-[#333333]" />
								</div>

								<div className="flex flex-col items-center gap-2">
									<p className="text-[#333333] font-bold ">
										Letter Subject
									</p>
									<div className="w-[100px] h-[1px] bg-[#a3a3a3] " />
									<p className="text-[#a3a3a3] text-[14px]">
										Bureau No Response
									</p>
									<div className="w-[100px] h-[2px] bg-[#333333]" />
								</div>
							</div>

							<div className="w-[80%] h-max py-2 flex flex-col gap-2">
								<h1 className="text-[#333333] text-[16px] font-bold">
									Instructions
								</h1>
								<div className="w-[100px] bg-[#a3a3a3] h-[1px]" />
								<p className="text-[#a3a3a3] text-[10px]">
									The account status on my credit report for
									[Account Name] is incorrect. It is currently
									marked as "Late" for [Month/Year], but I
									made the payment on time, and there should
									be no late payment reported for that period.
									This error is negatively impacting my credit
									score, and I kindly request that it be
									corrected
								</p>
							</div>

							<div className="w-[90%] bg-[#a3a3a3] h-[1px]" />

							<div className="w-[80%] h-max py-2 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<h1 className="text-[#181717] font-bold ">
										Created
									</h1>
									<p className="text-[#333333] bg-[#a3a3a3] w-[20px] pl-1 h-[20px] rounded-full">
										3
									</p>
								</div>

								<div className="flex items-center  justify-center gap-2">
									<button className="w-[100px] xl:w-[200px] text-[8px] xl:text-[16px] h-[40px] rounded-3xl text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200">
										{" "}
										CREATE NEW DISPUTE
									</button>
									<button>
										<FilterOutlined />
									</button>
								</div>
							</div>

							<div className="w-[80%]  h-[100px] py-2 mt-2 flex items-center overflow-x-auto overflow-y-hidden">
								<div className="bg-gradient-to-r from-blue-300 to-blue-400 w-[4px] h-[100px]" />

								<div className="w-full h-full py-2 bg-[#33333305] flex items-center justify-between gap-8">
									<FieldTimeOutlined className="text-[#1380ff] self-end text-xl mb-2 ml-2" />

									<div className="w-full h-full flex items-center gap-12 px-2">
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												EQUIFAX
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												Round 1
											</h1>
										</div>
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												DATE
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												7/11/2023
											</h1>
										</div>
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												STATUS
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												Action Needed
												<Dropdown
													overlayStyle={{
														border: "none"
													}}
													menu={{
														items,
														style: {
															backgroundColor:
																"black",
															color: "white"
														}
													}}
													placement="topLeft"
												>
													<Button
														style={{
															border: "none"
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
												setHidden(!hidden)
											}}
										>
											<SmallDashOutlined />
										</button>
										<button>
											<PlusCircleOutlined />
										</button>
									</div>
								</div>
							</div>

							<div
								className={`w-full h-full ${
									hidden ? "hidden" : "flex"
								} items-center justify-center gap-4 overflow-x-auto overflow-y-hidden`}
							>
								<button className="flex flex-col items-center justify-between gap-1 text-[#a7a9ac] border-[2px] rounded-md w-[200px] h-[60px]">
									{" "}
									<EyeInvisibleOutlined /> Preview
								</button>
								<button className="flex flex-col bg-[#1380ff] text-white items-center justify-between gap-1 rounded-md w-[200px] h-[60px]">
									<CheckCircleOutlined />
									Mark as Done
								</button>
							</div>

							<div className="w-[80%]  h-[100px] py-2 mt-2 flex items-center overflow-x-auto overflow-y-hidden">
								<div className="bg-gradient-to-r from-blue-300 to-blue-400 w-[4px] h-[80px]" />
								<div className="w-full h-full bg-[#33333305] flex items-center justify-between gap-8">
									<FieldTimeOutlined className="text-[#1380ff] self-end text-xl mb-2 ml-2" />

									<div className="w-full h-full flex items-center gap-12 px-2">
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												EQUIFAX
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												Round 1
											</h1>
										</div>
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												DATE
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												7/11/2023
											</h1>
										</div>
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												STATUS
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												Action Needed
												<Dropdown
													overlayStyle={{
														border: "none"
													}}
													menu={{
														items,
														style: {
															backgroundColor:
																"black",
															color: "white"
														}
													}}
													placement="topLeft"
												>
													<Button
														style={{
															border: "none"
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
												setHiddden(!hiddden)
											}}
										>
											<SmallDashOutlined />
										</button>
										<button>
											<PlusCircleOutlined />
										</button>
									</div>
								</div>
							</div>

							<div
								className={`w-full h-full ${
									hiddden ? "hidden" : "flex"
								} items-center justify-center gap-4 overflow-x-auto overflow-y-hidden`}
							>
								<button className="flex flex-col items-center justify-between gap-1 text-[#a7a9ac] border-[2px] rounded-md w-[200px] h-[60px]">
									{" "}
									<EyeInvisibleOutlined /> Preview
								</button>
								<button className="flex flex-col bg-[#1380ff] text-white items-center justify-between gap-1 rounded-md w-[200px] h-[60px]">
									<CheckCircleOutlined />
									Mark as Done
								</button>
							</div>

							<div className="w-[80%]  h-[100px] py-2 mt-2 flex items-center overflow-x-auto overflow-y-hidden">
								<div className="bg-gradient-to-r from-blue-300 to-blue-400 w-[4px] h-[80px]" />
								<div className="w-full h-full bg-[#33333305] flex items-center justify-between gap-8">
									<FieldTimeOutlined className="text-[#1380ff] self-end text-xl mb-2 ml-2" />

									<div className="w-full h-full flex items-center gap-12 px-2">
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												EQUIFAX
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												Round 1
											</h1>
										</div>
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												DATE
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												7/11/2023
											</h1>
										</div>
										<div className="flex flex-col items-center gap-2 justify-start">
											<p className="text-[#a3a3a3] text-[12px]">
												STATUS
											</p>
											<h1 className="font-semibold text-[15px] text-[#181717]">
												Action Needed
												<Dropdown
													overlayStyle={{
														border: "none"
													}}
													menu={{
														items,
														style: {
															backgroundColor:
																"black",
															color: "white"
														}
													}}
													placement="topLeft"
												>
													<Button
														style={{
															border: "none"
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
												setHidddden(!hidddden)
											}}
										>
											<SmallDashOutlined />
										</button>
										<button>
											<PlusCircleOutlined />
										</button>
									</div>
								</div>
							</div>

							<div
								className={`w-full h-full ${
									hidddden ? "hidden" : "flex"
								} items-center justify-center gap-4 overflow-x-auto overflow-y-hidden`}
							>
								<button className="flex flex-col items-center justify-between gap-1 text-[#a7a9ac] border-[2px] rounded-md w-[200px] h-[60px]">
									{" "}
									<EyeInvisibleOutlined /> Preview
								</button>
								<button className="flex flex-col bg-[#1380ff] text-white items-center justify-between gap-1 rounded-md w-[200px] h-[60px]">
									<CheckCircleOutlined />
									Mark as Done
								</button>
							</div>
						</div>
					</div>

					<div className="div2 w-[30%]    h-max py-2 gap-4 xl:flex hidden items-center justify-start flex-col">
						<div className="w-[60%] h-[400px] bg-white rounded-lg shadow-md flex gap-8 pt-4 flex-col  items-center ml-3">
							<h1 className="text-[#000000] text-[20px]">
								Recent Activity
							</h1>
							{users?.slice(0, 3)?.map((user, key) => {
								return (
									<div
										className="w-full h-max flex items-center justify-center gap-4"
										key={key}
									>
										<div className="w-[50px] h-[50px] bg-black rounded-full" />
										<div>
											<h1 className="text-[14px]">
												{user?.first_name}{" "}
												{user?.last_name}
											</h1>
											<p className="text-[#A3A3A3] text-[7px] font-ligth">
												Logged in 20:00 09/02/2023
											</p>
										</div>
									</div>
								)
							})}
						</div>

						<div className="w-[60%] h-[400px] bg-white rounded-lg shadow-md flex gap-8 pt-4 flex-col  items-center  justify-start ml-3">
							<div className="flex items-center w-full h-max justify-between px-4">
								<p className="text-[#161616] text-[15px]">
									Upcoming Tasks
								</p>
								<button className="border-[1px] border-[#161616] rounded-lg w-[85px] h-[34px]">
									See All
								</button>
							</div>

							<div className="w-[80%]  h-max flex items-center bg-[#D7EDF840] rounded-lg justify-center gap-4 ">
								<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">
									GH
								</div>
								<div>
									<h1 className="text-[14px]">
										Gabriel Hamilgton
									</h1>
									<p className="text-[#A3A3A3] text-[7px] font-ligth">
										Logged in 20:00 09/02/2023
									</p>
									<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">
										Request Payment
									</div>
								</div>

								<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
							</div>

							<div className="w-[80%]  h-max flex items-center bg-[#FF9F1C17] rounded-lg justify-center gap-4 ">
								<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">
									GH
								</div>
								<div>
									<h1 className="text-[14px]">
										Gabriel Hamilgton
									</h1>
									<p className="text-[#A3A3A3] text-[7px] font-ligth">
										Logged in 20:00 09/02/2023
									</p>
									<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">
										Request Payment
									</div>
								</div>

								<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
							</div>

							<div className="w-[80%]  h-max flex items-center bg-[#FAFF182E] rounded-lg justify-center gap-4 ">
								<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">
									GH
								</div>
								<div>
									<h1 className="text-[14px]">
										Gabriel Hamilgton
									</h1>
									<p className="text-[#A3A3A3] text-[7px] font-ligth">
										Logged in 20:00 09/02/2023
									</p>
									<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">
										Request Payment
									</div>
								</div>

								<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className={`w-[80%] bg-white h-max ${
					sidebar ? "hidden" : "absolute"
				} top-2 right-1 pt-6`}
			>
				<button
					onClick={() => {
						setSidebar(!sidebar)
					}}
				>
					<BarsOutlined className="text-xl" />
				</button>
				<div className="div2 w-full  h-max py-2 gap-4 flex  items-center justify-start pt-10 flex-col">
					<div className="w-[80%] h-[400px] bg-white rounded-lg shadow-md flex gap-8 pt-4 flex-col  items-center ml-3">
						<h1 className="text-[#000000] text-[20px]">
							Recent Activity
						</h1>
						{users?.slice(0, 3)?.map((user, key) => {
							return (
								<div
									className="w-full h-max flex items-center justify-center gap-4"
									key={key}
								>
									<div className="w-[50px] h-[50px] bg-black rounded-full" />
									<div>
										<h1 className="text-[14px]">
											{user?.first_name} {user?.last_name}
										</h1>
										<p className="text-[#A3A3A3] text-[7px] font-ligth">
											Logged in 20:00 09/02/2023
										</p>
									</div>
								</div>
							)
						})}
					</div>

					<div className="w-[80%] h-[400px] bg-white rounded-lg shadow-md flex gap-8 pt-4 flex-col  items-center ml-3">
						<div className="flex items-center w-full h-max justify-between px-4">
							<p className="text-[#161616] text-[15px]">
								Upcoming Tasks
							</p>
							<button className="border-[1px] border-[#161616] rounded-lg w-[85px] h-[34px]">
								See All
							</button>
						</div>

						<div className="w-[80%]  h-max flex items-center bg-[#D7EDF840] rounded-lg justify-center gap-4 ">
							<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">
								GH
							</div>
							<div>
								<h1 className="text-[14px]">
									Gabriel Hamilgton
								</h1>
								<p className="text-[#A3A3A3] text-[7px] font-ligth">
									Logged in 20:00 09/02/2023
								</p>
								<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">
									Request Payment
								</div>
							</div>

							<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
						</div>

						<div className="w-[80%]  h-max flex items-center bg-[#FF9F1C17] rounded-lg justify-center gap-4 ">
							<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">
								GH
							</div>
							<div>
								<h1 className="text-[14px]">
									Gabriel Hamilgton
								</h1>
								<p className="text-[#A3A3A3] text-[7px] font-ligth">
									Logged in 20:00 09/02/2023
								</p>
								<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">
									Request Payment
								</div>
							</div>

							<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
						</div>

						<div className="w-[80%]  h-max flex items-center bg-[#FAFF182E] rounded-lg justify-center gap-4 ">
							<div className="w-[50px] h-[50px] bg-[#DEF9FF] text-[#4075FF] flex items-center justify-center rounded-full">
								GH
							</div>
							<div>
								<h1 className="text-[14px]">
									Gabriel Hamilgton
								</h1>
								<p className="text-[#A3A3A3] text-[7px] font-ligth">
									Logged in 20:00 09/02/2023
								</p>
								<div className="text-[#4075FF] text-[10px] flex items-center justify-center bg-[#def9ff] w-[110px] h-[25px] rounded-full">
									Request Payment
								</div>
							</div>

							<div className="w-[20px] h-[20px] bg-[#3049FE] rounded-full" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
