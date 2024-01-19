import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 flex flex-col items-center py-10 mb-64'>
      <h1 className='text-5xl font-semibold' data-aos="zoom-in"
        data-aos-easing="ease-in-out" data-aos-duration="100">Reyts Fintech</h1>
      <ul className='flex flex-wrap items-center justify-center list-none md:gap-3 mt-2'>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">React Js</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">Node Js/Express</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="150" data-aos-duration="800">Mongo DB</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">Redis</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="250" data-aos-duration="800">Postman</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="300" data-aos-duration="800">Github</li>
      </ul>
      <Link href="https://reyts.com" className='font-[Gt] mt-3 text-blue-600' data-aos="fade-up"
        data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Visit Reyts</Link>
      <div className='pt-6'>
        <Image className='rounded-lg' src="/images/reyts.png" width={700} height={500} alt="reyts" data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800"></Image>
        <ul className='flex flex-col list-disc gap-3 mt-2 w-full md:w-[700px]'>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Built the v2 of the Reyts Application.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Utilized Postman for documentation and testing of API endpoints.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Utilized: ReactJs, NodeJs, Express, Mongoose/MongoDB, Redis, Postman.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Conducted debugging and code refactoring to address issues associated with Redis integration.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Implemented API endpoints for user authentication, integrated KYC verification functionality, and facilitated the updating of user data through the KYC process.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Conducted testing procedures to validate the functionality and seamless interaction between the backend and frontend components of the application.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Implemented a currency swap feature using a scheduled Cron Job, automating the matching of corresponding exchanges in the system. Additionally, automated the currency swap process to transfer funds directly to the respective user bank.</li>
        </ul>
      </div>
    </div>
  )
}

export default page
