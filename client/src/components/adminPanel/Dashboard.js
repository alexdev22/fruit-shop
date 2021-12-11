import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <div className='dashboard'>
        <div className='dashboard-title'>Accounting</div>
      </div>
    </div>

  )
}

export default Dashboard
