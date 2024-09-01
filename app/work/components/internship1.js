import React from 'react'
import DateRole from './date'
import Image from 'next/image'

export default function InternshipA() {
  return (
    <div className='pb-10'>
      <div className='flex md:flex-row md:justify-center flex-col'>
        <div className='flex flex-col'>
          <a href="" className='text-3xl font-semibold pt-10 text-center md:text-left md:pl-80'>Eon Media</a>
          <DateRole dateText={"May - August 2024"} role="Ai/ML Developer" />
        </div>
        <div className='flex flex-col max-w-xl gap-10 text-sm md:text-base md:pt-10 text-center md:text-left py-24'>
          <p>Developed and integrated NLP capabilities into OpenSearch cluster, tested and deployed TorchScript models and ingest processes.</p>
          <p>Facilitated cloud deployment of pods through EKS clusters, performed and optimized containerization of various pods and algorithms.</p>
          <p>Designed and trained a custom binary classifier from scratch to identify logos in images using Convolutional Neural Networks (CNNs) and transfer learning of the ResNet50 model.</p>
        </div>
      </div>
      <Image
        src={"/eonmedia.jpg"}
        width={600}
        height={500}
        alt="Brian Li"
        className="mx-auto"  // Center the image and add some margin on top
      />
    </div>
  )
}
