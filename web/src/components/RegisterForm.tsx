import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { AuthRequest } from 'api/types'

interface RegisterProps extends AuthRequest {
	onSubmit: (values: AuthRequest) => void
}

const Register: React.FC<RegisterProps> = ({ onSubmit }) => {
	const [form] = Form.useForm()
	const [isPasswordMatch, setIsPasswordMatch] = useState(false)

	const handleSubmit = (credentials: AuthRequest) => {
		onSubmit(credentials)
	}

	const validateConfirmPassword = (_: any, value: string) => {
		const { getFieldValue } = form

		if (value && getFieldValue('password') === value) {
			setIsPasswordMatch(true)
			return Promise.resolve()
		} else {
			setIsPasswordMatch(false)
			return Promise.reject('The two passwords that you entered do not match!')
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Form
				form={form}
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 900 }}
				onFinish={handleSubmit}
				autoComplete='off'
			>
				<Form.Item<AuthRequest>
					label='Username'
					name='name'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item<AuthRequest>
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					label='Confirm Password'
					name='passwordConfirm'
					dependencies={['password']}
					rules={[
						{ required: true, message: 'Please confirm your password!' },
						{ validator: validateConfirmPassword },
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit' disabled={!isPasswordMatch}>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Register
