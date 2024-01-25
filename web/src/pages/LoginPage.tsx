import LoginForm from 'components/LoginForm'
import * as api from 'api'
import { UserLoginRequest } from 'api/types'
import { message } from 'antd'
import { useAuth } from 'utils/useAuth'

const Login = () => {
  const { navigate } = useAuth()
  const handleSubmit = (values: UserLoginRequest) => {
    api
      .Login({ name: values.name, password: values.password })
      .then((response) => {
        localStorage.setItem('authToken', response.data.access_token)
        message.success('Logged In Successfully')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.error(error)
        message.error(error?.response?.data?.message)
      })
  }

  return <LoginForm onSubmit={handleSubmit} name={''} password={''} />
}

export default Login
