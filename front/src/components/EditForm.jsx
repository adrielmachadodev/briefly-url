import { useEffect } from 'react'

import BackgroundBlur from './BackgroundBlur'

import { UseAuthContextProvider } from '../context/AuthContext'

import { UseInputEditUrl } from '../hooks/useInputs'

import { useEditUrls } from '../hooks/useUrl'

const EditForm = ( {setIsEdit, editUrl, id} ) => {
    
    const { user } = UseAuthContextProvider()

    const { originUrl, handleChange, errors, setOriginUrl, resetOriginUrl } = UseInputEditUrl()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(errors) return
        if(!originUrl) return
        resetOriginUrl()
        const { data } = await useEditUrls(id, originUrl, user.token)
        if(data) {
            setIsEdit(false)
            location.reload()
        }
    }

    useEffect(() => {
        setOriginUrl(editUrl)
    }, [])

  return (
    <BackgroundBlur onClick={setIsEdit}>
        <form
            onSubmit={handleSubmit}
            className='fixed z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col gap-5 bg-[#242424] p-6 sm:p-12 rounded-xl'
        >
            <div className='flex flex-col gap-1'>
                <label
                    htmlFor='originUrl'
                    className='text-xl'
                >Nueva URL</label>
                <div>
                    <input 
                        type='text'
                        id='originUrl'
                        name='originUrl'
                        onChange={handleChange}
                        value={originUrl}
                        placeholder='https://github.com/'
                        className='bg-[#e4e4e4] pl-2 py-1 w-[300px] text-white bg-opacity-30 rounded-lg outline-none'
                    />
                    {
                        errors &&
                        <p className='text-red-500 text-sm mt-2'>{errors}</p>
                    }
                </div>
            </div>
            <button className='text-xl py-1 text-white rounded-lg hover:bg-opacity-80 hover:outline outline-1 transition-all'>Save</button>
        </form>
    </BackgroundBlur>
  )
}

export default EditForm