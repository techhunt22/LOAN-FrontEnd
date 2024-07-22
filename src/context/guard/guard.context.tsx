"use client"
import React, { createContext, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useRouter, usePathname } from "next/navigation"
import LogoutIcon from "@mui/icons-material/Logout"
import { Button } from "antd"
import { getCookie } from "@/utils/getCookie"
const GuardContext = createContext<AuthContextType | undefined>(undefined)

interface AuthContextType {
	isAdmin: boolean
	isSignIn: boolean
	login: () => void
	logout: () => void
	onLogout: () => void
	setIsSignIn: any
	setIsAdmin: any
}

export const GuardContextProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	const router = useRouter()
	const pathName = usePathname()
	const loginRole = "PCR:Admin"
	// const [isAdmin, setIsAdmin] = useState<boolean>(
	//   loginRole === "PCR:Admin" ? true : false
	// );
	const isAdmin = false
	const setIsAdmin = () => {}
	// Assuming admin state
	//  const [isAdmin,setIsAdmin]=useState(true)
	const [isSignIn, setIsSignIn] = useState<boolean>(false)

	const login = () => {
		// Perform your login logic here
		// setIsAdmin(true); // Set to true if the user is an admin
	}

	const logout = () => {
		// Perform your logout logic here
		// setIsAdmin(false);
	}

	useEffect(() => {
		const myCookieValue = getCookie("accessToken")
		if (myCookieValue !== null) {
			setIsSignIn(true)
			if (loginRole === "PCR:Admin") {
				// setIsAdmin(true);
			} else if (loginRole === undefined) {
				// setIsAdmin(false);
				router.push("/")
			}
		} else {
			setIsSignIn(false)
			// setIsAdmin(false);
		}
	}, [isSignIn, Cookies.get("role")])

	const onLogout = async () => {
		Cookies.remove("accessToken", { path: "/" })
		Cookies.remove("refreshToken", { path: "/" })
		Cookies.remove("role", { path: "/" })
		Cookies.remove("lastPageUrl", { path: "/" })
		router.push("/")
		setIsSignIn(false)
	}

	console.log(isAdmin, "isAdmin")

	return (
		<GuardContext.Provider
			value={{
				isSignIn,
				isAdmin,
				login,
				logout,
				setIsAdmin,
				setIsSignIn,
				onLogout
			}}
		>
			{isSignIn && pathName !== "/" && (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						position: "absolute",
						right: "60px",
						top: "10px"
					}}
					className="logout-main"
				>
					<Button
						onClick={onLogout}
						className={
							"text-sm flex items-center gap-2 rounded-full logout-button"
						}
						color={"blue"}
					>
						<LogoutIcon height={20} width={20} />
						<p> LOGOUT</p>
					</Button>
				</div>
			)}

			{children}
		</GuardContext.Provider>
	)
}

export const useAuth = (): AuthContextType => {
	const context = useContext(GuardContext)
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider")
	}
	return context
}
