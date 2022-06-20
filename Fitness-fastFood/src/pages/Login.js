import React from 'react'
import { PanelControl } from '../components/PanelControl'
import SignIn from "../components/SigIn"
const Login = () => {
  const isLoggedIn = true
  return (
    <div>
    {isLoggedIn ? <PanelControl/> : <SignIn/>}</div>
    
  )
}

export default Login