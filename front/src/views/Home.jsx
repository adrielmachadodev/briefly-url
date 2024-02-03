import { useState } from 'react'

import { Link } from 'react-router-dom'

import { UseAuthContextProvider } from '../context/AuthContext'

import Form from '../components/Form'
import Resultados from '../components/Resultados'

import Brush from '../assets/brush.svg'
import LogIcon from '../assets/logicon.svg'

const Home = () => {

    const { isAuthenticated, urls } = UseAuthContextProvider()
    const [ isCreate, setIsCreate ] = useState(false)

    return (
        <div className=''>
            <main className='mt-32 mb-8'>
                <div>
                    <h1 className='text-3xl md:text-6xl mb-2 md:mb-5'>Acortá tus URLs de forma gratuita.</h1>
                    <h2 className='text-xl md:text-2xl mb-6 '>iniciá sesión, te dará beneficios</h2>
                </div>
                <div>
                <div className='flex items-center gap-6'>
                    <button onClick={() => setIsCreate(!isCreate)} className='flex items-center gap-[6px] cursor-pointer'>
                        Creá tu primer link
                        <img className='w-4' src={Brush} />
                    </button>
                    {
                        !isAuthenticated
                        ?   <Link to="/login" className='flex items-center gap-[6px]'>
                                Iniciar sesión
                                <img className='w-4' src={LogIcon} />
                            </Link>
                        :   <Link to="/login" className='flex items-center gap-[6px]'>
                                Ir al Dashboard
                                <img className='w-4' src={LogIcon} />
                            </Link>
                    }
                </div>
                {
                    isCreate &&
                    <Form 
                        setIsCreate={setIsCreate}
                    />
                }
                </div>
            </main>
            <Resultados result={urls}> 
                Creados recientemente
            </Resultados>
            {/* <button
                onClick={() => console.log(urls)}
            >Pruebas</button> */}
        </div>
  )
}

export default Home