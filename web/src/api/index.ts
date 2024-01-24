import axios from 'axios'
import { UserLogInRequest, UserRegisterRequest } from './types'

const host = process.env.REACT_APP_API_HOST || 'localhost'
const port = process.env.REACT_APP_API_PORT || 3001

const apiService = axios.create({
  baseURL: `http://${host}:${port}`,
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

export const getHelloWorldMsg = () => apiService.get('/hello-world')

// Auth
export const userLogin = (data: UserLogInRequest) =>
  apiService.post('/auth/signin', data)

export const getUser = () => apiService.get('/user')

export const userRegister = (data: UserRegisterRequest) =>
  apiService.post('/auth/signup', data)

// Teams

export const getTeamNameList = () => apiService.get('/team')
