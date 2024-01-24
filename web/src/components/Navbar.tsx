import { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { getUser } from 'api'
import { UserInfo } from 'api/types'

const Navbar = () => {
	const [currentUser, setCurrentUser] = useState<UserInfo>()

	useEffect(() => {
		;(async () => setCurrentUser((await getUser()).data))()
	}, [])

	return (
		<Menu mode='horizontal' theme='dark'>
			<Menu.Item key='dashboard'>Dashboard</Menu.Item>
			<Menu.Item key='myInterview'>My Interview</Menu.Item>
			{currentUser ? (
				<Menu.SubMenu key='User' title={currentUser?.name}>
					<Menu.Item key='profile'>My Profile</Menu.Item>
					<Menu.Item key='logout'>Log Out</Menu.Item>
				</Menu.SubMenu>
			) : null}
		</Menu>
	)
}

export default Navbar
