import { useState, useEffect } from 'react'
import { Menu, Avatar, Space } from 'antd'
import * as api from 'api'
import { UserInfo } from 'api/types'
import { useNavigate } from 'react-router'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<UserInfo>()
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => setCurrentUser((await api.getCurrentUser()).data))()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
  }

  return (
    <Menu mode='horizontal' theme='dark'>
      <Menu.Item key='dashboard'>
        <Link to={`/dashboard`}>Dashboard</Link>
      </Menu.Item>
      <Menu.Item key='myInterview'>
        <Link to={`/my-interview`}>My Interview</Link>
      </Menu.Item>
      <Menu.Item key='users'>
        <Link to={`/users`}>Users</Link>
      </Menu.Item>
      <Menu.Item key='teams'>
        <Link to={`/teams`}>Teams</Link>
      </Menu.Item>
      {currentUser ? (
        <Menu.SubMenu
          key='User'
          title={
            <Space size={8} wrap>
              <Avatar
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
              {currentUser?.name}
            </Space>
          }
          style={{ marginLeft: 'auto' }}
        >
          <Menu.Item key='profile'>My Profile</Menu.Item>
          <Menu.Item key='logout' onClick={handleLogout}>
            Log Out
          </Menu.Item>
        </Menu.SubMenu>
      ) : null}
    </Menu>
  )
}

export default Navbar
