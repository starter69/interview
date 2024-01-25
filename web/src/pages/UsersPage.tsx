import { useEffect, useState } from 'react'
import * as api from 'api'
import Navbar from 'components/Navbar'

const Users = () => {
  const [msg, setMsg] = useState()

  // useEffect(() => {
  //   ;(async () => setMsg((await getHelloWorldMsg()).data))()
  // }, [])

  return (
    <div>
      <Navbar />
      <h1>{msg}</h1>
    </div>
  )
}

export default Users
