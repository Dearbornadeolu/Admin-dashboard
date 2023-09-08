import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'
import GetUsers from './userscomp/GetUsers'

const Account = () => {
  return (
    <div>
        <TopNav/>
        <div className='md:flex md:justify-start gap-3  pr-2'>
            <SideNav/>
            <GetUsers/>
        </div>
    </div>
  )
}

export default Account