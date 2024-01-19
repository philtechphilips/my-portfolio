import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 flex flex-col items-center py-10'>
      <h1 className='text-5xl font-semibold'>Firacard</h1>
      <ul className='flex flex-wrap items-center justify-center list-none md:gap-3 mt-2'>
        <li className='font-[Gt]'>Node Js/Express</li>
        <li className='font-[Gt]'>Mongo DB</li>
        <li className='font-[Gt]'>Postman</li>
        <li className='font-[Gt]'>Github</li>
      </ul>
      <Link href="https://firacard.com" className='font-[Gt] mt-3 text-blue-600'>Visit Firacard</Link>
      <div className='pt-6'>
        <Image className='rounded-lg' src="/images/firacard.png" width={700} height={500} alt="reyts"></Image>
        <ul className='flex flex-col list-disc gap-3 mt-2 w-full md:w-[700px]'>
          <li className='font-[Gt]'>I built new API endpoints to introduces new features into the application.</li>
          <li className='font-[Gt]'>I utilized Postman as a comprehensive tool to document and test APIs. Leveraging its intuitive interface, I meticulously documented API endpoints, parameters, and response structures, creating thorough and easily accessible documentation.</li>
          <li className='font-[Gt]'>Utilized: NodeJs, Express, Mongoose/MongoDB, Postman..</li>
        </ul>
      </div>
    </div>
  )
}

export default page
