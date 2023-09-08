import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Fintech from './Fintech'
import Totaltransaction from './comp/Totaltransaction'
import Transtrey from './comp/Transtrey'
import Account from './comp/Account'
import AdminLoginPage from './Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={<AdminLoginPage/>} />
      <Route path='/dashboard' element={<Fintech/>} />
      <Route path='/transactions' element={<Totaltransaction/>}/>
      <Route path='/transactionstatus' element={<Transtrey/>}/>
      <Route path='/accounts' element={<Account/>}/>
    </Routes>
  )
}

export default App
