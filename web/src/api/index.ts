import axios from 'axios'
import { UserLoginRequest, UserRegisterRequest } from './types'

const host = process.env.REACT_APP_API_HOST || 'localhost'
const port = process.env.REACT_APP_API_PORT || 3001

const apiService = axios.create({
  baseURL: `http://${host}:${port}/`,
})

apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')

    if (token) {
      config.headers.set('Authorization', 'Bearer ' + token)
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// Auth
const Login = (data: UserLoginRequest) => apiService.post('auth/login', data)

const Register = (data: UserRegisterRequest) =>
  apiService.post('auth/register', data)

const getCurrentUser = () => apiService.get('auth/user')

// Teams
const getTeams = () => apiService.get('teams')

// Interview
export const getInterviewsList = () => {
  return [
    {
      id: 1,
      user_id: 23,
      name: 'Sedgwick',
    },
    {
      id: 2,
      user_id: 34,
      name: 'EvolveMEP',
    },
    {
      id: 3,
      user_id: 44,
      name: 'Raisin',
    },
    {
      id: 4,
      user_id: 16,
      name: 'PolarisIO',
    },
    {
      id: 5,
      user_id: 14,
      name: 'Bookipi',
    },
    {
      id: 6,
      user_id: 16,
      name: 'meettrax',
    },
    {
      id: 7,
      user_id: 6,
      name: 'Drinna',
    },
    {
      id: 8,
      user_id: 6,
      name: 'Somos',
    },
    {
      id: 9,
      user_id: 8,
      name: 'ResultId',
    },
    {
      id: 10,
      user_id: 5,
      name: 'UCLA',
    },
    {
      id: 11,
      user_id: 14,
      name: 'Best and Basic',
    },
    {
      id: 12,
      user_id: 24,
      name: 'NISC',
    },
    {
      id: 13,
      user_id: 34,
      name: 'Diligent Technologies',
    },
  ]
}
// Users
// const getUserData = () => apiService.get('/users')

export { Login, Register, getCurrentUser, getTeams }
