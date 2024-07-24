import { RiseOutlined } from "@ant-design/icons"

export default function Card({ quantity }: { quantity: number }) {
	return (
		<>
			<div className="card bg-[#F5F6F7] w-[300px] justify-evenly h-[150px] rounded-lg shadow-md flex items-center">
				<div className="flex flex-col">
					<p className="text-[#333333] text-[16px]">Total Clients</p>
					<p className="text-[#333333] text-[24px] font-bold">
						{quantity}
					</p>
					<p className="text-[#a3a3a3] text-[9px]">
						Increase from previous months
					</p>
				</div>
				<div className="flex flex-col gap-2 ">
					<RiseOutlined className="text-xl text-[#50d910]" />
					<p className="text-[14px] text-[#50D910]">20 %</p>
				</div>
			</div>
		</>
	)
}
