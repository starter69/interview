import RegisterForm from 'components/RegisterForm'
import { userRegister } from 'api'
import { AuthRequest } from 'api/types'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const navigate = useNavigate()
	const handleSubmit = (values: AuthRequest) => {
		userRegister({
			name: values.name,
			password: values.password,
		})
			.then(() => {
				message.success('Registered Successfully')
				navigate('/dashboard')
			})
			.catch((error) => {
				console.error(error)
				message.error(error?.response?.data?.message)
			})
	}

	return <RegisterForm onSubmit={handleSubmit} name={''} password={''} />
}

export default Register