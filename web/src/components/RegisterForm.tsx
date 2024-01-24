import React, { useState, useEffect } from 'react'
import { getTeamNameList } from 'api'
import { Button, Form, Input, Select } from 'antd'
import { ReferenceType, UserRegisterRequest } from 'api/types'

interface RegisterProps extends UserRegisterRequest {
  onSubmit: (values: UserRegisterRequest) => void
}

const Register: React.FC<RegisterProps> = ({ onSubmit }) => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    ;(async () => setTeams((await getTeamNameList()).data))()
  }, [])

  const [form] = Form.useForm()
  const [isPasswordMatch, setIsPasswordMatch] = useState(false)

  const handleSubmit = (credentials: UserRegisterRequest) => {
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
        <Form.Item<UserRegisterRequest>
          label='Username'
          name='name'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<UserRegisterRequest>
          label='Team ID'
          name='team_id'
          rules={[{ message: 'Please select your team!' }]}
        >
          <Select allowClear>
            <Select.Option>Board of directors</Select.Option>
            {teams &&
              teams.map((team: ReferenceType) => (
                <Select.Option key={team.id} value={team.id.toString()}>
                  {team.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item<UserRegisterRequest>
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <span style={{ marginRight: '8px' }}>
            Already Registered User? Click here to login
          </span>
          <a href='/signin'>Sign In</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
