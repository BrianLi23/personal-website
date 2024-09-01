import React from 'react'

export default function DateRole({dateText, role}) {
  return (
    <div className='md:px-80'>
    <p className='md:text-xl text-lg font-thin py-8 text-center md:text-left'>{role}</p>
    <p className='md:text-xl text-lg font-thin md:pt-30 md:py-20 text-slate-500t text-center md:text-left'>{dateText}</p>
    </div>
  )
}
