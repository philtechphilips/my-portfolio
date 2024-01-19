import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-10 pb-4 px-5 md:px-10 flex flex-col md:flex-row justify-between md:items-center'>
      <div className='flex gap-10'>
        <p className='font-[Gt]' data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="800">{new Date().getFullYear()}©</p>
      </div>
      <div className='flex gap-5 mt-5 md:gap-10'>
        <Link href="https://www.linkedin.com/in/isola-pelumi-84661821a/" className='text-sm font-[Gt]' data-aos="fade-up"
          data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="800">LINKEDIN</Link>
        <Link href="https://github.com/philtechphilips" className='text-sm font-[Gt]' data-aos="fade-up"
          data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-duration="800">GITHUB</Link>
        <Link href="https://twitter.com/philipsdcoda" className='text-sm font-[Gt]' data-aos="fade-up"
          data-aos-easing="ease-in-out" data-aos-delay="150" data-aos-duration="800">TWITTER</Link>
        <Link href="https://www.instagram.com/philipstheprogrammer/" className='text-sm font-[Gt]' data-aos="fade-up"
          data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-duration="800">INSTAGRAM</Link>
      </div>
    </div>
  )
}

export default Footer
