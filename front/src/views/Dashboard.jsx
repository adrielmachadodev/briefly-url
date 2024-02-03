import { useState, useEffect } from 'react'
import { useGetUrls } from '../hooks/useUrl'

import Resultados from '../components/Resultados'

const Dashboard = () => {

  const [ urls, setUrls ] = useState([])

  useEffect(() => {

    async function getUrls () {
      const res = await useGetUrls()
      setUrls(res.data)
    }

    getUrls()

  }, [])

  return (
    <div>
        <div className='mt-32 mb-8'>
            <h1 className='text-3xl md:text-6xl mb-2 md:mb-5'>Dashboard</h1>
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