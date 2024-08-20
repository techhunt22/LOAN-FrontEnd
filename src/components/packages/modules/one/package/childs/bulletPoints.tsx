"use client"
import React from "react"

interface BulletPoints {
	bulletPoints?: string[]
}

export const BulletPoints: React.FC<BulletPoints> = (props) => {
	return (
		<>
			{props.bulletPoints?.map((value, index) => (
				<div
					key={index}
					className={
						"flex flex-row gap-2 justify-start items-start text-left w-full h-auto"
					}
				>
					<div className={"w-[10%] pt-1"}>
						<svg
							width="13"
							height="10"
							viewBox="0 0 13 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M6.82785 0.556071C7.10375 0.239597 7.58396 0.206706 7.90043 0.482606L12.5511 4.53707C12.7167 4.68144 12.8118 4.89039 12.8118 5.11009C12.8118 5.32979 12.7167 5.53875 12.5511 5.68312L7.90043 9.73758C7.58396 10.0135 7.10375 9.98059 6.82785 9.66411C6.55194 9.34764 6.58484 8.86742 6.90131 8.59152L10.0227 5.8703H0.901813C0.48196 5.8703 0.141602 5.52994 0.141602 5.11009C0.141602 4.69024 0.48196 4.34988 0.901813 4.34988H10.0227L6.90131 1.62866C6.58484 1.35276 6.55194 0.872544 6.82785 0.556071Z"
								fill="#DFDDDD"
							/>
						</svg>
					</div>
					<p
						className={
							"text-left text-gray-700 text-[14px] font-medium text-wrap w-[90%]"
						}
					>
						{value || "test"}
					</p>
				</div>
			))}
		</>
	)
}
