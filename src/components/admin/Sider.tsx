"use client"

import Link from "next/link"
import { TeamOutlined } from "@ant-design/icons"
import { UserAddOutlined } from "@ant-design/icons"
import { AppstoreAddOutlined } from "@ant-design/icons"
import { AlignCenterOutlined } from "@ant-design/icons"
import { useState } from "react"

function Sider() {
	const [hidden, setHidden] = useState(true)
	const setMobileSider = () => {
		console.log("side", hidden)
		setHidden(!hidden)
	}

	return (
		<>
			<div className="w-[15%] hidden xl:flex min-h-screen  border-r-2 border-gray-300 bg-[#FCFCFC]  flex-col  gap-[140px] items-center pt-10">
				<div className="profile w-[90%] h-[150px]  bg-[#F5F6F7] rounded-2xl flex items-center justify-center  gap-4">
					<div className="img  w-[60px]  h-[60px]  xl:w-[70px] xl:h-[72px] bg-black rounded-full"></div>
					<div className="content flex flex-col gap-1 ">
						<p className="text-[#333333] text-[20px]">
							Julia Marcos
						</p>
						<p className="text-[#A3A3A3] text-[12px]">
							Managing Director
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-10">
					<Link
						href={"/admin/option1"}
						className="text-[#686666] text-[16px] flex gap-4 items-center"
					>
						{" "}
						<TeamOutlined className="text-[35px]" /> Teams
					</Link>
					<Link
						href={"/admin/option2"}
						className="text-[#686666] text-[16px] flex gap-4 items-center"
					>
						<UserAddOutlined className="text-[35px]" /> Active User{" "}
					</Link>
					<Link
						href={"/admin/option3"}
						className="text-[#686666] text-[16px] flex gap-4 items-center"
					>
						<AppstoreAddOutlined className="text-[35px]" /> Active
						Disputes
					</Link>
				</div>
			</div>

			<button className=" xl:hidden     absolute top-10 text-xl left-2">
				<AlignCenterOutlined onClick={setMobileSider} />
			</button>

			<div
				className={`mobile-sider ${
					hidden ? "hidden" : "fixed"
				}  w-[70%] sm:w-[40%] min-h-screen xl:hidden flex flex-col z-40 gap-[140px] items-center pt-10 top-0 left-[0px] bg-white border-r-[1px] border-black`}
			>
				<button className="      absolute top-2 text-xl left-2">
					<AlignCenterOutlined onClick={setMobileSider} />
				</button>
				<div className="profile w-[80%] h-[150px]  bg-[#F5F6F7] rounded-2xl flex items-center justify-center  gap-4">
					<div className="img  w-[60px]  h-[60px]  xl:w-[70px] xl:h-[72px] bg-black rounded-full"></div>
					<div className="content flex flex-col gap-1 ">
						<p className="text-[#333333] text-[20px]">
							Julia Marcos
						</p>
						<p className="text-[#A3A3A3] text-[12px]">
							Managing Director
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-10">
					<Link
						href={""}
						className="text-[#686666] text-[16px] flex gap-4 items-center"
					>
						{" "}
						<TeamOutlined className="text-[35px]" /> Teams
					</Link>
					<Link
						href={""}
						className="text-[#686666] text-[16px] flex gap-4 items-center"
					>
						<UserAddOutlined className="text-[35px]" /> Active User{" "}
					</Link>
					<Link
						href={""}
						className="text-[#686666] text-[16px] flex gap-4 items-center"
					>
						<AppstoreAddOutlined className="text-[35px]" /> Active
						Disputes
					</Link>
				</div>
			</div>
		</>
	)
}
export default Sider
