import { useEffect, useState } from 'react'
import * as api from 'api'
import Navbar from 'components/Navbar'
import InterviewList from 'components/InterviewList'

const Users = () => {
  const [msg, setMsg] = useState()

  // useEffect(() => {
  //   ;(async () => setMsg((await getHelloWorldMsg()).data))()
  // }, [])

  return (
    <div>
      <Navbar />
      <h1>{msg}</h1>
      <InterviewList />
    </div>
  )
}

export default Users
