import { useEffect, useState } from 'react'
import { getHelloWorldMsg } from 'api'
import Navbar from 'components/Navbar'

const Dashboard = () => {
  const [msg, setMsg] = useState()

  useEffect(() => {
    ;(async () => setMsg((await getHelloWorldMsg()).data))()
  }, [])

  return (
    <div>
      <Navbar />
      <h1>{msg}</h1>
    </div>
  )
}

export default Dashboard
