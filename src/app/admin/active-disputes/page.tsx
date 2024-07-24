"use client"
// @ts-ignore

import React, { useState, useEffect, useRef } from "react"
import { CheckOutlined, CloseOutlined, FilterOutlined, SearchOutlined } from "@ant-design/icons"
import { Editor } from "@tinymce/tinymce-react"
import axios from "axios"
import Card from "@/components/admin/card"
import Card1 from "@/components/admin/Card1"
import toast from "react-hot-toast"
interface DisputeData {
	account_number: string
	createdAt: string
	credit_furnisher: string
	email: string
	equifax: boolean
	equifax_account: string
	equifax_letter: string
	equifax_report: string
	experian: boolean
	experian_account: string
	experian_letter: string
	experian_report: string
	id: number
	instruction: string
	letter_name: string
	reason: string
	transUnion_account: string
	transUnion_report: string
	trans_union: boolean
	trans_union_letter: string
	updatedAt: string
}

export default function Dispute() {
	const modalRef = useRef<HTMLDivElement>(null)
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [content, setContent] = useState("")
	const [disputes, setDisputes] = useState<DisputeData[]>([])
	const [selectedContent, setSelectedContent] = useState("")
	const [users, setUsers] = useState<any>([])
	const [search, setSearch] = useState<any>()
	const editorRef = useRef<any>(null)

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

	const fetchDisputes = async () => {
		try {
			const res = await axios.get("http://54.87.77.177:3001/dispute/all")
			const data = res?.data.data
			setDisputes(data)

		} catch (error) {
			console.log(error)
		}
	}



	useEffect(() => {
		fetchDisputes()
	}, [])

	const handleViewContent = (content: string) => {
		setSelectedContent(content)
		setIsModalVisible(true)
	}

	const handlePrint = () => {
		if (editorRef.current) {
			const content = editorRef.current.getContent()
			const printWindow = window.open("", "", "height=600,width=800")
			printWindow?.document.write(
				"<html><head><title>Print Content</title>"
			)
			printWindow?.document.write("</head><body >")
			printWindow?.document.write(content)
			printWindow?.document.write("</body></html>")
			printWindow?.document.close()
			printWindow?.print()
		}
	}


	useEffect(() => {
		; (async () => {
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


	const searchDispute = async () => {
		const data = disputes.filter((item) => item.letter_name === search)
		if (data.length !== 0) {
			toast.success(`${data.length}: results found`)
			setDisputes(data)

		} else {
			toast.error("no result found!")
			fetchDisputes()
		}


	}

	return (
		<>
			<div className="h-max py-2 flex justify-end  gap-4 mt-10 mr-4 d-flex ">
				<div className="w-full h-max   py-2 flex gap-4 items-center justify-center xl:justify-start flex-wrap px-4 ">
					<Card quantity={users?.length} />
					<Card1
						quantity={
							users?.filter((user: any) => {
								return user?.payment_status === "paid"
							})?.length || 0
						}
					/>
				</div>



				<div className="flex items-center gap-2">

					<input
						type="text"
						value={search}
						onChange={(e: any) => { setSearch(e.target.value) }}
						placeholder="Search By Name"
						className="w-[250px] h-[40px] px-2 rounded-lg outline-none border-[1px]"
					/>
					<button onClick={searchDispute} className="w-[150px] h-[45px] bg-[#1380FF] text-[#ffff] font-bold   rounded-lg">
						<span className="text-white bg-[#1380FF] rounded-full font-bold size-6">
							Find Disputes
						</span>
					</button>
				</div>
			</div>



			<section className="w-full h-full relative px-4  ">

				<div className="w-full h-full pt-20 sm:pt-24 lg:pt-0 overflow-x-auto overflow-y-auto">
					<div className="w-[1200px] xl:w-full h-full">
						<div className="w-full h-20 flex items-center mt-12 text-left bg-gray-400 gap-2 lg:gap-0">
							<p className="w-[10%]">Email</p>
							<p className="w-[7%]">Reason</p>
							<p className="w-[7%]">Credit Furnisher</p>
							<p className="w-[7%]">Instruction</p>
							<p className="w-[7%]">Account</p>
							<p className="w-[7%]">Equifax</p>
							<p className="w-[7%]">Experian</p>
							<p className="w-[7%]">TransUnion</p>
							<p className="w-[7%]">Letter Name</p>
							<p className="w-[5%]">Equifax Letter</p>
							<p className="w-[5%]">Experian Letter</p>
							<p className="w-[5%]">TransUnion Letter</p>
							<p className="w-[5%]">Equifax Report</p>
							<p className="w-[5%]">Experian Report</p>
							<p className="w-[5%]">TransUnion Report</p>
						</div>

						{disputes.map((dispute) => (
							<div
								key={dispute.id}
								className="w-full h-max py-6 text-[12px] border-b-2 border-gray-400 flex items-center text-left"
							>
								<p className="w-[10%]">{dispute.email}</p>
								<p className="w-[7%]">{dispute.reason}</p>
								<p className="w-[7%]">
									{dispute.credit_furnisher}
								</p>
								<p className="w-[7%]">
									{dispute.account_number}
								</p>
								<p className="w-[7%]">{dispute.instruction}</p>
								<p className="w-[7%]">
									{dispute.equifax ? (
										<CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
									) : (
										<CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
									)}
								</p>
								<p className="w-[7%]">
									{dispute.experian ? (
										<CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
									) : (
										<CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
									)}
								</p>
								<p className="w-[7%]">
									{dispute.trans_union ? (
										<CheckOutlined className="bg-green-600 px-2 py-2 text-white rounded-full font-bold" />
									) : (
										<CloseOutlined className="bg-red-600 px-2 py-2 text-white rounded-full font-bold" />
									)}
								</p>
								<p className="w-[7%]">{dispute.letter_name}</p>
								<p className="w-[5%]">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												dispute.equifax_letter
											)
										}
									>
										VIEW
									</button>
								</p>
								<p className="w-[5%]">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												dispute.experian_letter
											)
										}
									>
										VIEW
									</button>
								</p>
								<p className="w-[5%]">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												dispute.trans_union_letter
											)
										}
									>
										VIEW
									</button>
								</p>
								<p className="w-[5%]">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												dispute.equifax_report
											)
										}
									>
										VIEW
									</button>
								</p>
								<p className="w-[5%]">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												dispute.experian_report
											)
										}
									>
										VIEW
									</button>
								</p>
								<p className="w-[5%]">
									<button
										className="text-blue-400 underline"
										onClick={() =>
											handleViewContent(
												dispute.transUnion_report
											)
										}
									>
										VIEW
									</button>
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{isModalVisible && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div
						ref={modalRef}
						className="w-7/12 h-4/6 border-2 border-black bg-white p-4 overflow-auto"
					>
						{selectedContent?.endsWith(".webp") ? (
							<img
								src={`http://client1.jewelercart.com:4000/${selectedContent}`}
								alt="Report"
								className="w-full h-full object-contain"
							/>
						) : (
							<>
								<Editor
									apiKey="y6a32whlujeei0aww4vumf51q4qqd2zqpwvtdqzsdik3b4ig"
									initialValue={selectedContent}
									onInit={(evt, editor) =>
										(editorRef.current = editor)
									}
									init={{
										height: 500,
										resize: false,
										menubar: true,
										plugins: [
											"advlist autolink lists link image charmap print preview anchor",
											"searchreplace visualblocks code fullscreen",
											"insertdatetime media table paste code help wordcount"
										],
										toolbar:
											"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
									}}
								/>
								<button
									onClick={() => {
										handlePrint
									}}
								>
									Print
								</button>
							</>
						)}
					</div>
				</div>
			)}
		</>
	)
}
