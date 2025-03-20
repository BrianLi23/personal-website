"use client"
import React from 'react'
import Projects from './components/projects'
import Header from '@/components/header'
import Heading from './components/heading'
import InternshipA from './components/internship1'
import InternshipB from './components/internship2'
import Footer from '@/components/footer'

export default function page() {
  return (
    <div className="text-slate-700">
      <div className="bg-[#a4bbde] absolute top-[-6rem] -z-10 right-[rem] sm:h-[10.25rem] rounded-full blur-[8rem] sm:w-[105.75rem]"></div>
      
      {/* Container with right padding to shift all content */}
      <div className="pl-10 md:pl-24 lg:pl-32">
        <Header/>
        <Heading section="Internship"/>
        <InternshipA/>
        <Heading section="Projects"/>
        <p className='font-normal text-xl text-slate-400 pl-20 md:pr-24 lg:pr-32'> 
          "Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin
        </p>
        <Projects/>
        <Footer/>
      </div>
    </div>
  )
}