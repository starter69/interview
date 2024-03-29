import * as api from 'api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('authToken')

    if (token)
      api
        .getCurrentUser()
        .then(() => {
          navigate('/dashboard')
        })
        .catch(() => {})
    // eslint-disable-next-line
  }, [])

  return {
    navigate,
  }
}
