import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 flex flex-col items-center py-10'>
      <h1 className='text-5xl font-semibold' data-aos="zoom-in"
        data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Agape Baptist College</h1>
      <ul className='flex flex-wrap items-center justify-center list-none gap-3 mt-2'>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">React Js</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">Sql/Mysql</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="150" data-aos-duration="800">Php</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">Laravel</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="250" data-aos-duration="800">Tailwind CSS</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="300" data-aos-duration="800">Javascript</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="350" data-aos-duration="800">Ajax</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="400" data-aos-duration="800">Bootstrap</li>
      </ul>
      <Link href="https://firacard.com" className='font-[Gt] mt-3 text-blue-600' data-aos="fade-up"
        data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Visit Agape Baptist College</Link>
      <div className='pt-6'>
        <Image className='rounded-lg' src="/images/agape.png" width={700} height={500} alt="reyts"></Image>
        <ul className='flex flex-col list-disc gap-3 mt-2 w-full md:w-[700px]'>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">I have developed both the initial version (v1) and an upgraded version (v2) of the school portal.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">Built student, parent, teacher and administrator dashboard.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="150" data-aos-duration="800">Streamlined the school exam report sheet into an online format, alleviating the burden on teachers by automating calculations and simplifying the process.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">Implemented features such as attendance tracking, exam report generation, homework management, and school fees payment for comprehensive functionality in the system.</li>
          <li className='font-[Gt]' data-aos="fade-up"
            data-aos-easing="ease-in-out" data-aos-delay="250" data-aos-duration="800">Test, Debug and Deployed the web app.</li>
        </ul>
      </div>
    </div>
  )
}

export default page
