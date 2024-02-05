import axios from '../config/axios.js'

import { toast } from 'react-toastify'

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
