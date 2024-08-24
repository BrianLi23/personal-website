import React from 'react'

export default function Heading({section}) {
  return (
    <div className='flex flex-col justify-center items-center h-full py-56'>
      <h1 className="text-4xl ">
      {section}
      </h1>
      <div className="mt-6 w-12 h-1 bg-slate-700"></div>
    </div>
  )
}
