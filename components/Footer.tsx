import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black pt-10 pb-4 px-5 md:px-10 flex flex-col md:flex-row justify-between md:items-center'>
      <div className='flex gap-10'>
        <p className='text-white'>2023©</p>
        <p className='text-white'>11:34 PM</p>
      </div>
      <div className='flex gap-5 mt-5 md:gap-10'>
        <Link href="#" className='text-white text-sm'>LINKEDIN</Link>
        <Link href="#" className='text-white text-sm'>GITHUB</Link>
        <Link href="#" className='text-white text-sm'>TWITTER</Link>
        <Link href="#" className='text-white text-sm'>INSTAGRAM</Link>
      </div>
    </div>
  )
}

export default Footer
