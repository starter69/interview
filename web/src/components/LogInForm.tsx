import React from 'react'
import { Button, Form, Input } from 'antd'
import { UserLogInRequest } from 'api/types'

interface LogInFormProps extends UserLogInRequest {
  onSubmit: (values: UserLogInRequest) => void
}

const LogInForm: React.FC<LogInFormProps> = ({ onSubmit }) => {
  const handleSubmit = (credentials: UserLogInRequest) => {
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
        style={{ maxWidth: 900 }}
        onFinish={handleSubmit}
        autoComplete='off'
      >
        <Form.Item<UserLogInRequest>
          label='Username'
          name='name'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<UserLogInRequest>
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
          <a href='/signup'>Sign Up</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LogInForm