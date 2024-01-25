import { useEffect, useState } from 'react'
import { getHelloWorldMsg } from 'api'
import Navbar from 'components/Navbar'
import InterviewList from 'components/InterviewList'

const Dashboard = () => {
  const [msg, setMsg] = useState()

  useEffect(() => {
    ;(async () => setMsg((await getHelloWorldMsg()).data))()
  }, [])

  return (
    <div>
      <Navbar />
      <h1>{msg}</h1>
      <InterviewList />
    </div>
  )
}

export default Dashboard
