import React from 'react'
import {Routes,Route} from "react-router-dom"
import Register from './component/register'
import Login from './component/login'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App