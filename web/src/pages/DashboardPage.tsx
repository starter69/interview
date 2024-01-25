import { useEffect, useState } from 'react'
import * as api from 'api'
import Navbar from 'components/Navbar'

const Dashboard = () => {
  // useEffect(() => {
  //   ;(async () => setMsg((await getHelloWorldMsg()).data))()
  // }, [])

  return (
    <div>
      <Navbar />
      <h1>This is dash board</h1>
    </div>
  )
}

export default Dashboard
