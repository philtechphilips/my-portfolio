import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 flex flex-col items-center py-10'>
      <h1 className='text-5xl font-semibold' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Rita Data</h1>
      <ul className='flex flex-wrap items-center justify-center list-none md:gap-3 mt-2'>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="0" data-aos-duration="800">React Js</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">HTML</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">CSS</li>
        <li className='font-[Gt]' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="150" data-aos-duration="800">Javascript</li>
      </ul>
      <Link href="https://ritapersonaldata.com" className='font-[Gt] mt-3 text-blue-600' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Visit Rita Data</Link>
      <div className='pt-6'>
        <Image className='rounded-lg' data-aos="zoom-in"
          data-aos-easing="ease-in-out" data-aos-duration="800" src="/images/rita.png" width={700} height={500} alt="reyts"></Image>
        <ul className='flex flex-col list-disc gap-3 mt-2 w-full md:w-[700px]'>
          <li className='font-[Gt]' data-aos="fade-up"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">Built the company website's v2, featuring upgraded functionalities and an enhanced user interface for an improved online presence.</li>
          <li className='font-[Gt]' data-aos="fade-up"
          data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">Translated a meticulously designed UI into a fully functional website, seamlessly integrating visual elements and interactive features. This involved optimizing user experience and ensuring alignment with design specifications. The result is a dynamic, responsive website that captures the intended aesthetics while providing a smooth and engaging browsing experience.</li>
          <li className='font-[Gt]' data-aos="fade-up"
          data-aos-easing="ease-in-out" data-aos-delay="150" data-aos-duration="800">Utilized: React.JS, CSS, JavaScript, HTML.</li>
        </ul>
      </div>
    </div>
  )
}

export default page
