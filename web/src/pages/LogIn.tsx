import LogInForm from 'components/LogInForm'
import { userLogin } from 'api'
import { UserLoginRequest } from 'api/types'
import { message } from 'antd'

const LogIn = () => {
	const handleSubmit = (values: UserLoginRequest) => {
		userLogin({ name: values.name, password: values.password })
			.then((response) => {
				localStorage.setItem('authToken', response.data)
				message.success('Logged In Successfully')
			})
			.catch((error) => {
				console.error(error)
				message.error(error?.response?.data?.message)
			})
	}

	return <LogInForm onSubmit={handleSubmit} name={''} password={''} />
}

export default LogIn
