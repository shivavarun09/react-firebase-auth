import React from 'react'
import { Navbar } from 'react-bootstrap'
import Navbarr from './Componets/Navbarr/Navbarr'
import { Route,Routes } from 'react-router-dom'
import LoginFrom from './FirebaseForms/LoginFrom'
import SignupFrom from './FirebaseForms/SignupFrom'
import LoginDashboard from './Componets/LoginDashboard/LoginDashboard'
const App = () => {
  return (
    <div>
      <Navbarr/>
      <Routes>
        <Route path='/login' element={<LoginFrom/>}/>
        <Route path='/signup' element={<SignupFrom/>}/>
        <Route path='/Logindashboard' element={<LoginDashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
