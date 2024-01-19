import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 flex flex-col items-center py-10'>
      <h1 className='text-5xl font-semibold'>Reyts Fintech</h1>
      <ul className='flex flex-wrap items-center justify-center list-none md:gap-3 mt-2'>
        <li className='font-[Gt]'>React Js</li>
        <li className='font-[Gt]'>Node Js/Express</li>
        <li className='font-[Gt]'>Mongo DB</li>
        <li className='font-[Gt]'>Redis</li>
        <li className='font-[Gt]'>Postman</li>
        <li className='font-[Gt]'>Github</li>
      </ul>
      <Link href="https://reyts.com" className='font-[Gt] mt-3 text-blue-600'>Visit Reyts</Link>
      <div className='pt-6'>
        <Image className='rounded-lg' src="/images/reyts.png" width={700} height={500} alt="reyts"></Image>
        <ul className='flex flex-col list-disc gap-3 mt-2 w-full md:w-[700px]'>
          <li className='font-[Gt]'>Built the v2 of the Reyts Application.</li>
          <li className='font-[Gt]'>Utilized Postman for documentation and testing of API endpoints.</li>
          <li className='font-[Gt]'>Utilized: ReactJs, NodeJs, Express, Mongoose/MongoDB, Redis, Postman.</li>
          <li className='font-[Gt]'>Conducted debugging and code refactoring to address issues associated with Redis integration.</li>
          <li className='font-[Gt]'>Implemented API endpoints for user authentication, integrated KYC verification functionality, and facilitated the updating of user data through the KYC process.</li>
          <li className='font-[Gt]'>Conducted testing procedures to validate the functionality and seamless interaction between the backend and frontend components of the application.</li>
          <li className='font-[Gt]'>Implemented a currency swap feature using a scheduled Cron Job, automating the matching of corresponding exchanges in the system. Additionally, automated the currency swap process to transfer funds directly to the respective user bank.</li>
        </ul>
      </div>
    </div>
  )
}

export default page
