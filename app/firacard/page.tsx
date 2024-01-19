import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 flex flex-col items-center py-10'>
      <h1 className='text-5xl font-semibold' data-aos="zoom-in"
        data-aos-easing="ease-in-out" data-aos-duration="800">Firacard</h1>
      <ul className='flex flex-wrap items-center justify-center list-none md:gap-3 mt-2'>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Node Js/Express</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">Mongo DB</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="150" data-aos-duration="800">Postman</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">Github</li>
      </ul>
      <Link href="https://firacard.com" className='font-[Gt] mt-3 text-blue-600' data-aos="zoom-in"
        data-aos-easing="ease-in-out" data-aos-delay="250" data-aos-duration="800">Visit Firacard</Link>
      <div className='pt-6'>
        <Image className='rounded-lg' src="/images/firacard.png" width={700} height={500} alt="reyts" data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="1000"></Image>
        <ul className='flex flex-col list-disc gap-3 mt-2 w-full md:w-[700px]'>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="0" data-aos-duration="800">I built new API endpoints to introduces new features into the application.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">I utilized Postman as a comprehensive tool to document and test APIs. Leveraging its intuitive interface, I meticulously documented API endpoints, parameters, and response structures, creating thorough and easily accessible documentation.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">Utilized: NodeJs, Express, Mongoose/MongoDB, Postman..</li>
        </ul>
      </div>
    </div>
  )
}

export default page
