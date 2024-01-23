import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Dashboard = React.lazy(() => import('pages/Dashboard'))
const LogIn = React.lazy(() => import('pages/LogIn'))

export const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/signin',
				element: <LogIn />,
			},
			{
				path: '/signup',
				element: <Dashboard />,
			},
		],
	},
])
