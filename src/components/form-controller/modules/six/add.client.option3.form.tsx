"use client"
// @ts-ignore
import { EllipsisOutlined } from "@ant-design/icons"
import { StarOutlined } from "@ant-design/icons"
import { ArrowRightOutlined } from "@ant-design/icons"
import { SendOutlined } from "@ant-design/icons"
import { FileOutlined } from "@ant-design/icons"
import { CopyrightOutlined } from "@ant-design/icons"
import { MailOutlined } from "@ant-design/icons"
import Card from "@/components/admin/adminoption3card"
import { Switch } from "antd"
import { useState, useEffect } from "react"
import axios from "axios"
import { letterdata as LetterData } from "../../../../utils/letter-data"
import { Editor } from "@tinymce/tinymce-react"

type LetterData = {
	id: number
	content: string
}

interface UserData {
	id: number
	first_name: string
	last_name: string
	email: string
	password: string
	dob: string
	phone: string
	ss_number: string
	city: string
	state: string
	zip_code: string
	createdAt: string
	updatedAt: string
}

const monthsLookup = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
]

interface Dispute {
	creditor: string
	reason: string
	disputeItem: string
	equifaxStatus: string
	experianStatus: string
	transUnionStatus: string
	accountno: string
}

const AddNewDisputeModal = ({
	setIsModalOpen,
	setDisputeDetails,
	disputeDetails
}: {
	setIsModalOpen: any
	setDisputeDetails: any
	disputeDetails: any
}) => {
	const [isEquifax, setIsEquifax] = useState(
		disputeDetails?.equifaxStatus === "Positive"
	)
	const [isExperian, setIsExperian] = useState(
		disputeDetails?.experianStatus === "Positive"
	)
	const [isTransUnion, setIsTransUnion] = useState(
		disputeDetails?.transUnionStatus === "Positive"
	)
	const [accountIsSameForAll, setAccountIsSameForAll] = useState(
		disputeDetails?.accountIsSameForAll
	)
	const [accountNumber, setAccountNumber] = useState(
		disputeDetails?.accountNumber || ""
	)
	const [equifaxAccountNumber, setEquifaxAccountNumber] = useState(
		disputeDetails?.equifaxAccountNumber || ""
	)
	const [experianAccountNumber, setExperianAccountNumber] = useState(
		disputeDetails?.experianAccountNumber || ""
	)
	const [transUnionAccountNumber, setTransUnionAccountNumber] = useState(
		disputeDetails?.transUnionAccountNumber || ""
	)
	const [creditor, setCreditor] = useState(disputeDetails?.creditor || "")
	const [reason, setReason] = useState(disputeDetails?.reason || "")
	const [instruction, setInstruction] = useState(
		disputeDetails?.instruction || ""
	)

	const handleNext = () => {
		setDisputeDetails({
			creditor: creditor,
			reason: reason,
			instruction: instruction,
			accountIsSameForAll: accountIsSameForAll,
			accountNumber: accountNumber,
			equifaxAccountNumber: equifaxAccountNumber,
			experianAccountNumber: experianAccountNumber,
			transUnionAccountNumber: transUnionAccountNumber,
			equifaxStatus: isEquifax ? "Positive" : "Negative",
			experianStatus: isExperian ? "Positive" : "Negative",
			transUnionStatus: isTransUnion ? "Positive" : "Negative"
		})
		setIsModalOpen(false)
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
			<div
				className={`${
					accountIsSameForAll ? "h-[400px]" : "h-[475px]"
				} w-[400px] bg-white flex flex-col gap-5 items-center justify-center border-2 border-black p-5 z-20`}
			>
				<h1 className="text-xl font-bold">Add New Dispute Item</h1>
				<p>Select Credit Bureaus</p>
				<div className="w-full h-full flex gap-2">
					<div className="w-[50%] h-full flex flex-col">
						<div className="flex gap-2">
							<input
								type="checkbox"
								checked={isEquifax}
								onChange={() => {
									setIsEquifax(!isEquifax)
								}}
							/>
							<p>Equifax</p>
						</div>
						<div className="flex gap-2">
							<input
								type="checkbox"
								checked={isExperian}
								onChange={() => {
									setIsExperian(!isExperian)
								}}
							/>
							<p>Experian</p>
						</div>
						<div className="flex gap-2">
							<input
								type="checkbox"
								checked={isTransUnion}
								onChange={() => {
									setIsTransUnion(!isTransUnion)
								}}
							/>
							<p>TransUnion</p>
						</div>
						<p>Account Number (optional)</p>
						<div className="flex gap-2">
							<input
								type="checkbox"
								id="sameForAll"
								checked={accountIsSameForAll}
								onChange={(e) => {
									setAccountIsSameForAll(e.target.checked)
								}}
							/>
							<p>Same for all bureaus</p>
						</div>
						<div className="flex gap-2">
							<input
								type="checkbox"
								id="differentForEach"
								checked={!accountIsSameForAll}
								onChange={(e) => {
									setAccountIsSameForAll(!e.target.checked)
								}}
							/>
							<p>Different for each bureau</p>
						</div>
						{accountIsSameForAll ? (
							<div>
								<input
									type="text"
									className="w-[90%] border-2 border-gray-400 px-2"
									placeholder="Acc no"
									key="Acc no"
									value={accountNumber}
									onChange={(e) => {
										setAccountNumber(e.target.value)
									}}
								/>
							</div>
						) : (
							<div className="flex flex-col gap-2 mt-2">
								<input
									type="text"
									className="w-[90%] border-2 border-gray-400 px-2"
									placeholder="Equifax Acc no"
									key="Equifax Acc no"
									value={equifaxAccountNumber}
									onChange={(e) => {
										setEquifaxAccountNumber(e.target.value)
									}}
								/>
								<input
									type="text"
									className="w-[90%] border-2 border-gray-400 px-2"
									placeholder="Experian Acc no"
									key="Experian Acc no"
									value={experianAccountNumber}
									onChange={(e) => {
										setExperianAccountNumber(e.target.value)
									}}
								/>
								<input
									type="text"
									className="w-[90%] border-2 border-gray-400 px-2"
									placeholder="TransUnion Acc no"
									key="TransUnion Acc no"
									value={transUnionAccountNumber}
									onChange={(e) => {
										setTransUnionAccountNumber(
											e.target.value
										)
									}}
								/>
							</div>
						)}
						<div className="flex flex-row items-center gap-5 mt-3">
							<button
								className="w-[100px] h-[30px] bg-blue-500 text-white"
								onClick={handleNext}
							>
								Next
							</button>
							<button
								className="w-[100px] h-[30px] border border-black"
								onClick={() => {
									setIsModalOpen(false)
								}}
							>
								Cancel
							</button>
						</div>
					</div>
					<div className="w-[50%] h-full flex flex-col gap-4">
						<input
							type="text"
							className="w-[90%] h-[40px] border-2 border-gray-400 px-2"
							placeholder="Credit/Furnisher"
							value={creditor}
							onChange={(e) => {
								setCreditor(e.target.value)
							}}
						/>
						<input
							type="text"
							className="w-[90%] h-[40px] border-2 border-gray-400 px-2"
							placeholder="Reason"
							value={reason}
							onChange={(e) => {
								setReason(e.target.value)
							}}
						/>
						<input
							type="text"
							className="w-[90%] h-[40px] border-2 border-gray-400 px-2"
							placeholder="Instruction"
							value={instruction}
							onChange={(e) => {
								setInstruction(e.target.value)
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export const AddClientOption3Form = () => {
	const [letterOption, setLetterOption] = useState(1)
	const [letterRecipient, setLetterRecipient] = useState("")
	const [content, setContent] = useState("")
	const [selectedTemplate, setSelectedTemplate] = useState<LetterData | null>(
		null
	)
	const [selectedBureau, setSelectedBureau] = useState<string>("")
	const [userData, setUserData] = useState<UserData[]>([])
	const [selectedUser, setSelectedUser] = useState<string>()
	const [equifaxFile, setEquifaxFile] = useState()
	const [experianFile, setExperianFile] = useState()
	const [transUnionFile, setTransUnionFile] = useState()
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [disputeDetails, setDisputeDetails] = useState<any>()

	useEffect(() => {
		;(async () => {
			await axios
				.get("http://54.87.77.177:3001/user")
				?.then((res) => {
					console.log(res)
					setUserData(res?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	const disputeItems = [
		{ id: 1, name: "Default Round 1 (Dispute Credit Report Items)" },
		{ id: 2, name: "Request Annual Credit Report" },
		{ id: 3, name: "100 Word Consumer Statement" },
		{ id: 4, name: "Bureau No Response" },
		{ id: 5, name: "Bureau Re-investigation" },
		{ id: 6, name: "Bureau Warning" },
		{ id: 7, name: "Credit Inquiry Removal Request" },
		{ id: 8, name: "Demand to Comply with Investigation Request" },
		{ id: 9, name: "Dispute Accounts That Should Be Included in BK" },
		{ id: 10, name: 'Dispute After Investigation: "The Prove It" Letter' },
		{ id: 11, name: "Dispute Credit Report Items (Round 1 Alternate 2)" },
		{ id: 12, name: "Dispute Credit Report Items (Round 1 Alternate 3)" },
		{ id: 13, name: "Dispute Credit Report Items (Round 1 Alternate)" },
		{ id: 14, name: "Dispute Follow-up after no response for 30 days" },
		{ id: 15, name: "Dispute Follow-up after no response for 60 days" },
		{ id: 16, name: "Frivolous Dispute Response" },
		{ id: 17, name: "Frivolous Dispute Response (Alternate)" },
		{ id: 18, name: "Insufficient ID Response" },
		{ id: 19, name: "Intent To File Lawsuit for FCRA Violation" },
		{ id: 20, name: "Intention to File FTC Complaint - After 30 Days" },
		{
			id: 21,
			name: "Intention to File FTC Complaint - After 30 Days (Alternate)"
		},
		{ id: 22, name: "Intention to File FTC Complaint - After 60 Day" },
		{ id: 23, name: "Method of Verification (MOD)" },
		{ id: 24, name: "Method of Verification (MOD) Alternate" },
		{ id: 25, name: "Reply to Accusation of Credit Repair" },
		{ id: 26, name: "Report Identity Theft" },
		{ id: 27, name: "Report identity Then (Alternate)" },
		{ id: 28, name: "Request Removal after Bureau Investigation" },
		{ id: 29, name: "Request Removal after Creditor Verification" },
		{ id: 30, name: "Request to Add Additional Credit Information" },
		{ id: 31, name: "Request to Describe Investigation Procedures" },
		{ id: 32, name: "Request to Merge Spouse's Credit History" },
		{ id: 33, name: "Suspicious Dispute Response" },
		{ id: 34, name: "Validate Debt * comcast afini" },
		{ id: 35, name: "Validate Debt (609 Letter)" },
		{ id: 36, name: "Victim of Identity Theft" },
		{ id: 37, name: "Victim of Identity Theft (With Affidavit)" },
		{ id: 38, name: "Agreement Offer Settlement to Dismiss Judgment" },
		{ id: 39, name: "Agreement to Dismiss Court Judgment" },
		{ id: 40, name: "Basic Dispute for Creditor or Furnisher" },
		{ id: 41, name: "Cashed Check Constitutes Payment In Full" },
		{ id: 42, name: "Debt Settlement Offer" },
		{ id: 43, name: "Debt Settlement Offer (Alternate 2)" },
		{ id: 44, name: "Debt Settlement Offer (Alternate 3)" },
		{ id: 45, name: "Debt Settlement Offer (Alternate)" },
		{ id: 46, name: "Debt Settlement Offer to Dismiss Court Judgment" },
		{ id: 47, name: "Dispute Credit Card Bill" },
		{ id: 48, name: "Dispute Item" },
		{ id: 49, name: "Dispute Item (Alternate)" },
		{ id: 50, name: "Error on Credit Card Bill" },
		{ id: 51, name: "Furnisher Basic Dispute" },
		{ id: 52, name: "Furnisher No Response" },
		{ id: 53, name: "Furnisher Re-investigation" },
		{ id: 54, name: "Furnisher Warning" },
		{ id: 55, name: "Goodwill Adjustment Letter" },
		{ id: 56, name: "Goodwill Letter sent to Original Creditor" },
		{
			id: 57,
			name: "Inform a Creditor that you have filed for Bankruptcy"
		},
		{ id: 58, name: "Inform Creditor of Bankruptcy" },
		{ id: 59, name: "Judgment Proof letter" },
		{ id: 60, name: "Judgment Proof Letter (Alternate)" },
		{ id: 61, name: "Pay For Delete (Alternate 2)" },
		{ id: 62, name: "Pay For Delete (Alternate 3)" },
		{ id: 63, name: "Pay For Delete (Alternate)" },
		{
			id: 64,
			name: "Pay for Delete (Offer Payment if Negative is Removed)"
		},
		{ id: 65, name: "Reaffirming Debt After Bankruptcy" },
		{ id: 66, name: "Remove Hard Inquiry" },
		{ id: 67, name: "Remove Hard Inquiry (Alternate)" },
		{ id: 68, name: "Request Direct Negotiation with Creditor" },
		{ id: 69, name: "Request No Payments (Long Term)" },
		{ id: 70, name: "Request No Payments (Short Term)" },
		{
			id: 71,
			name: "Request Original Creditor to Take Back Debt from Collection Agency"
		},
		{ id: 72, name: "Request Removal of Incorrect Info" },
		{ id: 73, name: "Request Removal of Incorrect Info (Alternate)" },
		{ id: 74, name: "Request Smaller Payments (Long Term)" },
		{ id: 75, name: "Request Smaller Payments (Short Term)" },
		{
			id: 76,
			name: "Unilateral Release of Claims (Include with Settlement Offer Before Payment)"
		},
		{ id: 77, name: "Validation of Debt (Admission by Silence)" },
		{ id: 78, name: "Validation of Debt (After Dispute to Bureau)" },
		{ id: 79, name: "Validation of Debt (Alternate 2)" },
		{ id: 80, name: "Validation of Debt (Alternate 3)" },
		{ id: 81, name: "Validation of Debt (Alternate 4)" },
		{ id: 82, name: "Validation of Debt (Alternate)" },
		{ id: 83, name: "Validation of Debt (Estoppel by Silence)" },
		{ id: 84, name: "Validation of Debt (Simple)" },
		{
			id: 85,
			name: "Validation of Debt with Creditor Disclosure Statement"
		},
		{
			id: 86,
			name: "Validation of Debt with Creditor Disclosure Statement (Alternate)"
		},
		{
			id: 87,
			name: "Validation of Debt with Creditor Disclosure Statement) (Alternate 2)"
		},
		{ id: 88, name: "Validation of Medical Debt (HIPAA Request)" },
		{ id: 89, name: "Warning of Expired Statute of Limitations" },
		{ id: 90, name: "Warning of VOD refusal and FDCPA violations" },
		{ id: 91, name: "Warning Violation for Expired Debt Collection" },
		{
			id: 92,
			name: "Warning Violation for Expired Debt Collection (Alternate)"
		},
		{ id: 93, name: "Basic Dispute for Collections" },
		{ id: 94, name: "Cease and Desist" },
		{ id: 95, name: "Cease and Desist (Alternate 2)" },
		{ id: 96, name: "Cease and Desist (Alternate)" },
		{ id: 97, name: "Complaint about Harassment" },
		{ id: 98, name: "Debt Settlement Offer" },
		{ id: 99, name: "Debt Settlement Offer (Alternate 2)" },
		{ id: 100, name: "Debt Settlement Offer (Alternate 3)" },
		{ id: 101, name: "Debt Settlement Offer (Alternate)" },
		{ id: 102, name: "Debt Settlement Offer to Dismiss Court Judgment" },
		{ id: 103, name: "Dispute Collections" },
		{ id: 104, name: "Estoppel By Silence" },
		{
			id: 106,
			name: "Inform a Creditor that you have filed for Bankruptcy"
		},
		{ id: 107, name: "Inform Creditor of Bankruptcy" },
		{ id: 108, name: "Judgment Proof letter" },
		{ id: 109, name: "Pay For Delete (Alternate 2)" },
		{ id: 110, name: "Pay For Delete (Alternate 3)" },
		{ id: 111, name: "Pay For Delete (Alternate )" },
		{
			id: 112,
			name: "Pay for Delete (Offer Payment if Negative is Removed)"
		},
		{ id: 113, name: "Temporarily Stop Collections" },
		{
			id: 114,
			name: "Unilateral Release of Claims (Include with Settlement Offer Before Payment)"
		},
		{ id: 115, name: "Validation" },
		{ id: 116, name: "Validation of Debt (Admission by Silence)" },
		{ id: 117, name: "Validation of Debt (After Dispute to Bureau)" },
		{ id: 118, name: "Validation of Debt (Alternate 2)" },
		{ id: 119, name: "Validation of Debt (Alternate 3)" },
		{ id: 120, name: "Validation of Debt (Alternate 4)" },
		{ id: 121, name: "Validation of Debt (Alternate)" },
		{ id: 122, name: "Validation of Debt (Estoppel by Silence)" },
		{ id: 123, name: "Validation of Debt (Simple)" },
		{
			id: 124,
			name: "Validation of Debt with Creditor Disclosure Statement"
		},
		{
			id: 125,
			name: "Validation of Debt with Creditor Disclosure Statement (Alternate)"
		},
		{
			id: 126,
			name: "Validation of Debt with Creditor Disclosure Statement) (Alternate 2)"
		},
		{ id: 127, name: "Validation of Medical Debt (HIPAA Request)" },
		{ id: 128, name: "Warning of Expired Statute of Limitations" },
		{ id: 129, name: "Warning of VOD refusal and FDCPA violations" },
		{ id: 130, name: "Warning Violation for Expired Debt Collection" },
		{
			id: 131,
			name: "Warning Violation for Expired Debt Collection (Alternate)"
		},
		{ id: 132, name: "ChexSystem (Request Report)" },
		{ id: 133, name: "ChexSystems (Request Investigation)" },
		{ id: 134, name: "Letter Of Hardship For Loan Modification" },
		{
			id: 135,
			name: "Letter Of Hardship For Loan Modification (Alternate 2)"
		},
		{
			id: 136,
			name: "Letter Of Hardship For Loan Modification (Alternate)"
		},
		{ id: 137, name: "Letter to Dismiss Court Judgment" },
		{ id: 138, name: "Request for Loan Modification" }
	]

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedId = parseInt(e.target.value, 10)
		const selectedTemplate = LetterData.find(
			(template) => template.id === selectedId
		)
		if (selectedTemplate) {
			setSelectedTemplate(selectedTemplate)
			updateContent(selectedTemplate.content, selectedBureau)
		} else {
			setContent("<p>Template not found</p>")
		}
	}

	const updateContent = (templateContent: string, bureau: string) => {
		let bureauAddress = ""

		if (bureau === "equifax") {
			bureauAddress = `
        <div style="margin-top: 4px; margin-bottom: 4px">
          <p>Equifax Information Services LLC</p>
          <p>P.O Box 740256</p>
          <p>Atlanta, GA 30374-0258</p>
        </div>`
		} else if (bureau === "experian") {
			bureauAddress = `
        <div style="margin-top: 4px; margin-bottom: 4px">
          <p>Experian</p>
          <p>P.O Box 4500</p>
          <p>Allen, TX 75013</p>
        </div>`
		} else if (bureau === "transunion") {
			bureauAddress = `
        <div style="margin-top: 4px; margin-bottom: 4px">
          <p>TransUnion LLC Consumer Dispute Letter</p>
          <p>P.O Box 2000</p>
          <p>Allen, TX 75013</p>
        </div>`
		}

		// Assuming userData is an array of UserData objects and selectedUserData is the currently selected UserData
		const selectedUserData = userData[0] // Example: Assuming first user data object

		// Replace placeholders in template content with actual user data
		const updatedContent = templateContent
			.replaceAll(
				"{client_first_name}",
				selectedUserData?.first_name || ""
			)
			.replaceAll("{client_last_name}", selectedUserData?.last_name || "")
			.replace(
				"{client_address}",
				`${selectedUserData?.city}, ${selectedUserData?.zip_code}`
			)
			.replace("{t_no}", selectedUserData?.phone || "")
			.replace("{bdate}", selectedUserData?.dob || "")
			.replace("{ss_number}", selectedUserData?.ss_number || "")
			.replace(
				"{curr_date}",
				`
                                          <p style="margin-top: 3px; margin-bottom: 3px;">${new Date().getDate()} ${
					monthsLookup[new Date().getMonth()]
				}, ${new Date().getFullYear()}</p>`
			)
			.replace(
				"{dispute_item_and_explanation}",
				"Your dispute explanation here"
			)
			.replace(
				"{client_signature}",
				`${selectedUserData?.first_name || ""} ${
					selectedUserData?.last_name || ""
				}`
			)

		setContent(`${bureauAddress} ${updatedContent}`)
	}

	const handleBureauClick = (bureau: string) => {
		setSelectedBureau(bureau)
		if (selectedTemplate) {
			updateContent(selectedTemplate.content, bureau)
		}
	}

	// const handleDelete = (index: number) => {
	// 	setDisputeDetails((prevList) => prevList.filter((_, i) => i !== index))
	// }

	// console.log(disputeDetails?.accountNumber === true)

	return (
		<>
			<h1 className="text-3xl md:text-4xl lg:text-5xl ml-5 font-bold text-[#686666] mt-10">
				Add Dispute
			</h1>
			<section className="w-full h-full flex flex-col items-center justify-center pt-10 mb-20">
				{isModalOpen && (
					<AddNewDisputeModal
						setIsModalOpen={setIsModalOpen}
						setDisputeDetails={setDisputeDetails}
						disputeDetails={disputeDetails}
					/>
				)}
				<div className="w-full h-full flex flex-col items-center gap-8 justify-start">
					<div className="text-[#686666] flex w-9/12 items-center justify-between pt-20">
						Generate the letter to get all credit report
						<EllipsisOutlined className="text-white bg-[#1380FF] rounded-full" />
					</div>
					<div className="bg-white w-full md:w-9/12 h-full shadow-md rounded-lg flex flex-col items-center pt-10">
						<div className="w-[90%] ">
							<select
								name="name"
								id="nme"
								className="w-full h-[80px] px-2 flex justify-center gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]"
								value={selectedUser}
								onChange={(e: any) => {
									setSelectedUser(e.target.value)
								}}
							>
								{userData?.map((item, index) => (
									<option key={index}>
										{item.first_name} {item.last_name}{" "}
									</option>
								))}
							</select>
						</div>
						<div className="w-[90%]  flex flex-col h-full gap-2 mt-10 mb-4">
							<Card
								name="Equifax"
								onChange={(e: any) => {
									const file = e.target.files?.[0]
									setEquifaxFile(file)
								}}
							/>
							<Card
								name="Experian"
								onChange={(e: any) => {
									const file = e.target.files?.[0]
									setExperianFile(file)
								}}
							/>
							<Card
								name="TransUnion"
								onChange={(e: any) => {
									const file = e.target.files?.[0]
									setTransUnionFile(file)
								}}
							/>
						</div>
					</div>
					<button className="flex items-center mt-10 w-[250px] h-[50px] border-[1px] rounded-full border-[#C0C0C0] text-[#C0C0C0] justify-center gap-4">
						<StarOutlined className="text-[#1380FF] " /> When it
						began...
					</button>
					<div className="w-full md:w-9/12 relative h-max py-2 border-[1px] rounded-lg flex flex-col mt-10 pt-4 gap-3 items-center justify-start border-[#686666]">
						<h1 className="text-[#686666] text-[36px] font-bold">
							Choose Letter Type
						</h1>
						<div className="w-[90%] h-[100px] flex items-center justify-between">
							<div className="flex flex-col">
								<h1 className="text-[#686666] text-[30px] font-bold">
									Option 1
								</h1>
								<p className="text-[24px] text-[#1380FF]">
									Basic Dispute <ArrowRightOutlined />{" "}
									<span className="text-[#686666] font-light text-[24px]">
										Credit Bureaus
									</span>
								</p>
							</div>
							<div>
								<Switch
									checked={letterOption === 1}
									onChange={() => {
										setLetterOption(1)
									}}
								/>
							</div>
						</div>
						<div className="w-[90%] h-[100px] flex items-center justify-between">
							<div className="flex flex-col">
								<h1 className="text-[#686666] text-[30px] font-bold">
									Option 2
								</h1>
								<p className="text-[24px] text-[#1380FF]">
									Higher Dispute <ArrowRightOutlined />{" "}
									<span className="text-[#686666] font-light text-[24px]">
										All Other Letters
									</span>
								</p>
							</div>
							<div>
								<Switch
									checked={letterOption === 2}
									onChange={() => {
										setLetterOption(2)
									}}
								/>
							</div>
						</div>
						<div
							className={`w-[75%] h-max py-2 bg-white shadow-md ${
								letterOption === 2 ? "flex" : "hidden"
							} flex-col px-2 rounded-lg`}
						>
							<div className="flex gap-2">
								<p className="text-[#CCCCCC] text-[20px] font-light">
									Choose letter Recipient
								</p>
								<p className="text-[#333333] bg-[#efefef] w-[200px] py-1 text-center">
									Contains in only Round 2
								</p>
							</div>
							<div className="flex gap-2">
								<input
									type="checkbox"
									name="credit"
									id="burea1"
									checked={
										letterRecipient === "Credit Bureau"
									}
									onChange={() => {
										setLetterRecipient("Credit Bureau")
									}}
								/>
								<p className="text-[#686666] text-[20px]">
									Credit Bureau
								</p>
							</div>
							<div className="flex gap-2">
								<input
									type="checkbox"
									name="credit"
									id="burea2"
									checked={
										letterRecipient === "Credit Furnisher"
									}
									onChange={() => {
										setLetterRecipient("Credit Furnisher")
									}}
								/>
								<p className="text-[#686666] text-[20px]">
									Credit/Furnisher Reporting the Item
								</p>
							</div>
						</div>
						<div className="text-white text-xl bg-[#1380FF] rounded-full size-10 flex items-center justify-center absolute top-[-20px] left-3">
							<SendOutlined />
						</div>
					</div>
					<div className="w-full md:w-9/12 pt-10 pb-4 flex flex-col items-center justify-center border-[#686666] border-[1px] relative rounded-lg mt-10">
						<h1 className="text-[#A3A3A3] text-[35px] font-bold mb-4">
							ADD YOUR DISPUTE
						</h1>
						<div className="w-full px-2">
							{disputeDetails && (
								<div className="w-full pb-10 bg-white">
									<div className="w-full flex border-b-2 font-bold">
										<p className="w-[20%] text-center">
											Creditor/Furnisher
										</p>
										<p className="w-[20%] text-center">
											Account
										</p>
										<p className="w-[15%] text-center">
											Reason
										</p>
										<p className="w-[13%] text-center">
											Equifax
										</p>
										<p className="w-[13%] text-center">
											Experian
										</p>
										<p className="w-[13%] text-center">
											TransUnion
										</p>
									</div>
									<div className="w-full flex items-center border-b-2">
										<p className="w-[20%] text-center">
											{disputeDetails?.creditor || "N/A"}
										</p>
										<p className="w-[20%] text-center text-wrap">
											{disputeDetails?.accountIsSameForAll
												? disputeDetails?.accountNumber ||
												  "N/A"
												: `${
														disputeDetails?.equifaxAccountNumber ||
														"N/A"
												  }, ${
														disputeDetails?.experianAccountNumber ||
														"N/A"
												  }, ${
														disputeDetails?.transUnionAccountNumber ||
														"N/A"
												  }`}
										</p>
										<p className="w-[15%] text-center">
											{disputeDetails?.reason || "N/A"}
										</p>
										<p className="w-[13%] text-center text-red-400">
											{disputeDetails?.equifaxStatus}
										</p>
										<p className="w-[13%] text-center text-red-400">
											{disputeDetails?.experianStatus}
										</p>
										<p className="w-[13%] text-center text-red-400">
											{disputeDetails?.transUnionStatus}
										</p>
									</div>
								</div>
							)}
						</div>
						<button
							className="w-[300px] h-[50px] rounded-xl bg-[#1380FF] text-white font-bold absolute bottom-[-10px]"
							onClick={() => setIsModalOpen(!isModalOpen)}
						>
							{disputeDetails ? "Edit" : "Add"} Dispute Item
						</button>
						<div className="text-white text-xl bg-[#1380FF] rounded-full size-10 flex items-center justify-center absolute top-[-20px] left-3">
							<FileOutlined />
						</div>
					</div>
					<div className="w-full md:w-9/12 h-[200px] flex items-center flex-col justify-start pt-4 border-[#686666] border-[1px] relative rounded-lg mt-10 ">
						<h1 className="text-[#A3A3A3] text-[35px] font-bold">
							Select The Subject Of Mail
						</h1>
						<div className="w-[90%] ">
							<select
								name="name"
								id="nme"
								onChange={handleSelectChange}
								className="w-full h-[80px]  py-6 px-2 flex justify-center gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]"
							>
								{disputeItems.map((e) => (
									<option key={e.id} value={e.id}>
										{e.name}
									</option>
								))}
							</select>
						</div>
						<div className="text-white text-xl bg-[#1380FF] rounded-full size-10 flex items-center justify-center absolute top-[-20px] left-3">
							<CopyrightOutlined />
						</div>
					</div>
					<div className="w-full md:w-9/12 h-full pb-6 rounded-lg flex flex-col items-center justify-start border-[#686666] border-[1px] relative mt-20 ">
						<h1 className="text-[#A3A3A3] text-[36px] font-bold">
							Generate Your Letter
						</h1>
						<div className="w-[95%] gap-1 flex items-center overflow-x-auto overflow-y-hidden">
							<p className="text-[#A3A3A3]  text-[16px]">
								Choose Location According To Credit Bureau :
							</p>
							<div className="w-[100px] h-[2px] bg-[#8ECAE6]" />
							<button
								className={`w-[100px] h-[23px] ${
									selectedBureau === "equifax"
										? "bg-white text-black"
										: "text-[#D9D9D9]"
								} rounded-lg`}
								onClick={() => handleBureauClick("equifax")}
							>
								EQUIFAX
							</button>
							<button
								className={`w-[100px] h-[23px] ${
									selectedBureau === "experian"
										? "bg-white text-black"
										: "text-[#D9D9D9]"
								} rounded-lg`}
								onClick={() => handleBureauClick("experian")}
							>
								EXPERIAN
							</button>
							<button
								className={`w-[100px] h-[23px] ${
									selectedBureau === "transunion"
										? "bg-white text-black"
										: "text-[#D9D9D9]"
								} rounded-lg`}
								onClick={() => handleBureauClick("transunion")}
							>
								TRANSUNION
							</button>
						</div>
						<div className="bg-[#D3D3D3] w-[95%] h-[2px] mt-2" />
						<div className="w-[95%] flex items-center h-max justify-between mt-2 px-2">
							<div className="flex items-center gap-10">
								<h1 className="text-[#A3A3A3] font-bold text-[24px]">
									Subject :
								</h1>
								<p className="text-[#333333] text-[20px]">
									Request Annual Credit report
								</p>
							</div>
							<div className="flex items-center text-[#434343] text-[20px] gap-4">
								<p>CC</p>
								<p>BCC</p>
							</div>
						</div>
						<div className="bg-[#D3D3D3] w-[95%] h-[2px] mt-4" />
						<div className="w-full text-[#737373] text-[16px] p-5">
							<Editor
								apiKey="y6a32whlujeei0aww4vumf51q4qqd2zqpwvtdqzsdik3b4ig"
								initialValue="<p>This is the initial content of the editor</p>"
								value={content}
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
								onEditorChange={(content, editor) =>
									setContent(content)
								}
							/>
						</div>
						<div className="w-[90%] flex items-center justify-between px-2">
							<button className="w-[200px] h-[50px] rounded-xl border-[2px] border-[#929292]">
								Save as template
							</button>
							<button className="w-[200px] h-[50px] rounded-xl  bg-[#1380FF] text-white font-bold">
								Send letter
							</button>
						</div>
						<div className="text-white text-xl bg-[#1380FF] rounded-full size-10 flex items-center justify-center absolute top-[-20px] left-3">
							<MailOutlined />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
