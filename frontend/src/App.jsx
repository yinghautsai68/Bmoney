import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Record from './pages/Record'
import Savings from './pages/Savings'
import Management from './pages/Management'
import Analysis from './pages/Analysis'
import RecordDetails from './pages/RecordDetails'
import SavingsRecords from './pages/SavingsRecords'
const App = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full h-screen bg-yellow-500'>
      <Routes>
        <Route path='/records' element={<Record />}></Route>
        <Route path='/records/:id' element={<RecordDetails />}></Route>
        <Route path='/analysis' element={<Analysis />}></Route>

        <Route path='/savings' element={<Savings />}></Route>
        <Route path='/savings/:id' element={<SavingsRecords />}></Route>
        <Route path='/management' element={<Management />}></Route>
      </Routes>
    </div>
  )
}

export default App