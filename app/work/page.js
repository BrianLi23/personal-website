"use client"
import React from 'react'
import Projects from './components/projects'
import Header from '@/components/header'
import Heading from './components/heading'
import InternshipA from './components/internship1'

export default function page() {
  return (
    <div className="font-nexa text-slate-700">
    <div className="bg-[#a4bbde] absolute top-[-6rem] -z-10 right-[rem] sm:h-[10.25rem] rounded-full blur-[8rem] sm:w-[105.75rem]"></div>
    <Header/>
    <Heading section="Internship"/>
    <InternshipA/>
    <Heading section="Projects"/>
    <Projects/>
    <Header/>
    </div>
  )
}
