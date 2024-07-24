"use client"
import { Input, Button, Typography, message } from "antd"
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import { FormEventHandler, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { ApiCalls } from "@/api/calls/calls"
import { Calls } from "@/api/calls/type"
import Link from "next/link"
import { useRouter } from "next/navigation"
// @ts-ignore
import useForm from "new-react-use-form"

export const SetPasswordForm = () => {
	const [showPassword, setShowPassword] = useState(false)
	const router = useRouter()
	const form = useForm({
		password: "",
		confirmPassword: ""
	})

	const { mutateAsync, isPending } = useMutation<
		Calls.IResponse.SignIn,
		Error,
		Calls.IRequest.SignIn
	>({
		mutationFn: async (variables) => await ApiCalls.SignIn(variables),
		onSuccess: (r) => {
			message.success(r.msg)
		},
		onError: (e) => {
			message.error(e.message)
		}
	})

	const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		try {
			const values = form.data()
			await mutateAsync(values)
		} catch (errorInfo) {
			console.log("Failed:", errorInfo)
		}
	}

	return (
		<form onSubmit={onSubmit} className={"mt-4 flex flex-col gap-6"}>
			<Input.Password
				name="password"
				required
				value={form.password}
				onChange={(e) => form.set("password", e.target.value)}
				placeholder="Enter New Password"
				iconRender={(visible) =>
					visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
				}
				size="large"
			/>
			<Input.Password
				name="confirmPassword"
				required
				value={form.confirmPassword}
				onChange={(e) => form.set("confirmPassword", e.target.value)}
				placeholder="Confirm Password"
				iconRender={(visible) =>
					visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
				}
				size="large"
			/>
			<Button type="primary" htmlType="submit" className="rounded-full">
				Submit
			</Button>
			<Button
				onClick={() => router.replace("/authentication/sign-in")}
				className="rounded-full"
				type="default"
				htmlType="button"
			>
				Cancel
			</Button>
		</form>
	)
}
