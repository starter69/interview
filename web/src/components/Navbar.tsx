import { useState, useEffect } from 'react'
import { Menu, Avatar, Space } from 'antd'
import { getUser } from 'api'
import { UserInfo } from 'api/types'
import { useNavigate } from 'react-router'
import { UserOutlined } from '@ant-design/icons'

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<UserInfo>()
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => setCurrentUser((await getUser()).data))()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/signin')
  }

  return (
    <Menu mode='horizontal' theme='dark'>
      <Menu.Item key='dashboard'>Dashboard</Menu.Item>
      <Menu.Item key='myInterview'>My Interview</Menu.Item>
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
