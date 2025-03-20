import React from 'react'
import DateRole from './date'
import Image from 'next/image'

export default function InternshipB() {
    return (
        <div className='pb-10'>
            <div className='flex md:flex-row md:justify-center flex-col'>
                <div className='flex flex-col max-w-xl gap-10 text-sm md:text-base md:pt-10 text-center md:text-left py-24 order-2 md:order-1'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='flex flex-col order-1 md:order-2'>
                    <a href="" className='text-3xl font-semibold pt-10 text-center md:text-right md:pr-80'>Company Name</a>
                    <DateRole dateText={"Month - Month Year"} role="Position Title" />
                </div>
            </div>
            <Image
                src={"/placeholder.jpg"}
                width={600}
                height={500}
                alt="Company Image"
                className="mx-auto"
            />
        </div>
    )
}