import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Fintech from './Fintech'
import Totaltransaction from './comp/Totaltransaction'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Fintech/>} />
      <Route path='/transactions' element={<Totaltransaction/>}/>
    </Routes>
  )
}

export default App
