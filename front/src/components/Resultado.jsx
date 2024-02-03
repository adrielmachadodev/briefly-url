import { useLocation } from "react-router-dom"

import ButtonsUpdateDelete from "./buttons/ButtonsUpdateDelete"
import ButtonSave from "./buttons/ButtonSave"

export const Resultado = ({ originUrl, shortUrl, id, setUrls, isSave }) => {

  const { pathname } = useLocation()

  return (
    <div className='border-[1px] border-gray-500 p-2 py-4 rounded-xl flex flex-col gap-1 relative'>
        <div className='font-semibold'>
            <a target='_blank' href={`${import.meta.env.VITE_BACKEND_URL}/r/${shortUrl}`}>/{shortUrl}</a>
        </div>
        <p className='text-gray-500 truncate'>{originUrl}</p>
        {
          pathname === '/dashboard'
          ? <ButtonsUpdateDelete setUrls={setUrls} id={id} originUrl={originUrl} />
          : <ButtonSave isSave={isSave} id={id} />
        }
    </div>
  )
}
