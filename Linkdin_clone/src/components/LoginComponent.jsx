import React from 'react'
import { LoginAPI } from '../api/AuthAPI'
import '../sass/LoginComponent.scss';
export default function LoginComponent() {
  const login = ()=>{
    LoginAPI();
  }
  return (
    <div>
      <h1>Login Components</h1>
      <button  onClick={login}  className='login-btn'>Login To Linkdin</button>
    </div>
  )
}
