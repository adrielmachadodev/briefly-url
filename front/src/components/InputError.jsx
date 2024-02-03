import React from 'react'

const InputError = ({children}) => {
  return (
    <div
        className='bg-red-600 text-[#f4f4f4] text-center font-semibold h-6 w-full rounded-lg mb-4'
    >
        {children}
    </div>
  )
}

export default InputError