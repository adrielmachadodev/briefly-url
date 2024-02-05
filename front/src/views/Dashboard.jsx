import { useState, useEffect } from 'react'
import { useGetUrls } from '../hooks/useUrl'
import { UseAuthContextProvider } from '../context/AuthContext'

import Resultados from '../components/Resultados'

import { motion } from 'framer-motion'

const Dashboard = () => {

  const { user } = UseAuthContextProvider()
  const [ urls, setUrls ] = useState([])

  useEffect(() => {

    async function getUrls () {
      const res = await useGetUrls(user.token)
      setUrls(res.data)
    }

    getUrls()

  }, [])

  return (
    <div>
        <div className='mt-32 mb-8'>
            <motion.h1 
              className='text-3xl md:text-6xl mb-2 md:mb-5'
              initial={{opacity:0, y:100}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.175}}
            >Dashboard</motion.h1>
        </div>
        <Resultados
          result={urls}
          setUrls={setUrls}
        >
          Todas tus URLS.
        </Resultados>
    </div>
  )
}

export default Dashboard