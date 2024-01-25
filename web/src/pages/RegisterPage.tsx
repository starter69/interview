import RegisterForm from 'components/RegisterForm'
import * as api from 'api'
import { UserRegisterRequest } from 'api/types'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const handleSubmit = (values: UserRegisterRequest) => {
    api
      .Register({
        name: values.name,
        password: values.password,
        team_id: values.team_id ? Number(values.team_id) : undefined,
      })
      .then((response) => {
        message.success('Registered and logged in successfully')
        localStorage.setItem('authToken', response.data.access_token)
        navigate('/dashboard')
      })
      .catch((error) => {
        console.error(error)
        message.error(error?.response?.data?.message)
      })
  }

  return (
    <RegisterForm onSubmit={handleSubmit} name={''} password={''} team_id={0} />
  )
}

export default Register
