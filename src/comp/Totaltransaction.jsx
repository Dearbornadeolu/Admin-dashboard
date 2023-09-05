import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'
import AllTrans from './transComp/AllTrans'

const Totaltransaction = () => {
  return (
    <div>
        <TopNav/>
        <div className='md:flex md:justify-start gap-3 pl-2 pr-2'>
            <SideNav/>
            <AllTrans/>
        </div>
    </div>
  )
}

export default Totaltransaction