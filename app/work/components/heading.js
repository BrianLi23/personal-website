import React from 'react'

export default function Heading({section}) {
  return (
    <div className='flex flex-col justify-start items-start h-full py-18 pb-10 pl-24 md:pl-20'>
      <h1 className="text-4xl">
        {section}
      </h1>
      <div className="mt-6 w-12 h-1 bg-slate-700"></div>
    </div>
  )
}