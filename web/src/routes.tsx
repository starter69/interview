import * as React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const LoginPage = React.lazy(() => import('pages/LoginPage'))
const RegisterPage = React.lazy(() => import('pages/RegisterPage'))
const DashboardPage = React.lazy(() => import('pages/DashboardPage'))

function isAuthenticated() {
  const token = localStorage.getItem('authToken')
  return token !== null
}

function GetInitialRoute() {
  return isAuthenticated() ? (
    <Navigate to='/dashboard' />
  ) : (
    <Navigate to='/login' />
  )
}

const routes = [
  { path: '/', element: <GetInitialRoute /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/my-interview',
    element: <DashboardPage />,
  },
  {
    path: '/users',
    element: <DashboardPage />,
  },
  {
    path: '/teams',
    element: <DashboardPage />,
  },
]

export const router = createBrowserRouter(routes)
