import React from 'react'

import { UseInputLoginForm } from '../hooks/useInputs'

import { UseAuthContextProvider } from '../context/AuthContext'

import InputError from './InputError'

const LoginForm = () => {

  const { userData, handleChange, resetUserData, errors } = UseInputLoginForm()
  const { signIn, authErrors } = UseAuthContextProvider()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(errors.email || errors.password) return
    if(!userData.email || !userData.password) return
    signIn(userData)
    resetUserData()
  }

  return (
    <div>
      { authErrors && <InputError>{authErrors.message}</InputError>}
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 text-left'
      >
        <div className='flex flex-col gap-1'>
          <label>Email</label>
          <input 
            type="email" 
            value={userData.email} 
            onChange={handleChange} 
            name="email" 
            className='bg-[#e4e4e4] pl-2 py-1 text-white bg-opacity-30 rounded-lg outline-none' 
          />
          {
            errors.email && <p className='text-red-700 text-sm mt-2'>{errors.email}</p>
          }
        </div>
        <div className='flex flex-col gap-1'>
          <label>Password</label>
          <input 
            type="password" 
            value={userData.password} 
            onChange={handleChange} 
            name="password"  
            className='bg-[#e4e4e4] pl-2 py-1 text-white bg-opacity-30 rounded-lg outline-none' 
          />
          {
            errors.password && <p className='text-red-700 text-sm mt-2'>{errors.password}</p>
          }
        </div>
        <button className='py-1 text-white rounded-lg hover:bg-opacity-80 hover:outline outline-1 transition-all'>Send</button>
      </form>
    </div>
  )
}

export default LoginForm