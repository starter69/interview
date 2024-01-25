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

// Users
// const getUserData = () => apiService.get('/users')

export { Login, Register, getCurrentUser, getTeams }
