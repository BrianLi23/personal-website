"use client"
import React from 'react'
import Projects from './components/projects'
import Header from '@/components/header'
import Heading from './components/heading'
import InternshipA from './components/internship1'
import Footer from '@/components/footer'

export default function page() {
  return (
    <div className=" text-slate-700">
    <div className="bg-[#a4bbde] absolute top-[-6rem] -z-10 right-[rem] sm:h-[10.25rem] rounded-full blur-[8rem] sm:w-[105.75rem]"></div>
    <Header/>
    <Heading section="Internship"/>
    <InternshipA/>
    <Heading section="Projects"/>
    <p className='font-thin text-xl text-center text-slate-400'> "Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin</p>
    <Projects/>
    <Footer/> 
    </div>
  )
}
