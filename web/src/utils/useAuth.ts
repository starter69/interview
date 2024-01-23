import { getUser } from 'api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const token = localStorage.getItem('authToken')

		if (token)
			getUser()
				.then(() => {
					navigate('/dashboard')
				})
				.catch(() => {})
	}, [])

	return {
		navigate,
	}
}
