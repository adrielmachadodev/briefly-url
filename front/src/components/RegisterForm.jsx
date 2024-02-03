import { UseInputRegisterForm } from "../hooks/useInputs"

import { UseAuthContextProvider } from "../context/AuthContext"

import InputError from "./InputError"

const RegisterForm = () => {

    const { signUp, authErrors } = UseAuthContextProvider()
    const { userData, handleChange, resetUserData, errors } = UseInputRegisterForm()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(errors.email || errors.password) return
        if(!userData.email || !userData.password || !userData.username) return
        signUp(userData)
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
                    <label htmlFor="username">username</label>
                    <input 
                        type='text'
                        name='username'
                        id='username'
                        value={userData.username}
                        onChange={handleChange}
                        className='bg-[#e4e4e4] pl-2 py-1 text-white bg-opacity-30 rounded-lg outline-none'
                    />
                    {
                        errors &&
                        <p className='text-red-700 text-sm mt-2'>{errors.username}</p>
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">email</label>
                    <input 
                        type='email'
                        name='email'
                        id='email'
                        value={userData.email}
                        onChange={handleChange}
                        className='bg-[#e4e4e4] pl-2 py-1 text-white bg-opacity-30 rounded-lg outline-none'
                    />
                    {
                        errors &&
                        <p className='text-red-700 text-sm mt-2'>{errors.email}</p>
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">password</label>
                    <input 
                        type='password'
                        name='password'
                        id='password'
                        value={userData.password}
                        onChange={handleChange}
                        className='bg-[#e4e4e4] pl-2 py-1 text-white bg-opacity-30 rounded-lg outline-none'
                    />
                    {
                        errors &&
                        <p className='text-red-700 text-sm mt-2'>{errors.password}</p>
                    }
                </div>
                <button className='py-1 text-white rounded-lg hover:bg-opacity-80 hover:outline outline-1 transition-all'>Send</button>
            </form>
        </div>
    )
}

export default RegisterForm