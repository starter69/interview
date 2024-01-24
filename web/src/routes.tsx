import * as React from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

const Dashboard = React.lazy(() => import('pages/Dashboard'))
const LogIn = React.lazy(() => import('pages/LogIn'))
const Register = React.lazy(() => import('pages/Register'))

function isAuthenticated() {
	const token = localStorage.getItem('authToken')
	return token !== null
}

function AuthenticatedRoute() {
	return isAuthenticated() ? <Outlet /> : <Navigate to='/signin' />
}

const routes = [
	// Public routes
	{ path: '/signin', element: <LogIn /> },
	{ path: '/signup', element: <Register /> },

	// Private routes
	{
		path: '/',
		element: <AuthenticatedRoute />,
		children: [
			{ path: '/dashboard', element: <Dashboard /> },
			// other routes that require authentication can go here
		],
	},

	// Default route
	{ path: '*', element: <Navigate to='/signin' replace /> },
]

export const router = createBrowserRouter(routes)
