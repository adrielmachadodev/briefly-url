import { UseAuthContextProvider } from '../context/AuthContext.jsx'

import { UseInputOriginUrl } from '../hooks/useInputs'

import BackgroundBlur from './BackgroundBlur'

import { useAddUrls } from '../hooks/useUrl.jsx'

import randomButton from '../assets/random.svg'

const Form = ({setIsCreate}) => {

    const { addUrl, user } = UseAuthContextProvider()
    const { urls, handleChange, resetOriginUrl, errors, generateRandomShortUrl } = UseInputOriginUrl()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(errors.originUrl || errors.shortUrl) return
        if(!urls.originUrl) return
        resetOriginUrl()
        const { data } = await useAddUrls(urls.originUrl, urls.shortUrl, user.token)
        if(data) {
            data.isSave = false
            addUrl(data)
            setIsCreate(false)
        }
    }

    return (
        <BackgroundBlur onClick={setIsCreate}>
            <form
                onSubmit={handleSubmit}
                className='fixed z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col gap-5 bg-[#242424] p-6 sm:p-12 rounded-xl'
            >
                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor='originUrl'
                        className='text-xl'
                    >URL original</label>
                    <div>
                        <input 
                            type='text'
                            id='originUrl'
                            name='originUrl'
                            onChange={handleChange}
                            value={urls.originUrl}
                            placeholder='https://github.com/'
                            className='bg-[#e4e4e4] pl-2 py-1 w-[300px] text-white bg-opacity-30 rounded-lg outline-none'
                        />
                        {
                            errors &&
                            <p className='text-red-500 text-sm mt-2'>{errors.originUrl}</p>
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor='shortUrl'
                        className='text-xl'
                    >URL customizada <span className='text-sm'>botón random</span></label>
                    <div>
                        <div className='flex gap-[5px]'>
                            <input 
                                type='text'
                                id='shortUrl'
                                name='shortUrl'
                                onChange={handleChange}
                                value={urls.shortUrl}
                                placeholder='mi-random-url'
                                className='bg-[#e4e4e4] pl-2 py-1 w-[265px] text-white bg-opacity-30 rounded-lg outline-none'
                            />
                            <div onClick={generateRandomShortUrl} className='hover:bg-[#353535] rounded-lg'>
                                <img className='h-[32px]' src={randomButton} alt="Random button" />
                            </div>
                        </div>
                        {
                            errors &&
                            <p className='text-red-500 text-sm mt-2'>{errors.shortUrl}</p>
                        }
                    </div>
                </div>
                <button className='text-xl py-1 text-white rounded-lg hover:bg-opacity-80 hover:outline outline-1 transition-all'>Send</button>
            </form>
        </BackgroundBlur>
    )
}

export default Form