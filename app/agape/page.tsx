import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 flex flex-col items-center py-10'>
      <h1 className='text-5xl font-semibold'>Agape Baptist College</h1>
      <ul className='flex flex-wrap items-center justify-center list-none md:gap-3 mt-2'>
        <li className='font-[Gt]'>React Js</li>
        <li className='font-[Gt]'>Sql/Mysql</li>
        <li className='font-[Gt]'>Php</li>
        <li className='font-[Gt]'>Laravel</li>
        <li className='font-[Gt]'>Tailwind CSS</li>
        <li className='font-[Gt]'>Javascript</li>
        <li className='font-[Gt]'>Ajax</li>
        <li className='font-[Gt]'>Bootstrap</li>
      </ul>
      <Link href="https://firacard.com" className='font-[Gt] mt-3 text-blue-600'>Visit Agape Baptist College</Link>
      <div className='pt-6'>
        <Image className='rounded-lg' src="/images/agape.png" width={700} height={500} alt="reyts"></Image>
        <ul className='flex flex-col list-disc gap-3 mt-2 w-full md:w-[700px]'>
          <li className='font-[Gt]'>I have developed both the initial version (v1) and an upgraded version (v2) of the school portal.</li>
          <li className='font-[Gt]'>Built student, parent, teacher and administrator dashboard.</li>
          <li className='font-[Gt]'>Streamlined the school exam report sheet into an online format, alleviating the burden on teachers by automating calculations and simplifying the process.</li>
          <li className='font-[Gt]'>Implemented features such as attendance tracking, exam report generation, homework management, and school fees payment for comprehensive functionality in the system.</li>
          <li className='font-[Gt]'>Test, Debug and Deployed the web app.</li>
        </ul>
      </div>
    </div>
  )
}

export default page
