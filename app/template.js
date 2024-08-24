"use client"

import React from 'react'
import { useEffect } from 'react'
import { animatePageIn } from '@/utils/animation'

export default function Template({children}) {
    useEffect(() => {
        animatePageIn()
    }, [])
  return (
    <div>
        <div id="slide-in" className="min-h-screen bg-slate-700 z-10 fixed top-0 left-0 w-full"></div>
    {children}
    </div>
    
  )
}
