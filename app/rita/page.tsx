import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 flex flex-col items-center py-10'>
      <h1 className='text-5xl font-semibold'>Rita Data</h1>
      <ul className='flex flex-wrap items-center justify-center list-none md:gap-3 mt-2'>
        <li className='font-[Gt]'>React Js</li>
        <li className='font-[Gt]'>HTML</li>
        <li className='font-[Gt]'>CSS</li>
        <li className='font-[Gt]'>Javascript</li>
      </ul>
      <Link href="https://ritapersonaldata.com" className='font-[Gt] mt-3 text-blue-600'>Visit Rita Data</Link>
      <div className='pt-6'>
        <Image className='rounded-lg' src="/images/rita.png" width={700} height={500} alt="reyts"></Image>
        <ul className='flex flex-col list-disc gap-3 mt-2 w-full md:w-[700px]'>
          <li className='font-[Gt]'>Built the company website's v2, featuring upgraded functionalities and an enhanced user interface for an improved online presence.</li>
          <li className='font-[Gt]'>Translated a meticulously designed UI into a fully functional website, seamlessly integrating visual elements and interactive features. This involved optimizing user experience and ensuring alignment with design specifications. The result is a dynamic, responsive website that captures the intended aesthetics while providing a smooth and engaging browsing experience.</li>
          <li className='font-[Gt]'>Utilized: React.JS, CSS, JavaScript, HTML.</li>
        </ul>
      </div>
    </div>
  )
}

export default page
