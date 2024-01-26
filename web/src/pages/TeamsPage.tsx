import { useEffect, useState } from 'react'
import * as api from 'api'
import Navbar from 'components/Navbar'
import { Table, Button, Flex } from 'antd'
import type { TableColumnsType } from 'antd'
import { TeamType } from 'types'

const columns: TableColumnsType<TeamType> = [
  { title: 'No', dataIndex: 'id', key: 'id' },
  { title: 'Team Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (
      <>
        <a>Edit</a> | <a>Delete</a>
      </>
    ),
  },
]

const data: TeamType[] = [
  {
    id: 1,
    name: 'John Brown',
  },
  {
    id: 2,
    name: 'Jim Green',
  },
  {
    id: 3,
    name: 'Not Expandable',
  },
  {
    id: 4,
    name: 'Joe Black',
  },
]

const Users = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    ;(async () => setTeams((await api.getTeams()).data))()
  }, [])

  return (
    <>
      <Navbar />

      <div style={{ padding: 10 }}>
        <Button type='primary'>Primary Button</Button>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  )
}

export default Users
