import React from 'react'
import SideNav from './comp/SideNav'
import TopNav from './comp/TopNav'
import MainPage from './comp/MainPage'

const Fintech = () => {
  return (
    <div>
        <TopNav/>
        <div className='md:flex md:justify-start gap-3 pl-2 pr-2'>
            <SideNav/>
            <MainPage/>
        </div>
    </div>
  )
}

export default Fintech