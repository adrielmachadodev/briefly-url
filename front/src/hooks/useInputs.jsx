import { useState } from "react"
import { ValidationInputUrl, ValidationInputLogin, ValidationInputRegister, ValidationInputEditUrl } from "../components/utils/validation"
import generateId from "../components/utils/generateId"

export const UseInputOriginUrl = () => {

    const [ urls, setUrls ] = useState({
        originUrl:'',
        shortUrl:''
    })

    const [errors, setErrors] = useState({
        originUrl:'',
        shortUrl:''
    })

    const handleChange = (e) => {
        setUrls({...urls, [e.target.name]:e.target.value})
        ValidationInputUrl({...urls, [e.target.name]:e.target.value}, setErrors)
    }

    const resetOriginUrl = () => setUrls({
        originUrl:'',
        shortUrl:''
    })

    const generateRandomShortUrl = () =>  {
        const randomId = generateId()
        setUrls({...urls, shortUrl:randomId})
        ValidationInputUrl({...urls, shortUrl:randomId}, setErrors)
    }

    return {
        urls,
        handleChange,
        resetOriginUrl,
        errors,
        generateRandomShortUrl
    }
}

export const UseInputLoginForm = () => {

    const [ userData, setUserData ] = useState({
        email:"",
        password:""
    })

    const [errors, setErrors] = useState({
        email:"",
        password:""  
    })

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value})
        ValidationInputLogin({...userData, [e.target.name]:e.target.value}, setErrors)
    }

    const resetUserData = () => setUserData({email:"", password:""})

    return {
        userData,
        handleChange,
        resetUserData,
        errors
    }
}

export const UseInputRegisterForm = () => {

    const [ userData, setUserData ] = useState({
        username:"",
        email:"",
        password:""
    })

    const [ errors, setErrors ] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value})
        ValidationInputRegister({...userData, [e.target.name]:e.target.value}, setErrors)
    }

    const resetUserData = () => setUserData({email:"", password:"", username:""})

    return {
        userData,
        handleChange,
        resetUserData,
        errors
    }
}

export const UseInputEditUrl = () => {

    const [ originUrl, setOriginUrl ] = useState('')

    const [errors, setErrors] = useState('')

    const handleChange = (e) => {
        setOriginUrl(e.target.value)
        ValidationInputEditUrl(e.target.value, setErrors)
    }

    const resetOriginUrl = () => setOriginUrl('')

    return {
        originUrl,
        handleChange,
        resetOriginUrl,
        errors,
        setOriginUrl
    }
}