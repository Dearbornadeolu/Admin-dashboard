import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='w-[10%] h-[90vh] border-r-2 border-blue-800'>
        <ul>
            <li><Link to="">DASHBOARD</Link></li>
            <li><Link to="/transactions">TRANSACTIONS</Link></li>
        </ul>
    </div>
  )
}

export default SideNav