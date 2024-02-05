import React, { useEffect } from 'react'

import { Resultado } from './Resultado';

import { motion } from 'framer-motion'

const Resultados = ({children, result, setUrls}) => {

  return (
    <div>
      {
        result.length > 0 
        ? <div className='flex flex-col gap-2'>
            {children}
            <div className={`${result.length && 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'}`}>
              {
                result.map(({shortUrl, originUrl, _id, isSave}) => (
                    <Resultado 
                      key={shortUrl}
                      shortUrl={shortUrl}
                      originUrl={originUrl}
                      id={_id}
                      setUrls={setUrls}
                      isSave={isSave}
                    />
                  ))
                }
            </div>
          </div>
        : <motion.p 
            className='text-gray-400'
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.4}}
        >Aún no hay resultados.</motion.p>
      }
    </div>
  )
}

export default Resultados;