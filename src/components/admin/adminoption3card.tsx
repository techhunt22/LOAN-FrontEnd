export default function Card({
	name,
	onChange
}: {
	name: string
	onChange: any
}) {
	return (
		<>
			<div className="w-full h-full flex gap-2">
				<div className="card w-full h-[120px] bg-[#F9F9F9] gap-2 px-2 flex flex-col justify-between">
					<h1 className="text-[#434343] text-[20px] font-bold">
						{name}
					</h1>
					<p className="text-[#737373] text-[12px]">
						Upload you your report
					</p>
					<div className="w-[90%] bg-[#F4F4F4] rounded-full h-16">
						<input type="file" onChange={onChange} />
					</div>
					<p className="text-[#A3A3A3] text-[8px]">
						Supported files are PNG,JPG & PDF{" "}
					</p>
				</div>
				<input
					type="checkbox"
					name="equifax"
					id="equi"
					className="text-xl"
				/>
			</div>
		</>
	)
}
