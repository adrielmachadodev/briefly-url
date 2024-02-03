import React, { useEffect } from 'react'

import { Resultado } from './Resultado';

const Resultados = ({children, result, setUrls}) => {

  return (
    <>
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
        : <p className='text-gray-400'>Aún no hay resultados.</p>
      }
    </>
  )
}

export default Resultados;