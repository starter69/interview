import * as React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import LoginPage from 'pages/LoginPage'
import RegisterPage from 'pages/RegisterPage'
import DashboardPage from 'pages/DashboardPage'
import UsersPage from 'pages/UsersPage'

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
    element: <UsersPage />,
  },
  {
    path: '/teams',
    element: <DashboardPage />,
  },
]

export const router = createBrowserRouter(routes)
