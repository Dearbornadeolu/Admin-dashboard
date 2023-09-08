import React from 'react'
import TotalTrans from './mainp/TotalTrans'
import DayTotalTrans from './mainp/DayTotalTrans'
import Users from './mainp/Users'



const MainPage = () => {

  
    return (
        <div className=''>
            <TotalTrans />
            <DayTotalTrans/>
            <Users/>
        </div>
    )
}

export default MainPage