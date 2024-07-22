"use client"
import { Form, Input, Button, Typography, message, Spin } from "antd"
// @ts-ignore
import { useForm } from "new-react-use-form"
import { useMutation } from "@tanstack/react-query"
import { ApiCalls } from "@/api/calls/calls"
import { Calls } from "@/api/calls/type"

export const ForgotPasswordForm = () => {
	const [form] = Form.useForm()

	const { mutateAsync, isPending } = useMutation<
		Calls.IResponse.ForgotPassword,
		Error,
		Calls.IRequest.ForgotPassword
	>({
		mutationFn: async (variables) =>
			await ApiCalls.ForgotPassword(variables),
		onSuccess: (r) => {
			message.success(r.msg)
		},
		onError: (e) => {
			message.error("Failed to reset password")
		}
	})

	const onSubmit = async () => {
		try {
			const values = await form.validateFields()
			await mutateAsync(values)
		} catch (error) {
			console.error("Validation failed:", error)
		}
	}

	return (
		<Form
			form={form}
			onFinish={onSubmit}
			className="mt-4 flex flex-col gap-6"
		>
			<Form.Item
				name="email"
				rules={[
					{
						required: true,
						message: "Please enter your email address"
					},
					{
						type: "email",
						message: "Please enter a valid email address"
					}
				]}
			>
				<Input
					disabled={isPending}
					size="large"
					placeholder="Enter Email Address"
				/>
			</Form.Item>
			<div className="">
				<Button
					loading={isPending}
					className="flex items-center justify-center rounded-full"
					type="primary"
					htmlType="submit"
					size="large"
					block
				>
					{isPending ? <Spin /> : "Submit"}
				</Button>
			</div>
		</Form>
	)
}
