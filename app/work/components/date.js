import React from 'react'

export default function DateRole({dateText, role}) {
  return (
    <div className='px-80'>
    <p className='text-xl font-thin py-8 '>{role}</p>
    <p className='text-xl font-thin pt-52 py-20 text-slate-500'>{dateText}</p>
    </div>
  )
}
