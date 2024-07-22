"use client"
import { Form, Input, Checkbox, Button, Typography, Spin } from "antd"
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { handleFormError } from "@/utils/error"
import { useMutation } from "@tanstack/react-query"
// @ts-ignore
import useForm from "new-react-use-form"
import { ApiCalls } from "@/api/calls/calls"
import { Calls } from "@/api/calls/type"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/guard/guard.context"

export const SignInForm = () => {
	const { setIsSignIn } = useAuth()
	const [typeInput, setTypeInput] = useState(true)
	const router = useRouter()
	const form = useForm({
		email: "",
		password: "",
		remember: false
	})

	const link = Cookies.get("lastPageUrl") || "/"

	const { mutateAsync, isPending } = useMutation<
		Calls.IResponse.SignIn,
		Error,
		Calls.IRequest.SignIn
	>({
		mutationFn: async (variables) => await ApiCalls.SignIn(variables),
		onSuccess: (r) => {
			console.log(r)

			toast.success(r.msg)
			Cookies.set("accessToken", r.accessToken, {
				expires: 7,
				path: "/",
				secure: false
			})
			// Cookies.set("refreshToken", r.refreshToken, {
			// 	expires: 30,
			// 	path: "/",
			// 	secure: false
			// })
			// Cookies.set("role", r.role)
			// if (r?.urlPath != null) {
			// 	if (r.role == "PCR:Admin") {
			// 		router.replace(r?.urlPath)
			// 	} else {
			// 		router.replace(link)
			// 	}
			// }
			// if (r?.Success) {
			setIsSignIn(true)
			router?.replace(link)
			// }
		},
		onError: (e) => handleFormError(e as any, form)
	})

	const onSubmit = async (values: any) => {
		await mutateAsync(values)
	}

	return (
		<Form className="mt-4 flex flex-col gap-2" onFinish={onSubmit}>
			<Form.Item
				name="email"
				rules={[
					{ required: true, message: "Please enter your email!" }
				]}
			>
				<Input
					disabled={form.busy}
					value={form.email}
					onChange={(e) => {
						form.set("email", e.target.value)
						form.errors.clear("email")
					}}
					size="large"
					placeholder="Enter Email Address"
					prefix={<Typography.Text>Email</Typography.Text>}
				/>
			</Form.Item>
			<Typography.Text type="danger">
				{form.errors.has("email") && form.errors.get("email")}
			</Typography.Text>
			<Form.Item
				name="password"
				rules={[
					{ required: true, message: "Please enter your password!" }
				]}
			>
				<Input.Password
					disabled={form.busy}
					value={form.password}
					onChange={(e) => {
						form.set("password", e.target.value)
						form.errors.clear("password")
					}}
					size="large"
					placeholder="Enter Password"
					prefix={<Typography.Text>Password</Typography.Text>}
					iconRender={(visible) =>
						visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
					}
				/>
			</Form.Item>
			<Typography.Text type="danger">
				{form.errors.has("password") && form.errors.get("password")}
			</Typography.Text>
			<Form.Item>
				<Link href={"/authentication/forgot-password"}>
					<Typography
						color="blue"
						className="underline font-medium mb-3 text-blue-400"
					>
						Forgot Password?
					</Typography>
				</Link>
				<Checkbox
					checked={form.remember}
					onChange={(e) => {
						form.set("remember", e.target.checked)
						form.errors.clear("remember")
					}}
				>
					<Typography.Text type="secondary">
						You'll be able to login without password for 7 days.
					</Typography.Text>
				</Checkbox>
			</Form.Item>
			<Typography.Text type="danger">
				{form.errors.has("remember") && form.errors.get("remember")}
			</Typography.Text>
			<Form.Item>
				<Button
					className="rounded-full w-[300px] bg-blue-400 text-white ml-6"
					disabled={isPending || form.busy}
					size="large"
					htmlType="submit"
				>
					{isPending ? <Spin /> : "SIGN IN"}
				</Button>
				<Link href={"/authentication/sign-up"}>
					<Typography
						color="blue"
						className="underline font-medium text-center mt-2 text-blue-400"
					>
						Create new account
					</Typography>
				</Link>
			</Form.Item>
		</Form>
	)
}
