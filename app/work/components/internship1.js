import React from 'react'
import DateRole from './date'
import Image from 'next/image'
import { useState } from 'react'

export default function InternshipA() {
  const [activeCompany, setActiveCompany] = useState(null);
  
  const companies = {
    miovision: {
      name: "Miovision",
      description: "in which I'm leveraging machine learning techniques to innovate and research adaptive traffic solutions for smart cities",
      date: "January - April 2025",
      role: "Software Developer",
      image: "/miovision.jpg",
      position: "top-10 right-20" // Position for first image - top right
    },
    eonmedia: {
      name: "Eon Media",
      description: "where I spearheaded development in various AI solutions for media-based video archives",
      date: "May - August 2024",
      role: "AI/ML Developer",
      image: "/eonmedia.jpg",
      position: "bottom-32 right-32" // Position for second image - bottom left
    },
    watai: {
      name: "WAT.AI",
      description: "where I prototyped sparse and denoising autoencoders for compression of IoT Cybersecurity Data, used to develop models in detecting cyberattacks",
      date: "September - May 2024",
      role: "AI/ML Developer",
      // No image for this one
    }
  };

  const handleMouseEnter = (company) => {
    setActiveCompany(company);
  };
  
  const handleMouseLeave = () => {
    setActiveCompany(null);
  };

  return (
    <div className="py-20">
      <div className="flex flex-col pl-10 md:pl-20 pr-10 md:pr-20 relative">
        <div className="mb-16">
          <p className="text-3xl mb-6">I'm currently apart of the team at...</p>
          <div className="max-w-4xl">
            <span 
              className="text-2xl text-blue-600 font-medium cursor-pointer inline-block mb-4"
              onMouseEnter={() => handleMouseEnter('miovision')}
              onMouseLeave={handleMouseLeave}
            >
              {companies.miovision.name}
            </span>
            <p className="text-lg">{companies.miovision.description}</p>
            <p className="text-lg mt-4 text-gray-600">{companies.miovision.date} · {companies.miovision.role}</p>
          </div>
        </div>
        
        {/* Previous positions */}
        <div className="mb-16">
          <p className="text-3xl mb-4">Previously, I was at...</p>
          
          {/* Eon Media */}
          <div className="max-w-4xl mb-12">
            <span 
              className="text-2xl text-blue-600 font-medium cursor-pointer inline-block mb-4"
              onMouseEnter={() => handleMouseEnter('eonmedia')}
              onMouseLeave={handleMouseLeave}
            >
              {companies.eonmedia.name}
            </span>
            <p className="text-lg">{companies.eonmedia.description}</p>
            <p className="text-lg mt-4 text-gray-600">{companies.eonmedia.date} · {companies.eonmedia.role}</p>
          </div>
          
          {/* WAT.AI */}
          <div className="max-w-4xl">
            <span 
              className="text-2xl text-blue-600 font-medium cursor-pointer inline-block mb-4"
            >
              {companies.watai.name}
            </span>
            <p className="text-lg">{companies.watai.description}</p>
            <p className="text-lg mt-4 text-gray-600">{companies.watai.date} · {companies.watai.role}</p>
          </div>
        </div>
        
        {/* Images with staggered positions */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {Object.keys(companies).map(company => (
            companies[company].image && (
              <div
                key={company}
                className={`absolute ${companies[company].position} w-1/4 h-64 transition-all duration-500 ${
                  activeCompany === company
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-95"
                }`}
              >
                <Image
                  src={companies[company].image}
                  layout="fill"
                  objectFit="contain"
                  alt={companies[company].name}
                  priority={true}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}