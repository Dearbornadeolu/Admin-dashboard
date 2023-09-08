import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'
import TypesTran from './transComp/TypesTran'

const Transtrey = () => {
  return (
    <div>
        <TopNav/>
        <div className='md:flex md:justify-start gap-3  pr-2'>
            <SideNav/>
            <TypesTran/>
        </div>
    </div>
  )
}

export default Transtrey