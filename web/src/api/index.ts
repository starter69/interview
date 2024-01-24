import axios from 'axios'
import { AuthRequest } from './types'

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
export const userLogin = (data: AuthRequest) =>
  apiService.post('/auth/signin', data)

export const getUser = () => apiService.get('/user')

export const userRegister = (data: AuthRequest) =>
  apiService.post('/auth/signup', data)

// const createTodo = (payload: Object) => apiService.post("/end-point", payload);
