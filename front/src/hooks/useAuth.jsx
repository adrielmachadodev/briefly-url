import axios from '../config/axios.js'

import { toast } from 'react-toastify'

import Cookies from 'js-cookie'

export const UseLogin = async (user) => {
    try {
      const res = await axios.post('/login', {
        email:user.email,
        password:user.password,
      })
      return res
    } catch (error) {
      console.log(error);
      toast(error.response.data.message)
    }
}

export const UseRegister = async (user) => {
  try {
    const res = await axios.post('/register', {
      username:user.username,
      email:user.email,
      password:user.password,
    })
    return res
  } catch (error) {
    console.log(error);
    toast(error.response.data.message)
  }
}

export const UserVerifyToken = async (token) => {
  try {
    const res = await axios.get('/verify')
    return res
  } catch (error) {
      toast(error.response.data.message)
      console.log(error);
  }
}

export const UseLogout = async () => {
  Cookies.remove('token')
  try {
    const res = await axios.post('/logout')
    return res
  } catch (error) {
      toast(error.response.data.message)
      console.log(error);
  }
}