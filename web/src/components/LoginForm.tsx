import React from 'react'
import { Button, Form, Input } from 'antd'
import { UserLoginRequest } from 'api/types'

interface LoginFormProps extends UserLoginRequest {
  onSubmit: (values: UserLoginRequest) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const handleSubmit = (credentials: UserLoginRequest) => {
    onSubmit(credentials)
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
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1000 }}
        onFinish={handleSubmit}
        autoComplete='off'
      >
        <Form.Item<UserLoginRequest>
          label='Username'
          name='name'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<UserLoginRequest>
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Sign In
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <span style={{ marginRight: '8px' }}>Don't have an account?</span>
          <a href='/register'>Sign Up</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
