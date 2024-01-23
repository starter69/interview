import LogInForm from 'components/LogInForm'
import { userLogin } from 'api'
import { UserLoginRequest } from 'api/types'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
	const navigate = useNavigate()
	const handleSubmit = (values: UserLoginRequest) => {
		userLogin({ name: values.name, password: values.password })
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

	return <LogInForm onSubmit={handleSubmit} name={''} password={''} />
}

export default LogIn
