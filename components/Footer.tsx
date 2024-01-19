import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-10 pb-4 px-5 md:px-10 flex flex-col md:flex-row justify-between md:items-center'>
      <div className='flex gap-10'>
        <p className='font-[Gt]'>{new Date().getFullYear()}©</p>
      </div>
      <div className='flex items-center gap-5 mt-5 md:gap-10'>
        <Link href="https://www.linkedin.com/in/isola-pelumi-84661821a/" className='text-sm font-[Gt]'>LINKEDIN</Link>
        <Link href="https://github.com/philtechphilips" className='text-sm font-[Gt]' >GITHUB</Link>
        <Link href="https://twitter.com/philipsdcoda" className='text-sm font-[Gt]'>TWITTER</Link>
        <Link href="https://www.instagram.com/philipstheprogrammer/" className='text-sm font-[Gt]'>INSTAGRAM</Link>
      </div>
    </div>
  )
}

export default Footer
