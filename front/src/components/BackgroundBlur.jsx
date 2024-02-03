import React from 'react'

const BackgroundBlur = ({children, onClick}) => {
  return (
    <div>
      <div
        onClick={() => onClick(false)}
        className='fixed z-10 left-0 top-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'
      />
      {children}
    </div>
  )
}

export default BackgroundBlur