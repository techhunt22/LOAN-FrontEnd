"use client"
// @ts-ignore

import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { MoreOutlined } from "@ant-design/icons"
import { MenuOutlined } from "@ant-design/icons"
import { HolderOutlined } from "@ant-design/icons"
import { EditOutlined } from "@ant-design/icons"

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

interface DocsContent {
	id: number
	email: string
	photo_ID: string
	proof_of_address: string
	user_agreement_freeze: string
	consumer_office_freeze: string
	lexis_nexis_freeze: string
	teletrack_freeze: string
	boompay: string
	kikoff: string
	self: string
	creditstrong: string
	experian: string
	credit: string
	innovice: string
	clarityservices: string
	checksystems: string
	sagestreamilc: string
	smartcredit: string
	createdAt: string
	updatedAt: string
}

interface Provider {
	username: string
	password: string
	phone_no: string
	security_word: string
	report_provider: string
}

const TableRow = ({
	user,
	showModal,
	handleRefresh
}: {
	user: User
	showModal: any
	handleRefresh: any
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [showDropdown, setShowDropdown] = useState(false)
	const [fullName, setFullName] = useState(
		user?.first_name && user?.first_name
			? `${user?.first_name} ${user?.last_name}`
			: ""
	)
	const [email, setEmail] = useState(user?.email || "")
	const [password, setPassword] = useState(user?.password || "")
	const [phoneNumber, setPhoneNumber] = useState(user?.phone || "")
	const [city, setCity] = useState(user?.city || "")
	const [state, setState] = useState(user?.state || "")
	const [zipCode, setZipCode] = useState(user?.zip_code || "")
	const [SSNumber, setSSNumber] = useState(user?.ss_number || "")

	const handleSave = async () => {
		setIsEditing(false)
		setShowDropdown(false)

		const payload = {
			first_name: fullName?.split(" ")[0] || "",
			last_name: fullName?.split(" ")[1] || "",
			email: email,
			password: password,
			phoneNumber: phoneNumber,
			ss_number: SSNumber,
			city: city,
			state: state,
			zip_code: zipCode
		}

		await axios
			.put(`http://54.87.77.177:3001/user/${user?._id}`, payload)
			?.then((res) => {
				console.log(res)
				handleRefresh()
			})
			?.catch((err) => {
				console.log(err)
			})
	}

	const handleDelete = async () => {
		setShowDropdown(false)

		await axios
			.delete(`http://54.87.77.177:3001/user/${user?._id}`)
			?.then((res) => {
				console.log(res)
				handleRefresh()
			})
			?.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className="w-full relative flex flex-row justify-between items-center text-left px-2 text-[14px] font-bold xl:font-light xl:text-[10px] text-[#737373] border-b-[1px] border-[#737373]">
			{isEditing ? (
				<input
					type="text"
					className="bg-gray-200 w-[13%]"
					value={fullName}
					onChange={(e) => {
						setFullName(e.target.value)
					}}
				/>
			) : (
				<div className="w-[13%] flex flex-row items-center gap-3">
					<input type="checkbox" name="chck" id="check" />
					<button
						className="text-blue-500 underline"
						onClick={() => showModal(user)}
					>
						<p className="max-w-24 truncate">{`${user?.first_name} ${user?.last_name}`}</p>
					</button>
				</div>
			)}
			{isEditing ? (
				<input
					type="text"
					className="bg-gray-200 w-[13%]"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				/>
			) : (
				<p className="w-[13%] text-center truncate">{user?.email}</p>
			)}
			{isEditing ? (
				<input
					type="text"
					className="bg-gray-200 w-[10%]"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>
			) : (
				<p className="w-[10%] text-center truncate">{user?.password}</p>
			)}
			{isEditing ? (
				<input
					type="text"
					className="bg-gray-200 w-[12%]"
					value={phoneNumber}
					onChange={(e) => {
						setPhoneNumber(e.target.value)
					}}
				/>
			) : (
				<p className="w-[12%] text-center truncate">{user?.phone}</p>
			)}
			{isEditing ? (
				<input
					type="text"
					className="bg-gray-200 w-[7%]"
					value={city}
					onChange={(e) => {
						setCity(e.target.value)
					}}
				/>
			) : (
				<p className="w-[7%] text-center truncate">{user?.city}</p>
			)}
			{isEditing ? (
				<input
					type="text"
					className="bg-gray-200 w-[7%]"
					value={state}
					onChange={(e) => {
						setState(e.target.value)
					}}
				/>
			) : (
				<p className="w-[7%] text-center truncate">{user?.state}</p>
			)}
			{isEditing ? (
				<input
					type="text"
					className="bg-gray-200 w-[10%]"
					value={zipCode}
					onChange={(e) => {
						setZipCode(e.target.value)
					}}
				/>
			) : (
				<p className="w-[10%] text-center truncate">{user?.zip_code}</p>
			)}
			{isEditing ? (
				<input
					type="text"
					className="bg-gray-200 w-[10%]"
					value={SSNumber}
					onChange={(e) => {
						setSSNumber(e.target.value)
					}}
				/>
			) : (
				<p className="w-[10%] text-center truncate">
					{user?.ss_number}
				</p>
			)}
			<div className="w-[10%] flex items-center justify-center text-lg gap-6">
				{/* <button>
											<EditOutlined />
										</button> */}
				<button
					onClick={() => {
						setIsEditing(false)
						setShowDropdown(!showDropdown)
					}}
				>
					<HolderOutlined />
				</button>
			</div>
			{showDropdown && (
				<div className="absolute top-7 right-6 w-[100px] h-12 bg-white flex flex-col items-center justify-center gap-3 rounded-lg shadow-xl z-10">
					{isEditing ? (
						<button className="text-[#00B4D8]" onClick={handleSave}>
							Save
						</button>
					) : (
						<div className="flex flex-col items-start gap-1">
							<button
								className="text-[#00B4D8]"
								onClick={() => {
									setIsEditing(true)
								}}
							>
								Edit
							</button>
							<button
								className="text-[#EF233C]"
								onClick={handleDelete}
							>
								Delete
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default function AddClientOptionTwoForm() {
	const [hidden, setHidden] = useState(false)
	const [users, setUser] = useState<User[]>([])
	const [searchQuery, setSearchQuery] = useState<string>("")
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [selectedUser, setSelectedUser] = useState<User | null>(null)
	const [docsContent, setDocsContent] = useState<any>({})
	const [providerContent, setProviderContent] = useState<any>({})
	const modalRef = useRef<HTMLDivElement>(null)

	const setHiddenDiv = (e: any) => {
		e.preventDefault()
		setHidden(!hidden)
	}

	useEffect(() => {
		;(async () => {
			await axios
				.get("http://54.87.77.177:3001/user")
				?.then((res) => {
					console.log(res)
					setUser(res?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	const handleRefresh = async () => {
		await axios
			.get("http://54.87.77.177:3001/user")
			?.then((res) => {
				console.log(res)
				setUser(res?.data)
			})
			?.catch((err) => {
				console.log(err)
			})
	}

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	// Filter users based on search query
	// const filteredUsers = users.filter((user) =>
	// 	`${user.first_name} ${user.last_name}`
	// 		.toLowerCase()
	// 		.includes(searchQuery.toLowerCase())
	// )

	const showModal = async (user: User) => {
		try {
			let docsResponse = await fetch(
				`http://54.87.77.177:3001/doc/${user.email}`
			)
			let providerResponse = await fetch(
				`http://54.87.77.177:3001/provider/${user.email}`
			)

			if (!docsResponse.ok || !providerResponse.ok) {
				throw new Error("Network response was not ok")
			}

			let docsData = await docsResponse.json()
			let providerData = await providerResponse.json()

			console.log(docsData)
			console.log(providerData)

			setDocsContent(docsData || {}) // Ensure docsData is not null
			setProviderContent(providerData || {}) // Ensure providerData is not null
			setSelectedUser(user)
			setIsModalVisible(true)
		} catch (error) {
			console.error(
				"There was a problem with the fetch operation:",
				error
			)
		}
	}

	const handleOutsideClick = (e: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			setIsModalVisible(false)
		}
	}

	useEffect(() => {
		if (isModalVisible) {
			document.addEventListener("mousedown", handleOutsideClick)
		} else {
			document.removeEventListener("mousedown", handleOutsideClick)
		}
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick)
		}
	}, [isModalVisible])

	return (
		<>
			<h1 className="text-[40px] md:text-[50px] lg:text-[65px] ml-10 xl:ml-0 mt-4 font-bold text-[#686666]">
				Current Users
			</h1>
			<section className=" min-h-screen flex flex-col ml-4 items-start relative">
				<div className="buttons w-full h-[100px] flex items-center justify-between ">
					<div className="1 w-[50%] h-full flex items-center gap-6">
						<button className="w-[150px] h-[45px] bg-[#EFF6FF] text-[#1380FF] font-bold flex items-center gap-2 px-4 rounded-lg">
							{" "}
							<span className="text-white bg-[#1380FF] rounded-full font-bold size-6">
								{users?.filter((user) => {
									return user?.payment_status === "paid"
								})?.length || 0}
							</span>{" "}
							ACTIVE
						</button>
						<button className="w-[180px] h-[45px]  text-[#8A8D93] font-bold border-[1px] border-gray-400 flex items-center gap-2 px-4 rounded-lg">
							{" "}
							<span className="text-black bg-[#E9E9E9] font-bold rounded-full size-6">
								{users?.filter((user) => {
									return user?.payment_status !== "paid"
								})?.length || 0}
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
						<button
							className="md:hidden sm:mr-10  "
							onClick={setHiddenDiv}
						>
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
					<div className="w-[1200px] xl:w-[95%]  border-[1px] h-full overflow-visible ">
						<div className="w-full h-full py-6 mt-2 bg-[#F4F4F4] rounded-2xl">
							<div className="w-full h-full flex flex-row justify-between items-center rounded-xl text-left px-2 text-[8px] xl:text-[10px] text-[#333333] overflow-y-auto ">
								<div className="w-[13%] h-[12px] border-r-2 border-l-2 border-gray-500 gap-6 flex items-center justify-center">
									<input
										type="checkbox"
										name="chck"
										id="check"
									/>
									<p>USERS</p>
								</div>
								<div className="w-[13%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>EMAIL</p>
								</div>
								<div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>PASSWORD</p>
								</div>
								<div className="w-[12%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>PHONE NUMBER</p>
								</div>
								<div className="w-[7%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>CITY</p>
								</div>
								<div className="w-[7%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
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
						<div className="w-full h-full flex flex-col gap-3 mt-1">
							{users?.map((user: any, key) => (
								<TableRow
									user={user}
									showModal={showModal}
									handleRefresh={handleRefresh}
									key={key}
								/>
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
									<h1 className="font-bold text-xl">
										User Data
									</h1>
									{docsContent &&
									Object.keys(docsContent).length > 0 ? (
										Object.keys(docsContent).map((key) => (
											<p
												key={key}
											>{`${key}: ${docsContent[key]}`}</p>
										))
									) : (
										<p>No Docs Content</p>
									)}
								</div>
								<div>
									<h1 className="font-bold text-xl">
										Provider Data
									</h1>
									{providerContent &&
									Object.keys(providerContent).length > 0 ? (
										Object.keys(providerContent).map(
											(key) => (
												<p
													key={key}
												>{`${key}: ${providerContent[key]}`}</p>
											)
										)
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
	)
}
